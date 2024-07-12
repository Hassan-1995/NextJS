import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-secondary mb-2">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
