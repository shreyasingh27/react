import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <h2>Oops ! Something went wrong</h2>
      <h4>
        {err.status} : {err.statusText}
      </h4>
    </div>
  );
};
export default Error;
