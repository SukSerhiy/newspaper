import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from 'layouts/MainLayout';
import { getTopHeadlinesRequest } from '@redux/reducers/topHeadlines/reducer';
import { getGeolocationRequest } from '@redux/reducers/geo/reducer';
import { getGeoLoading, getGeoData } from '@redux/reducers/geo/selectors';
import { getTopHeadlinesData } from '@redux/reducers/topHeadlines/selectors';
import { TCountryCode } from 'services/api/types';

const TopHeadlines = () => {
  const dispatch = useDispatch();
  const geoData = useSelector(getGeoData);
  const geoLoading = useSelector(getGeoLoading);
  const topHeadlines = useSelector(getTopHeadlinesData);
  const isoCode = geoData?.country.iso_code;

  useEffect(() => {
    !geoLoading &&
      isoCode &&
      dispatch(
        getTopHeadlinesRequest({
          country: isoCode?.toLowerCase() as TCountryCode,
        })
      );
  }, [dispatch, geoLoading, isoCode]);

  useEffect(() => {
    dispatch(getGeolocationRequest());
  }, [dispatch]);

  return (
    <Layout>
      Top Headlines
    </Layout>
  );
};

export default TopHeadlines;
