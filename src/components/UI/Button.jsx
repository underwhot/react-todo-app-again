import './Button.scss';

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
