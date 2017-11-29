'use strict';

module.exports = function(app) {
    app.use('/api/users', require('./api/usuarios/usersRoute'));
    app.use('/api/propiedades', require('./api/propiedades/propRoute'));
}