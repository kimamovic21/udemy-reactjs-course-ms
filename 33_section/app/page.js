import { Suspense } from 'react';
import fs from 'node:fs/promises';
import UsePromiseDemo from '@/components/UsePromisesDemo.js';
import ErrorBoundary from '@/components/ErrorBoundary.js';
import ServerActionsDemo from '@/components/ServerActionsDemo.js';

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) =>
    setTimeout(async () => {
      const data = await fs.readFile('dummy-db.json', 'utf-8');
      const users = JSON.parse(data);
      resolve(users);
      reject(new Error('Error!'));
    }, 2000)
  );

  return (
    <main>
      <ErrorBoundary fallback={<p>Something went wrong!</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <ServerActionsDemo />
          <UsePromiseDemo usersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};
