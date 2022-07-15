import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <h2>{"Page Not Found (-_-)"}</h2>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFound;
