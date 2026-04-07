// dirección de tu backend
const BASE_URL = 'http://localhost:3000';

// Sintaxis moderna: Arrow Function
// export const nombreFuncion = async (params) => { ... }

// POST /signup - registrar usuario
export const signup = async (name, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    // throw 1: crea y lanza un error nuevo con el status HTTP
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`); // ← crea el error
    }

    return res.json();

    // throw 2: relanza el error que capturó el catch
  } catch (error) {
    console.error('Error en signup:', error);
    throw error; // ← lo pasa hacia arriba al componente que llamó signup
  }
};

// POST /signin - iniciar sesión
export const signin = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json(); // retorna un { token: "eyJhbGci..." } que el FrontEnd guardará en localStorage
  } catch (error) {
    console.error('Error en signin:', error);
    throw error;
  }
};

// FLUJO:
// res.ok es false
// → throw new Error() crea el error
// → catch lo captura
// → console.error lo muestra en consola
// → throw error lo pasa al componente
// → el componente lo muestra al usuario
