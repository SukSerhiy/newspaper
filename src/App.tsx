import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopHeadlinesRequest } from '@redux/reducers/topHeadlines/reducer';
import { getGeolocationRequest } from '@redux/reducers/geo/reducer';
import { getGeoLoading, getGeoData } from '@redux/reducers/geo/selectors';
import { getTopHeadlinesData } from '@redux/reducers/topHeadlines/selectors';
import { TCountryCode } from 'services/api/types';

const App = () => {
  const dispatch = useDispatch();
  const geoData = useSelector(getGeoData);
  const geoLoading = useSelector(getGeoLoading);
  const topHeadlines = useSelector(getTopHeadlinesData);
  const isoCode = geoData?.country.iso_code;

  console.log('topHeadlines', topHeadlines);

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
    <div className="wrapper">
      <header className="header">
        <div className="header__title">
          <h3>Newspaper</h3>
          <button type="button" className="search-btn">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
          <button type="button" className="menu-btn">
            <i className="fa-solid fa-bars" />
          </button>
        </div>
        <div className="search-input">
          <input type="text" className="search-input__input" />
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#">
                <span>Top Headlines</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Everything</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Sources</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="categories">
          <ul>
            <li>
              <a href="#">
                <span>General</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Business</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Entertainment</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Health</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Science</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Sports</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Technology</span>
              </a>
            </li>
          </ul>
        </nav>
        <div></div>
      </header>
      <main></main>
    </div>
  );
};

export default App;
