import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function ProtectedRoute({ element, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  if (isLoading) return null;

  return currentUser ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
