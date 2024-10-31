
import PropTypes from "prop-types"

function SecondaryButton({buttonText}) {
   return( <div>
        <button style={{
            padding : "0.5rem 1rem ",
            background : "#fff",
            borderRadius : "6px",
            color: "#0F172A",
            border: "1px solid #0f172a"
        }}>
            {buttonText}
        </button>
    </div>
    )
}

SecondaryButton.propTypes = {
    buttonText: PropTypes.string.isRequired
}

SecondaryButton.defaultProps ={
    buttonText : "Secondary Button"
}

export default SecondaryButton