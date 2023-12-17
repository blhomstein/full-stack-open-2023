/* eslint-disable react/prop-types */
const Notification = ({message, styling}) =>{
    
    if (message === null) {
        return null
    }
    return (
        <div style={styling}>
            {message}
        </div>
    )
}

export default Notification