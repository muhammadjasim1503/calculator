const express = require('express') // express is used to handle web routing
const bodyParser = require('body-parser') // body-parser is used to handle paramater posted from web in a post req

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/home', (req, res)=>{
  res.sendFile(__dirname + "/index.html")
})

app.post('/home', (req, res) => {
  var n1 = parseFloat(req.body.num1)
  var n2 = parseFloat(req.body.num2)
  var sum = n1 + n2
  res.send("The sum of "+ n1 + " + " + n2 +" = " + sum)
})


app.listen(3000, ()=>{ // .listen takes two paramaters: port number, callback function
  console.log("Server is running!")
})
