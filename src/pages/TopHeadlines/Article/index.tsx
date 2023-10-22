import { FC } from 'react';
import { IArticleProps } from './types';

const Article: FC<IArticleProps> = ({ item }) => {
  const { title, description, publishedAt, source, url, urlToImage } = item;

  return (
    <div className="top-headlines__article-item">
      <a href={url || ''} target="__blank">
        {urlToImage && (
          <img src={urlToImage} alt="" referrerPolicy="no-referrer" />
        )}
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default Article;
