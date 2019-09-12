import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getData } from './store/actions';

import Jobs from './components/Jobs';

function App({ getData, data, isFetching }) {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => getData('', ''), []);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      getData(search, location);
    }
  };

  const handleReset = () => {
    setSearch('');
    setLocation('');
    getData('', '');
  };

  return (
    <div className='App'>
      <header>
        <h1 onClick={handleReset}>
          <span className='bold'>GitHub</span> Jobs
        </h1>
        <input
          type='text'
          placeholder='...search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => handleKeyDown(e)}
        />
        <input
          type='text'
          placeholder='...filter by location'
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyDown={e => handleKeyDown(e)}
        />
        <button onClick={() => getData(search, location)}>Search</button>
      </header>

      {isFetching && (
        <p className='fetching'>
          Fetching data, thank you for your patience...
        </p>
      )}

      {!isFetching && <Jobs data={data} />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { getData },
)(App);
