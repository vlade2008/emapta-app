export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  error: '',
  data: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        error: '',
        data: action.payload,
      };
    case FETCH_ERROR:
      return {
        loading: false,
        error: 'Error fetching data',
        data: null,
      };
    default:
      return state;
  }
};
