import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { useDarkMode } from './hooks/useDarkMode';
import { getData } from './store/actions';

import Jobs from './components/Jobs';

export default function App() {
  const data = useSelector(state => state.data);
  const isFetching = useSelector(state => state.isFetching);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => dispatch(getData('', '')), []);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(getData(search, location));
    }
  };

  const handleReset = () => {
    setSearch('');
    setLocation('');
    dispatch(getData('', ''));
  };

  return (
    <div className='App'>
      <header>
        <h1 onClick={handleReset}>
          <span className='bold'>Git</span>Hired
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
        <button onClick={() => dispatch(getData(search, location))}>
          Search
        </button>
        <button onClick={toggleMode}>{darkMode ? 'Dark' : 'Light'}</button>
      </header>

      {isFetching && (
        <h4 className='fetching'>
          Fetching data, thank you for your patience...
        </h4>
      )}

      {!isFetching && <Jobs data={data} />}
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     data: state.data,
//     isFetching: state.isFetching,
//     error: state.error,
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getData },
// )(App);
