import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { ISourceItem } from './types';

const SourceItem: FC<ISourceItem> = ({ item }) => {
  const { name, url, description } = item;
  return (
    <a href={url || ''} target="__blank" className="source-item">
      <h3 className="source-item__title">{name}</h3>
      <FontAwesomeIcon icon={faExternalLink} />
      <p>{description}</p>
    </a>
  );
};

export default SourceItem;
