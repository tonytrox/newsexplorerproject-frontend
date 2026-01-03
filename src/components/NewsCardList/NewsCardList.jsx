import './newsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

const mockData = [
  {
    id: 1,
    image: 'https://picsum.photos/400/272?1',
    date: '4 nov 2020',
    title: 'Noticia A',
    text: 'Texto A',
    source: 'treehugger',
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/272?2',
    date: '5 nov 2020',
    title: 'Noticia B',
    text: 'Texto B',
    source: 'example',
  },
  {
    id: 3,
    image: 'https://picsum.photos/400/272?3',
    date: '6 nov 2020',
    title: 'Noticia C',
    text: 'Texto C',
    source: 'example',
  },
  {
    id: 4,
    image: 'https://picsum.photos/400/272?4',
    date: '4 nov 2020',
    title: 'Noticia D',
    text: 'Texto A',
    source: 'treehugger',
  },
  {
    id: 5,
    image: 'https://picsum.photos/400/272?5',
    date: '4 nov 2020',
    title: 'Noticia E',
    text: 'Texto A',
    source: 'treehugger',
  },
  {
    id: 6,
    image: 'https://picsum.photos/400/272?6',
    date: '4 nov 2020',
    title: 'Noticia F',
    text: 'Texto A',
    source: 'treehugger',
  },
];

// const mockData = [false];

function NewsCardList() {
  return (
    <section className="news">
      <div className="news__container">
        <h2 className="news__title">Resultados de la búsqueda</h2>
        <ul className="news__list">
          {mockData.map((itemNews) => (
            <NewsCard key={itemNews.id} {...itemNews} />
          ))}
        </ul>
        <button className="news__button">Ver más</button>
      </div>
    </section>
  );
}

export default NewsCardList;
