const NEWSAPI_KEY = '6c882482d8b64cbf9694358b6b70dc18';
const BASE_URL = 'https://newsapi.org/v2'; // localhost

// Sintaxis tradicional: Function Declaration
// export async function nombreFuncion(parametros) { ... }
export async function createNewsData(keyword) {
  try {
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);

    const from = weekAgo.toISOString();
    const to = today.toISOString();

    const res = await fetch(
      `${BASE_URL}/everything?q=${keyword}&from=${from}&to=${to}&pageSize=50&apiKey=${NEWSAPI_KEY}`
    );

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
}
