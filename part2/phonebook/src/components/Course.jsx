/* eslint-disable react/prop-types */
const Course = ({courses}) => {
    
    
    // console.log("courses baby", courses);
    const keys = Object.keys(courses)
    
    
    // console.log("keysparts", keysPart);
    // const courseArray = keys.map(key =>{
    //     return {[key]: courses[key].parts[key]}
    // })
    let total = 0 
  
    
    if (!Array.isArray(courses) ) {
        return <div>Error: Courses is not an array</div>;
      }
    else {
        
        return (
            keys.map((key, index)=>{
                total = 0
                return ( 
                <div key={index}>
                    <h1>{courses[key].name}</h1>
                    
                      {
                        
                        Object.keys(courses[key].parts).map((keyp)=>{
                            total += courses[key].parts[keyp].exercises
                            return (
                                <div key={courses[key].parts.id}>
                                    {courses[key].parts[keyp].name} {courses[key].parts[keyp].exercises}
                                </div>
                            )
                        })
                        
                      }  
                    
                    <p>
                     total of {total}  exercises
                    </p>
                 </div>
                 )
               
            })
        )
    }
    
      
    
  }

  export default Course


//   <div>
//                     {keys.map((part)=>{
//                         console.log(total);
//                      //    total += courses.parts[part].exercises
//                         return (
//                          <p key={courses.parts[part].id}>
//                             {courses.parts[part].name} with this nb of exercises {courses.parts[part].exercises}
 
//                         </p>
//                         )
//                     })}
//                 </div>



// {Object.keys(courses[key]).map((keypart)=>{
//     return (
//     console.log(courses[key].parts)
//     )
//  })}