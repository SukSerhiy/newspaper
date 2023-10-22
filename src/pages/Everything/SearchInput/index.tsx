import { FC, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { ISearchInput } from './types';

const SearchInput: FC<ISearchInput> = ({ value, onChange }) => {
  const [s, setS] = useState(!value);

  useEffect(() => {
    if (value && s) {
      setS(false);
    }
    if (!value && !s) {
      setS(true);
    }
  }, [s, value]);

  return (
    <div className="search search__container">
      <input
        type="text"
        className="search__input"
        value={value}
        onChange={onChange}
        onFocus={() => {
          if (value) {
            setS(false);
          }
        }}
        placeholder='Search...'
      />
      {s && <FontAwesomeIcon icon={faSearch} className="search-icon search-icon__search" />}
      {/* <button type="button">
        <FontAwesomeIcon icon={faClose} className="search-icon search-icon__close" />
      </button> */}
    </div>
  );
};

export default SearchInput;
