const initialState = {
  spreadsheetData: [],
  loading: false,
  errorMsg: ''
};

export default function spreadsheet(state = initialState, action) {
  switch (action.type) {
    case 'SPREADSHEET_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'SPREADSHEET_RECEIVED':
      return {
        ...state,
        loading: false,
        spreadsheetData: action.payload.data,
        errorMsg: ''
      };

    case 'SPREADSHEET_FAIL':
      return {
        loading: false,
        errorMsg: action.payload.error
      };

    default:
      return {...state};
  }
}