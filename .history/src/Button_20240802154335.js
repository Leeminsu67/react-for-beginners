import PropTypes from "prop-types";
import styled from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styled.title}>{text}</button>;
};

Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button;
