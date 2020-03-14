import Moment from "moment";
import { isNil } from "lodash";

export default function(value) {
  if(!isNil(value) && value !== "") {
    let temp = Moment.unix(value);
    if(temp.isValid()) {
      value = temp.clone().format("MMM D, YYYY");
    }
  }

  return(value);
}
