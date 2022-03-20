import PropTypes from "prop-types";
import * as OccurrenceType from "../../state/Message/occurrence-type";

class Occurrence {
    constructor(type, title, messages, icon) {
        this.type =  type;
        this.title = title;
        this.messages = messages;
        this.icon = icon;
    }
}

 Occurrence.defaultProps = {
     type: OccurrenceType.INFO,
     title: "",
     icon: "",
     messages: [""]
 };

 Occurrence.propTypes = {
     type: PropTypes.string,
     title: PropTypes.string,
     icon: PropTypes.string,
     messages: PropTypes.array
 };

export default Occurrence;