import "./styles.css";
import PropTypes from "prop-types";

const Greeting = ({ name }) => {
  return <h2>Hello, {name}</h2>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default Greeting;
