import PropTypes from "prop-types";

const Button = ({ text }) => {
  return <button>{text}</button>;
};

Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button;
