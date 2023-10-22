import axios from "axios";

export const getApplicant = () => {
    return (dispatch) => {
      dispatch({ type: "GET_APPLICANT_PENDING" });
      axios
        .get("https://registerform-qiph.onrender.com/applicant/get-all-applicant")
        .then((res) => {
          console.log(res.data);
          dispatch({ type: "GET_APPLICANT_SUCCESS", payload: res.data.data });
        })
        .catch((err) => {
          dispatch({ type: "GET_APPLICANT_FAILED", payload: err.message });
        });
    };
  };

export const addApplicant = (data)=>{
  console.log('Inside addApplicant action with formData:', data);
    return(dispatch)=>{
        dispatch({type: "add_applicant_pending"});
        return axios
         .post("https://registerform-qiph.onrender.com/applicant/add-applicant", data)
         .then((res)=>{
            console.log(res.data.data)
            dispatch({type: "add_applicant_success", payload: res.data});
            return Promise.resolve();
         })
         .catch((error) => {
            dispatch({ type: "add_applicant_failed", payload: error.message });
            return Promise.reject();
          });
    };
};