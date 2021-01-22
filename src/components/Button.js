import '../styles/Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
];

const SIZES = [
    'btn--medium',
    'btn--large'
];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    // if we add any style - apply it, if not the add the 1 style from an array above (btn--primary)
    const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];
    
    return (
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
    
    )
};