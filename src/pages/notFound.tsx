import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center my-10">
      <h2 className="text-2xl pb-5">404</h2>
      <h3 className="text-2xl pb-5">このページは存在しません</h3>
      <p className="text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
