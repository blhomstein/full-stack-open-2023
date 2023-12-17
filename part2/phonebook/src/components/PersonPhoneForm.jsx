/* eslint-disable react/prop-types */
const PersonPhoneForm = (props) => {

    return (
        <form>
        <h1>add new</h1>
        <div>
          name: <input type={props.newName} onChange={props.handleNewPerson} />
        </div>
        <div>
          phone: <input type={props.newPhone} onChange={props.handleNewPhone} />
        </div>
        <div>
          <button type="submit" onClick={props.addPerson}>add</button>
        </div>
      </form>
    )
}
export default PersonPhoneForm