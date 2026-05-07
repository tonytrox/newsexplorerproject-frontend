// normalizeArticle.js
// Convierte artículos de NewsAPI o del backend al mismo formato
// para que NewsCard siempre reciba props consistentes

export const normalizeArticle = (article, keyword = '') => {
  // detecta si el artículo viene del backend (tiene _id)
  // o de NewsAPI (tiene urlToImage)
  // Boolean: true si existe _id (backend), false si es undefined (NewsAPI)
  const isFromBackend = Boolean(article._id);

  if (isFromBackend) {
    // el backend ya usa el formato correcto, solo lo retornamos
    return {
      _id: article._id,
      keyword: article.keyword,
      title: article.title,
      text: article.text,
      date: article.date,
      source: article.source, // string directo: "CNN"
      link: article.link,
      image: article.image,
    };
  }

  // NewsAPI usa nombres diferentes — los mapeamos al formato del backend
  return {
    _id: null, // aún no tiene _id, no está guardado
    keyword, // viene del buscador
    title: article.title,
    text: article.description, // description → text
    date: article.publishedAt, // publishedAt → date
    source: article.source?.name, // source.name → source
    link: article.url, // url → link
    image: article.urlToImage, // urlToImage → image
  };
};
