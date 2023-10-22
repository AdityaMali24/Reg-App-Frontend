const initialState = {
  applicants: [],
  applicant: {},
  success: false,
  error: null,
  isLoading: false,
};
console.log(initialState);

const applicantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_APPLICANT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_APPLICANT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        applicants: action.payload,
      };
    case "GET_APPLICANT_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "add_applicant_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "add_applicant_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "add_applicant_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default applicantReducer;
