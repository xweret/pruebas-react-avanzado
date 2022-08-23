import PropTypes from 'prop-types'

export function Button({text = 'default'}) {   
    return  <button onClick={function(){
        console.log('clikeado')
    }}>
        {text}
    </button>

}

Button.propTypes = {
    text: PropTypes.string
}
//sdsd