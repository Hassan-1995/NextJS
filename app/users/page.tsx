import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1 className="font-extrabold text-2xl">Users</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
