import PropTypes from "prop-types"

function PrimaryButton({buttonText, textDecoration}) {
   return( <div>
        <button style={{
            padding : "0.5rem 1rem ",
            background : "#0F172A",
            borderRadius : "6px",
            color: "#fff",
            textDecoration: textDecoration
        }}>
            {buttonText}
        </button>
    </div>
    )
}

PrimaryButton.propTypes = {
    buttonText: PropTypes.string.isRequired
}

PrimaryButton.defaultProps ={
    buttonText : "Primary Button"
}

export default PrimaryButton