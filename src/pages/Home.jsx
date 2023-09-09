import { useState } from 'react';
import { searchForShows } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setDataApiError] = useState(null);
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setDataApiError(null);
      const result = await searchForShows(`${searchStr}`);
      setApiData(result);
    } catch (exception) {
      setDataApiError(exception);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured:{apiDataError.message}</div>;
    }
    if (apiData) {
      {
        return apiData.map(data => (
          <div key={data.show.id}>{data.show.name}</div>
        ));
      }
    }

    return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="Submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
