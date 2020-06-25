import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchQuote } from './store/actions/quoteActions';

import './scss/styles.scss';

function App(props) {
  useEffect(() => {
    props.fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Trump Vomitorium</h1>
      {props.isFetching && (
        <Loader type='Puff' color='#00BFFF' height={100} width={100} />
      )}
      {props.quote && <h3>{props.quote}</h3>}
      {props.error && <h3 className='error'>{props.error}</h3>}
      <button onClick={props.fetchQuote}>New Quote</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.quote.isFetching,
    quote: state.quote.quote,
    error: state.quote.error
  };
};

export default connect(mapStateToProps, { fetchQuote })(App);
