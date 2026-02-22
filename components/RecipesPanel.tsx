'use client';

import { useEffect, useMemo, useState } from 'react';
import { commandSets, CommandItem, CommandPlatform } from '../data/commandSets';
import { recipes } from '../data/recipes';
import { copyText } from '../lib/clipboard';
import CopyButton from './CopyButton';

type PlatformFilter = 'windows' | 'unix';

type CopyState = 'idle' | 'copied' | 'error';

function matchesRecipePlatform(
  platform: CommandPlatform | undefined,
  filter: PlatformFilter
) {
  const value = platform ?? 'any';
  if (filter === 'windows') return value === 'any' || value === 'windows';
  return value === 'any' || value === 'mac' || value === 'linux';
}

function matchesRecipeQuery(
  query: string,
  recipeTitle: string,
  recipeIntro: string,
  commands: CommandItem[]
) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const bucket = [
    recipeTitle,
    recipeIntro,
    ...commands.map((cmd) => cmd.command),
    ...commands.map((cmd) => cmd.explain)
  ]
    .join(' ')
    .toLowerCase();
  return bucket.includes(q);
}

function RecipeStepCard({ step, index }: { step: CommandItem; index: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Step {index + 1}
          </p>
          <p className="text-base text-white/90">{step.explain}</p>
        </div>
        <CopyButton text={step.copyAs ?? step.command} label="Copy step" />
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-ink-850">
        <div className="flex items-center justify-between border-b border-white/10 bg-ink-800 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-500">
            {step.shellLabel}
          </span>
        </div>
        <pre className="overflow-x-auto px-5 py-4 text-lg font-mono text-white">
          <code>{step.command}</code>
        </pre>
      </div>
    </div>
  );
}

export default function RecipesPanel({
  query,
  platformFilter
}: {
  query: string;
  platformFilter: PlatformFilter;
}) {
  const commandMap = useMemo(() => {
    const map = new Map<string, CommandItem>();
    commandSets.forEach((set) => {
      set.items.forEach((item) => map.set(item.id, item));
    });
    return map;
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes
      .filter((recipe) => matchesRecipePlatform(recipe.platform, platformFilter))
      .filter((recipe) => {
        const commands = recipe.commandIds
          .map((id) => commandMap.get(id))
          .filter(Boolean) as CommandItem[];
        return matchesRecipeQuery(query, recipe.title, recipe.intro, commands);
      });
  }, [commandMap, platformFilter, query]);

  const [activeRecipeId, setActiveRecipeId] = useState(
    filteredRecipes[0]?.id ?? ''
  );

  useEffect(() => {
    if (!filteredRecipes.find((recipe) => recipe.id === activeRecipeId)) {
      setActiveRecipeId(filteredRecipes[0]?.id ?? '');
    }
  }, [filteredRecipes, activeRecipeId]);

  const activeRecipe = filteredRecipes.find(
    (recipe) => recipe.id === activeRecipeId
  );

  const steps: CommandItem[] = useMemo(() => {
    if (!activeRecipe) return [];
    return activeRecipe.commandIds
      .map((id) => commandMap.get(id))
      .filter(Boolean) as CommandItem[];
  }, [activeRecipe, commandMap]);

  const [copyState, setCopyState] = useState<CopyState>('idle');

  const handleCopyRecipe = async () => {
    if (!activeRecipe) return;
    const payload = steps.map((step) => step.copyAs ?? step.command).join('\n');
    const ok = await copyText(payload);
    setCopyState(ok ? 'copied' : 'error');
    setTimeout(() => setCopyState('idle'), 2000);
  };

  if (filteredRecipes.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-8 text-white/60">
        No recipes match that filter.
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Recipes
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {filteredRecipes.map((recipe) => (
            <button
              key={recipe.id}
              type="button"
              onClick={() => setActiveRecipeId(recipe.id)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                activeRecipeId === recipe.id
                  ? 'bg-moss-600 text-ink-950'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {recipe.title}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-2xl font-semibold">{activeRecipe?.title}</p>
              <p className="text-sm text-white/70">{activeRecipe?.intro}</p>
            </div>
            <button
              type="button"
              onClick={handleCopyRecipe}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                copyState === 'copied'
                  ? 'bg-moss-600 text-ink-950'
                  : copyState === 'error'
                  ? 'bg-red-500/80 text-white'
                  : 'bg-white text-ink-950 hover:bg-moss-500'
              }`}
            >
              {copyState === 'copied'
                ? 'Recipe copied'
                : copyState === 'error'
                ? 'Copy failed'
                : 'Copy recipe'}
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <RecipeStepCard key={`${step.id}-step`} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
