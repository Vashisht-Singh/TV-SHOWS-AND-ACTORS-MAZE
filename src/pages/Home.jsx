import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setDataApiError] = useState(null);
  const [searchOption, setSearchOption] = useState('SHOWS');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setDataApiError(null);

      if (searchOption === 'SHOWS') {
        const result = await searchForShows(`${searchStr}`);
        setApiData(result);
      } else {
        const result = await searchForPeople(`${searchStr}`);
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
    if (apiData) {
      {
        return apiData[0].show
          ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
          : apiData.map(data => (
              <div key={data.person.id}>{data.person.name}</div>
            ));
      }
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />

        <label>
          SHOWS
          <input
            type="radio"
            name="search-option"
            value="SHOWS"
            checked={searchOption === 'SHOWS'}
            onChange={onRadioChange}
          />
        </label>

        <label>
          ACTORS
          <input
            type="radio"
            name="search-option"
            value="ACTORS"
            checked={searchOption === 'ACTORS'}
            onChange={onRadioChange}
          />
        </label>

        <button type="Submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
