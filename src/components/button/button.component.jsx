import "./button.styles.scss";

const BUTTON_STYLE_TYPE = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, styleType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_STYLE_TYPE[styleType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
