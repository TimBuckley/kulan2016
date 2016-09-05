import fetch from 'isomorphic-fetch';

// --- Action-creators ---
function requestSpreadsheet() {
  return {
    type: 'SPREADSHEET_REQUEST'
  }
}

function receiveSpreadsheet(data) {
  return {
    type: 'SPREADSHEET_RECEIVED',
    payload: {
      data: data
    }
  }
}

function receiveSpreadsheetError(error) {
  return {
    type: 'SPREADSHEET_FAIL',
    payload: {
      error: error
    }
  }
}

// --- API ---
function fetchTable(tableUrl) {
  // Code related to API here. Should just return a promise.
  return fetch(tableUrl);
}

// --- Thunks ---
export default function getSpreadsheetData(tableUrl) {
  return function (dispatch, getState) {
    // Tell reducers that you are about to make a request.
    dispatch(requestSpreadsheet());

    // Make the request, then tell reducers about
    // whether it succeeded or not.
    // Here, we update the app state with the results of the API call.
    return fetch(tableUrl)
      .then(response => response.json())
        .then(data => dispatch(receiveSpreadsheet(data.feed.entry)),
              error => dispatch(receiveSpreadsheetError(error)));
  }
}
