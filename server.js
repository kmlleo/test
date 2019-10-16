const express = require('express')

const health = require('./health')


const app = express()

app.use('/health', health)
app.use('/')

app.listen(3000, ()=>{
	console.log('Server is running at port 3000')
})

