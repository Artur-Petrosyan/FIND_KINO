const Button = ({ children, variant = '', ...rest }) => {
    return (
        <button {...rest} className={`button ${variant}`}>
            {children}
        </button>
    );
};

export default Button;