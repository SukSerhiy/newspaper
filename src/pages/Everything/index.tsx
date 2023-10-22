import { useEffect, useState, useMemo, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import {
  getEverythingRequest,
  clearResult,
} from '@redux/reducers/everything/reducer';
import {
  getEverythingLoading,
  getEverythingData,
} from '@redux/reducers/everything/selectors';
import Layout from 'layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCross } from '@fortawesome/free-solid-svg-icons';
import Article from 'components/Article';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchInput from './SearchInput';

const Everything = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const data = useSelector(getEverythingData);

  const notify = () => toast.error('Wow so easy!');

  const { articles = [] } = data || {};

  const fetchData = useMemo(
    () =>
      debounce((value: string) => {
        if (!value) {
          dispatch(clearResult());
          return;
        }
        dispatch(
          getEverythingRequest({
            q: value,
          })
        );
      }, 250),
    [dispatch]
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    fetchData(value);
  };

  return (
    <Layout className="everything">
      <SearchInput value={search} onChange={handleInputChange} />
      <div className="articles">
        {articles?.map((item, idx) => (
          <Article key={idx} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Everything;
