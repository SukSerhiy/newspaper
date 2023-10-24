import { FC } from 'react';
import noImage from 'assets/images/no-image.png';
import { IArticleProps } from './types';

const Article: FC<IArticleProps> = ({ item }) => {
  const { title, url, urlToImage } = item;

  const handleError = (error: any) => {
    console.log('error', error.target.src = noImage);
  };

  return (
    <div className="articles__article-item">
      <a href={url || ''} target="__blank">
        {urlToImage && (
          <img src={urlToImage} alt="" referrerPolicy="no-referrer" onError={handleError} />
        )}
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default Article;
