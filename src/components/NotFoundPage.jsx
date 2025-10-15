const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for could not be found.
      </p>
      <img src="/404.svg" alt="404 Illustration" className="w-64 h-64 mb-8" />
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Go back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
