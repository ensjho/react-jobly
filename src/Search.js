import React, { useState } from 'react';

// TODO: consider keeping query in input after search
// TODO: debouncing the function (further study)

// search bar for searching jobs or companies
function Search({ doSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    doSearch({
      search: query
    });
    setQuery('');
  }

  return (
  <form onSubmit={handleSubmit} >
    <input
      type="search"
      placeholder="Search.."
      name="search"
      value={query}
      onChange={handleChange}
    />
    <button>Search!</button>
  </form>
  )
}

export default Search;