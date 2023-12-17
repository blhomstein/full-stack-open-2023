/* eslint-disable react/prop-types */


export const CountryForm = (props) => {
  return (
    <div key={props.index}>
        {props.name}
        <button onClick={props.handleClick}>
            show
        </button>
        
    </div>
  )
}
