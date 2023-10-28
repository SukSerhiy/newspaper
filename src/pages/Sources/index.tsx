import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSourcesRequest } from '@redux/reducers/sources/reducer';
import { getSourcesLoading, getSourcesData } from '@redux/reducers/sources/selectors';
import Layout from 'layouts/MainLayout';
import Loading from 'components/Loading';
import SourceItem from './SourceItem';

const Sources = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getSourcesLoading);
  const data = useSelector(getSourcesData);

  useEffect(() => {
    dispatch(getSourcesRequest({}));
  }, [dispatch]);

  console.log('data', data);

  const { sources = [] } = data || {};

  return <Layout className={`sources ${loading ? 'loading' : ''}`}>
    <h2>Sources</h2>
    {loading ? <Loading /> : sources.map((item) => <SourceItem key={item.id} item={item} />)}
  </Layout>;
};

export default Sources;
