
// import people from './persons.json' assert {type: "json"}
import { readFileSync } from 'fs'
import express from "express"
import morgan from 'morgan'
import cors from 'cors'
import Phonebook from './models/mongo.js'


const app = express()
// eslint-disable-next-line no-unused-vars
const people  = JSON.parse(readFileSync("./persons.json"))
// eslint-disable-next-line no-undef
const portNumber = process.env.PORT || 3000

// handlers
const errorHandler = (error,req,res,next) =>{
    console.log(error.message)
    console.log("this is the name of the error just in case ://",error.name)
    if(error.name ==='CastError'){
        return res.status(400).send({error: 'malformed baby'})
    }
    else if(error.name === 'ValidationError'){
        return res.status(400).json({error:error.message})
    }
   
    res.status(400).json({error : error.message})

    next(error)
}


app.use(express.json())
app.use(cors())
app.use(express.static('dist'))
morgan.token('body', function (res) { return JSON.stringify(res.body) })
// const logger = morgan('hamid', { skip: function(req, res) { return res.statusCode < 400 }, stream: path.dirname('./morgan.log') })
app.set('view engine', 'ejs')
app.use(morgan(':method :url :status :response-time ms :body'))



// eslint-disable-next-line no-unused-vars
const generateId = (idNumber) =>{
    const first =  Math.floor(Math.random() * idNumber)
    return Math.floor(Math.random() * first)
}




app.get('/api/persons', (req,res,next)=>{
    console.log(req.body)
    Phonebook.find({}).then(result =>{
        res.send(result)
    }).catch(e=>{
        return next(e)
    })

    
})
app.get('/info', async (req,res)=>{
    const time = new Date()
    const peopleLength = await Phonebook.find({}).then(result =>{
        return result.length
    })  

    res.render('index', {time, peopleLength})
})
app.get('/api/persons/:id', (req,res)=>{
    const id = req.params.id
    // const person = people.find(person => person.id == id)
    Phonebook.find({_id : id}).then(result =>{
        res.json(result)
        res.status(200).end()
    // eslint-disable-next-line no-unused-vars
    }).catch(e =>{
        res.status(404).end()
    })
    
    // console.log(person);
    
})
app.delete('/api/persons/:id', (req,res,next)=>{
    const id = req.params.id
    // const persons = people.filter(person=> person.id !== id)
    // eslint-disable-next-line no-unused-vars
    Phonebook.findByIdAndDelete(id).then(result =>{
        console.log("deleted")
        res.status(204).end()
    }).catch(error =>{
        return next(error)
        
    })
   
})


app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const phonenum = {
        name: body.name,
        number: body.number,
    }
  
    Phonebook.findByIdAndUpdate(request.params.id, phonenum, { new: true, runValidators: true, context: 'query' })
        .then(updatedNote => {
            response.json(updatedNote)
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req,res,next)=>{
    
    if(!req.body.name || !req.body.number ){
        console.log("bro you havent provided anything")
        return res.status(400).json({
            error: "provide smtg for fuck sake"
        })
    }
    const phoneNumberRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/
    if(!phoneNumberRegex.test(req.body.number)) {
        console.log("wrong phone format, please provide better format")
        return res.status(400).json({
            error: "the number is in wrong format, please provide the number in the correct format"
        })
    }

    const person = new Phonebook({
        name: req.body.name,
        number: req.body.number,
    })
    // eslint-disable-next-line no-unused-vars
    person.save().then(result =>{
        console.log("all is good the new entry is saved")
        res.json(person)
    
    }).catch(e =>{
        return next(e)
    })
})


app.use(errorHandler)

app.listen(portNumber, ()=>{
    console.log(`server is running on port : ${portNumber}`)

})