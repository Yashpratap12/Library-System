import "./error.css";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <h1 className="heading">Error</h1>
      <div className="status">{err.status}</div>
      <p className="para1">Page {err.statusText}</p>
      <h3 className="warning">Warning : {err.error.stack}</h3>
      <p className="para2">
        The page you are trying to access doesn't exist or has been moved
      </p>
      <p className="para3">Try going back to homepage.</p>
      <Link to="/">
        <button className="homepage-button">Go to homepage</button>
      </Link>
    </div>
  );
}
export default ErrorPage;
