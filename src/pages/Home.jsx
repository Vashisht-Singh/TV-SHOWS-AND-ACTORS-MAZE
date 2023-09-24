import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/SHOWS/ShowsGrid';
import ActorsGrid from '../components/ACTORS/ActorsGrid';
const Home = () => {
  const [filter, setFilter] = useState(null);
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['SHOWS', filter],
    queryFn: () =>
      filter.soptn === 'SHOWS'
        ? searchForShows(filter.sstr)
        : searchForPeople(filter.sstr),
    enabled: !!filter,
  });

  const onSearch = async (soptn, sstr) => {
    setFilter({ soptn, sstr });
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
