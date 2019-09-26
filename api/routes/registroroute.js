'use strict';
module.exports = function(app) {
  var registro = require('../controllers/registrocontroller');

  // coordinates Routes
  app.route('/registro')
    .get(registro.list_registro)
    .post(registro.create_registro);

  app.route('/registro/:registroId')
    .get(registro.read_registro)
    .put(registro.update_registro)
    .delete(registro.delete_registro);
};