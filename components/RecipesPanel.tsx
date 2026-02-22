'use client';

import { useEffect, useMemo, useState } from 'react';
import { copyText } from '../lib/clipboard';
import CopyButton from './CopyButton';
import type { CommandItem, Pack, Platform, RecipeStep } from '../data/schema';

type PlatformFilter = 'windows' | 'unix';

type CopyState = 'idle' | 'copied' | 'error';

type RecipeStepWithCommand = {
  step: RecipeStep;
  command?: CommandItem;
};

function matchesRecipePlatform(platform: Platform | undefined, filter: PlatformFilter) {
  const value = platform ?? 'any';
  if (filter === 'windows') return value === 'any' || value === 'windows';
  return value === 'any' || value === 'mac' || value === 'linux';
}

function matchesRecipeQuery(
  query: string,
  recipeTitle: string,
  recipeIntro: string,
  steps: RecipeStepWithCommand[]
) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const bucket = [
    recipeTitle,
    recipeIntro,
    ...steps.map((step) => (step.command ? step.command.command : '')),
    ...steps.map((step) => (step.command ? step.command.explain : '')),
    ...steps.map((step) => (step.step.type === 'text' ? step.step.body : ''))
  ]
    .join(' ')
    .toLowerCase();
  return bucket.includes(q);
}

function RecipeStepCard({ step, index }: { step: RecipeStepWithCommand; index: number }) {
  if (step.step.type === 'text') {
    return (
      <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Step {index + 1}
        </p>
        <p className="mt-3 text-lg font-semibold">{step.step.title}</p>
        <p className="mt-2 text-sm text-white/70">{step.step.body}</p>
      </div>
    );
  }

  if (!step.command) {
    return (
      <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-5 text-sm text-rose-100">
        Step {index + 1}: Missing command reference.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Step {index + 1}
          </p>
          <p className="text-base text-white/90">{step.command.explain}</p>
        </div>
        <CopyButton
          text={step.command.copyAs ?? step.command.command}
          label="Copy step"
          level={step.command.level}
        />
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-ink-850">
        <div className="flex items-center justify-between border-b border-white/10 bg-ink-800 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-500">
            {step.command.shellLabel}
          </span>
        </div>
        <pre className="overflow-x-auto px-5 py-4 text-lg font-mono text-white">
          <code>{step.command.command}</code>
        </pre>
      </div>
    </div>
  );
}

export default function RecipesPanel({
  pack,
  query,
  platformFilter
}: {
  pack: Pack;
  query: string;
  platformFilter: PlatformFilter;
}) {
  const commandMap = useMemo(() => {
    const map = new Map<string, CommandItem>();
    pack.sets.forEach((set) => {
      set.items.forEach((item) => map.set(item.id, item));
    });
    return map;
  }, [pack.sets]);

  const hydratedRecipes = useMemo(() => {
    return pack.recipes.map((recipe) => {
      const steps = recipe.steps.map((step) => {
        if (step.type === 'command') {
          return { step, command: commandMap.get(step.commandId) };
        }
        return { step };
      });
      return { ...recipe, steps };
    });
  }, [pack.recipes, commandMap]);

  const filteredRecipes = useMemo(() => {
    return hydratedRecipes
      .filter((recipe) => matchesRecipePlatform(recipe.platform, platformFilter))
      .filter((recipe) => matchesRecipeQuery(query, recipe.title, recipe.intro, recipe.steps));
  }, [hydratedRecipes, platformFilter, query]);

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

  const [copyState, setCopyState] = useState<CopyState>('idle');

  const handleCopyRecipe = async () => {
    if (!activeRecipe) return;
    const payload = activeRecipe.steps
      .filter((step) => step.step.type === 'command' && step.command)
      .map((step) => step.command?.copyAs ?? step.command?.command)
      .filter(Boolean)
      .join('\n');
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
          {activeRecipe?.steps.map((step, index) => (
            <RecipeStepCard
              key={step.step.id}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
