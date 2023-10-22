import { combineReducers } from "redux";
import applicantReducer from "./Applicant/Reducer";

const rootReducer = combineReducers({
    applicant: applicantReducer
})

export default rootReducer;