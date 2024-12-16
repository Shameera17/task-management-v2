const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <h1 className="text-[2.5rem] font-bold mb-4">
        404 - Recipe Not Found 🍰
      </h1>
      <p className="text-[1.25rem] mb-4">
        Oops! Looks like this page is still in the oven. Maybe try a different
        recipe!
      </p>
      <a
        href="/"
        className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default PageNotFound;
