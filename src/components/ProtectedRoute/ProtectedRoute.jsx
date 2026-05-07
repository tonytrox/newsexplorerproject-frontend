import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

// ProtectedRoute verifica si hay un usuario conectado
// si no hay sesión, redirige a la página principal
function ProtectedRoute({ element, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  if (isLoading) return null; // espera antes de decidir

  // si hay usuario → muestra el componente solicitado
  // si no hay usuario → redirige a /
  return currentUser ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
