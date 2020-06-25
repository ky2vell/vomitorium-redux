import axios from 'axios';

export const fetchQuote = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_QUOTE_START' });
    axios
      .get('https://api.tronalddump.io/random/quote')
      .then(res => {
        dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.value });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_QUOTE_FAILURE',
          payload: `Error: ${err.response.data.error}, ${err.response.data.message}.`
        });
      });
  };
};
