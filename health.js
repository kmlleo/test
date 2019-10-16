const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
	res.status(200).json({message:'Hello, Have a cup of green tea twice a day'})
})

router.get('/karma/fix',(req,res)=>{
	res.status(200).json({message:'Hello, You need to exercise for an hour'})
})

module.exports = router