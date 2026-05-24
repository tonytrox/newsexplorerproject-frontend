export const normalizeArticle = (article, keyword = '') => {
  const isFromBackend = Boolean(article._id);

  if (isFromBackend) {
    return {
      _id: article._id,
      keyword: article.keyword,
      title: article.title,
      text: article.text,
      date: article.date,
      source: article.source,
      link: article.link,
      image: article.image,
    };
  }

  return {
    _id: null,
    keyword,
    title: article.title,
    text: article.description,
    date: article.publishedAt,
    source: article.source?.name,
    link: article.url,
    image: article.urlToImage,
  };
};
