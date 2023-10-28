import { useMemo, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import {
  getEverythingRequest,
  setSearch,
  clearSearch,
} from '@redux/reducers/everything/reducer';
import {
  getEverythingLoading,
  getEverythingData,
  getSearch,
} from '@redux/reducers/everything/selectors';
import Layout from 'layouts/MainLayout';
import Article from 'components/Article';
import Loading from 'components/Loading';
import SearchInput from './SearchInput';

const Everything = () => {
  const dispatch = useDispatch();
  const data = useSelector(getEverythingData);
  const loading = useSelector(getEverythingLoading);
  const search = useSelector(getSearch);

  const { articles = [] } = data || {};

  const fetchData = useMemo(
    () =>
      debounce((value: string) => {
        if (!value) {
          dispatch(clearSearch());
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
    dispatch(setSearch(value));
    fetchData(value);
  };

  const handleClear = () => {
    dispatch(clearSearch());
  };

  return (
    <Layout className={`everything ${loading ? 'loading' : ''}`}>
      <SearchInput
        value={search}
        onChange={handleInputChange}
        onClear={handleClear}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="articles">
          {articles?.map((item, idx) => (
            <Article key={idx} item={item} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Everything;
