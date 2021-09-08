import PropTypes from 'prop-types';

const Button = ({classN,txtColor,bgColor,btnText,onClick}) => {

    return (
        <button 
            onClick={onClick} 
            className={`btn ${classN}`}
            style={{backgroundColor:bgColor, color:txtColor}}
        >
            {btnText}
        </button>
    )
}

function defaultFunc(){
    console.log("no actions assigned");
}

Button.defaultProps = {
    bgColor: 'pink',
    txtColor: 'green',
    btnText: "Text",
    onClick: defaultFunc
}

Button.propTypes = {
    text: PropTypes.string,
    txtColor: PropTypes.string,
    bgColor: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
