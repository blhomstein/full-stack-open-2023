import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

// if (process.argv.length < 3) {
//     console.log("something isnt quite right");
//     process.exit(1)
// }
// const password = process.argv[2]
const uri = process.env.MONGO_URI
mongoose.set('strictQuery', false)
mongoose.connect(uri)

const phonebookSchema = mongoose.Schema({
    name : {
        type: String,
        minLength: 3,
        required: true
    },
    number: {
        type: String,
        minLength: 8,
        required: true
    }
})
phonebookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
// const Phonebook = mongoose.model('Phonebook', phonebookSchema)


// if (process.argv[2] && process.argv[3]){
    
//     const name = process.argv[2]
//     const number = process.argv[3]
//     const phoneNumberRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/
//     if(!phoneNumberRegex.test(number)) {
//         console.log("wrong phone format, please provide better format")
//         process.exit(1)
// }
// const phonebook = new Phonebook({
//     name: name,
//     number: number
// })
// phonebook.save().then(result =>{
//     console.log("saved")
//     mongoose.connection.close()
// })

   
// }
// else {
//     const fetching = Phonebook.find({}).then(result =>{
//         result.forEach(element => {
//             console.log(element);
//         });
//         mongoose.connection.close()
//     })
// }

export default mongoose.model('Phonebook', phonebookSchema)









