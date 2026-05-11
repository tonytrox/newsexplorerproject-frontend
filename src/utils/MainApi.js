const BASE_URL = 'http://localhost:3000';

export const signup = async (name, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error en signup:', error);
    throw error;
  }
};

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

    return res.json();
  } catch (error) {
    console.error('Error en signin:', error);
    throw error;
  }
};

export const getUser = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error en getUser:', error);
    throw error;
  }
};

export const getUserArticles = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error en getUserArticles:', error);
    throw error;
  }
};

export const createArticle = async (token, article) => {
  try {
    const res = await fetch(`${BASE_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(article),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error en createArticle:', error);
    throw error;
  }
};

export const deleteArticle = async (token, articleId) => {
  try {
    const res = await fetch(`${BASE_URL}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error en deleteArticle:', error);
    throw error;
  }
};
