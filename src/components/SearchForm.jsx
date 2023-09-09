import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('SHOWS');
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    onSearch(searchOption, searchStr);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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
    </div>
  );
};
export default SearchForm;
