import { Suspense } from 'react';
import ClientPage from '../components/ClientPage';

export default function Home() {
  return (
    <Suspense fallback={<div className="p-8 text-white/70">Loading...</div>}>
      <ClientPage />
    </Suspense>
  );
}
