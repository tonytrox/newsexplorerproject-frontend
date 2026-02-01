const NEWSAPI_KEY = '6c882482d8b64cbf9694358b6b70dc18';
const BASE_URL = 'https://newsapi.org/v2'; // localhost

export async function createNewsData(keyword) {
  try {
    const today = new Date();
    const weekAgo = new Date(today);
    // Hora actual de UTC
    // setDate: reduce 7 dias y sobreeescribe el valor a 'weekago'
    weekAgo.setDate(weekAgo.getDate() - 7);

    // toISOString() convierte la fecha a un string estándar en UTC (ISO 8601)
    const from = weekAgo.toISOString();
    const to = today.toISOString();

    const res = await fetch(
      `${BASE_URL}/everything?q=${keyword}&from=${from}&to=${to}&pageSize=50&apiKey=${NEWSAPI_KEY}`
    );

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();
    // console.log('datos: ', today);
    // console.log('datos: ', weekAgo);
    // console.log('datos: ', data);
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
}

// export async function createNews(keyword) {
//   const res = await fetch(`${BASE_URL}/everything?q=${keyword}&pageSize=2&apiKey=${NEWSAPI_KEY}`);

//   const data = await res.json();
//   // Una función NO se ejecuta sola
//   // Solo hace 'console.log' si alguien la llama .
//   // PRUEBA DEFINITIVA
//   console.log('✔ Datos recibidos:', data);

//   return data;
// }
