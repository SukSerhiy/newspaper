import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGeolocationRequest } from '@redux/reducers/geo/reducer';
import { getGeoLoading, getGeoData } from '@redux/reducers/geo/selectors';

const useGeolocation = () => {
  const dispatch = useDispatch();
  const geoData = useSelector(getGeoData);
  const geoLoading = useSelector(getGeoLoading);
  const isoCode = geoData?.country.iso_code;

  useEffect(() => {
    dispatch(getGeolocationRequest());
  }, [dispatch]);

  return { geoLoading, isoCode };
};

export default useGeolocation;
