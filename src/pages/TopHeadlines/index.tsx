import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from 'layouts/MainLayout';
import { getTopHeadlinesRequest } from '@redux/reducers/topHeadlines/reducer';
import {
  getTopHeadlinesLoading,
  getTopHeadlinesData,
} from '@redux/reducers/topHeadlines/selectors';
import { TCountryCode } from 'services/api/types';
import useGeolocation from 'hooks/useGeolocation';
import Loading from 'components/Loading';
import Article from 'components/Article';

const TopHeadlines = () => {
  const dispatch = useDispatch();
  const topHeadlines = useSelector(getTopHeadlinesData);
  const loading = useSelector(getTopHeadlinesLoading);
  const { geoLoading, isoCode } = useGeolocation();

  useEffect(() => {
    !geoLoading &&
      isoCode &&
      dispatch(
        getTopHeadlinesRequest({
          country: isoCode?.toLowerCase() as TCountryCode,
        })
      );
  }, [dispatch, geoLoading, isoCode]);

  const { articles } = topHeadlines || {};

  return (
    <Layout className={`top-headlines ${loading ? 'loading' : ''}`}>
      <h2>Top headlines</h2>
      {loading ? <Loading /> : (
        <div className="top-headlines__articles articles">
          {articles?.map((item, idx) => (
            <Article key={idx} item={item} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default TopHeadlines;
