import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/SHOWS/ShowsGrid';
import ActorsGrid from '../components/ACTORS/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setDataApiError] = useState(null);

  const onSearch = async (so, sstr) => {
    try {
      setDataApiError(null);

      if (so === 'SHOWS') {
        const result = await searchForShows(`${sstr}`);
        setApiData(result);
      } else {
        const result = await searchForPeople(`${sstr}`);
        setApiData(result);
      }
    } catch (exception) {
      setDataApiError(exception);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured:{apiDataError.message}</div>;
    }

    if (apiData?.length === null) {
      return <div>No Results</div>;
    }
    if (apiData) {
      {
        return apiData[0].show ? (
          <ShowsGrid apiData={apiData} />
        ) : (
          <ActorsGrid apiData={apiData} />
        );
      }
    }

    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
