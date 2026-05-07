import { createContext } from 'react';

// createContext() crea un "canal" por donde fluyen los datos
// sin necesidad de pasar props entre componentes, eliminando el Prop drilling.
const CurrentUserContext = createContext(null);

// null = valor por defecto cuando no hay usuario conectado

export default CurrentUserContext;
