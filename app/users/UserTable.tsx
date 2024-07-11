import React from 'react';
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // next: { revalidate: 10 },
    cache: 'no-store',
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );

  return (
    <div className='w-64'>
      <table className='bg-white border border-gray-200'>
        <thead>
          <tr className='bg-secondary'>
            <th className='px-4 py-2 text-left text-sm font-bold text-white'>
              <Link href={'/users?sortOrder=name'}>Name</Link>
            </th>
            <th className='px-4 py-2 text-left text-sm font-bold text-white'>
              <Link href={'/users?sortOrder=email'}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} className='even:bg-tertiary'>
              <td className='px-4 py-2 text-sm text-gray-700 border-t'>{user.name}</td>
              <td className='px-4 py-2 text-sm text-gray-700 border-t'>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
