'use strict'

var PropModel = require('./propModel'),
    PropController = () => {}

PropController.getAll = (req, res, next) => {
    PropModel.getAll((err, rows) => {
        if (err) {
            next(new Error('No hay registros'))
        } else {
            res.json(rows);
        }
    })
}

PropController.getDestacados = (req, res, next) => {
    PropModel.getDestacados((err, rows) => {
        if (err) {
            next(new Error('No hay registros'))
        } else {
            res.json(rows);
        }
    })
}

PropController.getOne = (req, res, next) => {

}

PropController.insert = (req, res, next) => {
    PropModel.insert((err, rows) => {
        if (err) {
            next(new Error('ah ocurrido un error', err))
        } else {
            console.log('exits');
        }
    })
}

PropController.update = (req, res, next) => {

}

PropController.delete = (req, res, next) => {

}

PropController.error404 = (req, res, next) => {

}

module.exports = PropController