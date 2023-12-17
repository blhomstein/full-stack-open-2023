/* eslint-disable react/prop-types */
const Total = (props) => {
    // const propvalues = Object.values(props)
    // const total = propvalues.reduce((acc,prop)=>{
    //     if(typeof prop == 'number'){
    //         return acc + prop;
    //     }
    //     console.log(acc);
    //     return acc;
    // }, 0)
    const {total} = props
    console.log(total);
    return (
        <>
        <p>Number of exercises is {total[0].exercises + total[1].exercises + total[2].exercises}</p>
        </>
    )
}

export default Total