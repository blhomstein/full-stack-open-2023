const mongoose = require('mongoose')

if(process.argv.length < 3) {
    console.log("give some password")
    console.log(process.argv)
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://schwanz:${password}@cluster0.49ifh.mongodb.net/Schwanz?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url).then (result =>{
    console.log("all good");
}).catch(e =>{
    console.log("not all good");
})

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)
const note = new Note({
    content: "some content",
    important : true,
})
Note.find({important: true}).then(result => {
    result.forEach(note =>{
        console.log(note)
    })
    mongoose.connection.close()
})

// note.save().then(result =>{
//     console.log('note is saved')
//     mongoose.connection.close()
// }).catch( e =>{
//     console.log("something happened")
// })
