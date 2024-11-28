import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong</h1>
      <p>{error.message || 'An unexpected error occurred'}</p>
      <button onClick={() => window.location.href = '/'}>
        Return to Homepage
      </button>
    </div>
  );
};

export default ErrorBoundary;
