const NEWSAPI_KEY = '6c882482d8b64cbf9694358b6b70dc18';
const BASE_URL = 'https://newsapi.org/v2'; // localhost

// export function createNews(keyword) {
//   return fetch(`${BASE_URL}/everything?q=${keyword}&pageSize=100&apiKey=${NEWSAPI_KEY}`)
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       console.log(res);
//       return Promise.reject(`Error: ${res.status}`);
//     })
//     .catch((err) => {
//       console.error('Error al buscar noticias:', err);
//       throw err;
//     });
// }

export async function createNews(keyword) {
  const res = await fetch(`${BASE_URL}/everything?q=${keyword}&pageSize=2&apiKey=${NEWSAPI_KEY}`);

  const data = await res.json();
  // Una función NO se ejecuta sola
  // Solo hace 'console.log' si alguien la llama .
  // PRUEBA DEFINITIVA
  console.log('✔ Datos recibidos:', data);

  return data;
}
