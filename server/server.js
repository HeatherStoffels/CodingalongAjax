//requires
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//globals
const port = 5000;
//uses
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));
//spinup server
app.listen(port, () =>{
    console.log('Server up on ', port);
    
})// end server up
//get route

const people =['Heather', 'Heather', 'Halima'];

app.get('/tester', (req, res)=>{
    console.log('In /Tester GET');
    res.send(people);
})

app.post('/tester', (req, res)=>{
console.log('got to post /tester', req.body ); //came from data in ajax
people.push(req.body.name);
res.send('woof');
});