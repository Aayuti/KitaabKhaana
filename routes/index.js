const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //res.send('Heloo world this is Aayuti')
    res.render('index') //name of the view we created
})

module.exports = router