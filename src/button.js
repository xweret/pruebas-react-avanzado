import PropTypes from 'prop-types'

export function Button({text = 'default'}) {   
    return  <button>
        {text}
    </button>

}

Button.propTypes = {
    text: PropTypes.string
}
//sdsd