/* eslint-disable react/prop-types */
import Part from "./Part"
const Content = (props) => {
   const {partex} = props
   const [...names] = partex
   console.log(names);
//    console.log(partex);
    return (
        <div>
        <Part name={partex[0].name} exercise={partex[0].exercises} />
        <Part name={partex[1].name} exercise={partex[1].exercises} />
        <Part name={partex[2].name} exercise={partex[2].exercises} />
        </div>
    )
}

export default Content

{/* <Part name={partex[0].name} exercise={partex[0].exercise} />
        <Part name={partex[1].name} exercise={partex[1].exercise} />
        <Part name={partex[2].name} exercise={partex[2].exercise} /> */}




// {names.map((part, index)=>{
//     // console.log(part.name);
//     // <Part name={part.name} exercise={part.exercises} key={index}/>
//     <div key={index}>
//         <p >
//             {part.name}
//         </p>
//     </div>
// })}