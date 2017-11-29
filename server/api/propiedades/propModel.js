'use strict'

var conn = require('../Connection'),

    PropModel = () => {}

PropModel.getAll = (cb) => {
    conn.query('SELECT * FROM propiedad', cb)
}

PropModel.getDestacados = (cb) => {
    conn.query('SELECT * FROM propiedad WHERE destacado=1 LIMIT 6', cb)
}

PropModel.getOne = (cb) => {
    conn.query('')
}

PropModel.insert = () => {

}

PropModel.update = () => {

}

PropModel.delete = () => {

}


module.exports = PropModel