const express = require('express');
const app = express();

app.post('/', (req, res) => {
    res.send('Got a POST request')
});
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
}); 
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello there');
});

//HTTP POST Requests
app.post('/api/courses', (req, res) => { 
    if(req.body.name.length > 3){
        const course = {
            id: courses.length + 1,
            name: req.body.name
        }
        courses.push(course);
        res.send(course);
    }
    else{
        res.send("Name is required and it should be a minimum of 3 characters");
    }
});

//HTTP PUT Requests
app.put('/api/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with the given ID was not found');
        return
    }
        const position = courses.findIndex(c => c.id === parseInt(req.params.id));
        const change = {
            id: req.params.id,
            name: req.body.name
        };
        courses[position] = change;
        res.send(change);
});

//HTTP DELETE Requests
app.delete('/api/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with the given ID was not found');
        return
    }
    const position = courses.findIndex(c => c.id === parseInt(req.params.id));
    const toDelete = courses[position];
    courses.splice(position, 1);
    res.send(toDelete);
});

const courses =[
    {id: 1, name:'Website Development'},
    {id: 2, name:'Fundamentals of IT Infrastructure'},
    {id: 3, name: 'Cybersecurity'}
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with the given ID was not found');
        return
    }
        res.send(course);
});
app.listen(3000, () => {
    console.log("Listening on port 3000 ...")
});