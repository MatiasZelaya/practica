'use strict'

var PropController = require('./propController'),
    express = require('express'),
    router = express.Router()

router.get('/', PropController.getAll)
router.get('/destacados', PropController.getDestacados)

router.get('/agregar', (req, res, next) => {
    res.render('add-user', { title: 'Agregar Usuario' })
})

router.post('api/usuarios', (req, res, next) => {
    req.getConnection((err, users) => {
        let user = {
            user_id: req.body.user_id,
            name: req.body.name,
            mail: req.body.mail,
            phone: req.body.phone
        }
    })
})

module.exports = router