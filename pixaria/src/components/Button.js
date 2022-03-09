import PropTypes from 'prop-types';

const Button = ({className,txtColor,bgColor,btnText,onClick}) => {

    return (
        <button 
            onClick={onClick} 
            className={`btn ${className}`}
            style={{backgroundColor:bgColor, color:txtColor}}
        >
            {btnText}
        </button>
    )
}

function defaultFunc(){
    console.log("no actions assigned");
}

/* Button.defaultProps = {
    bgColor: 'pink',
    txtColor: '#000',
    btnText: "Text",
    onClick: defaultFunc
} */

Button.propTypes = {
    text: PropTypes.string,
    txtColor: PropTypes.string,
    bgColor: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
