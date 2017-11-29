'use strict'

var conn = require('../Connection'),

    UserModel = () => {}

UserModel.getAll = (cb) => {
    conn.query('SELECT * FROM USUARIOS', cb)
}

UserModel.getOne = (cb) => {
    conn.query('')
}

UserModel.insert = () => {

}

UserModel.update = () => {

}

UserModel.delete = () => {

}


module.exports = UserModel