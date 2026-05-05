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

// GET /users/me - obtener datos del usuario conectado
// necesita el token para que el backend sepa quién está pidiendo los datos
export const getUser = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // ← le decimos al backend quién somos
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json(); // retorna { name, email }
  } catch (error) {
    console.error('Error en getUser:', error);
    throw error;
  }
};

// GET /articles - obtener artículos guardados del usuario
export const getUserArticles = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // ← identifica al usuario
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json(); // retorna array de artículos [ {}, {}, ... ]
  } catch (error) {
    console.error('Error en getUserArticles:', error);
    throw error;
  }
};

// POST /articles - guardar un artículo
export const createArticle = async (token, article) => {
  try {
    const res = await fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // ← identifica al usuario
      },
      body: JSON.stringify(article), // ← datos del artículo a guardar
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json(); // retorna el artículo creado { _id, keyword, title, ... }
  } catch (error) {
    console.error('Error en createArticle:', error);
    throw error;
  }
};
