import * as types from '../constants/actionTypes';

export function fetchList(searchKey) {
    console.log('ddddddd');
  return dispatch => {
    return fetch(`//api.github.com/search/users?q=${searchKey}`)
      .then(response => response.json())
      .then(json => dispatch({type:"GET_SEARCH", payload:json})
      )
  }
}
