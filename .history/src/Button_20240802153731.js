import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
      }}
    >
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button;
