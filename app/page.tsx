import { Suspense } from 'react';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <Suspense fallback={<div className="p-8 text-white/70">Loading...</div>}>
      <LandingPage />
    </Suspense>
  );
}
