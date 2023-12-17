/* eslint-disable react/prop-types */
const Search = (props) =>{
    return (
        <input type="text" value={props.searchPeople} onChange={props.handleSearch} />
    )
}


export default Search