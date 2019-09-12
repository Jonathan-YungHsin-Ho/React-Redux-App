import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getData } from './store/actions';

import Jobs from './components/Jobs';

function App({ getData, data }) {
  useEffect(() => getData(), [getData]);

  return (
    <div className='App'>
      <header>
        <h1>GitHub Jobs</h1>
        <Jobs data={data} />
      </header>
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
