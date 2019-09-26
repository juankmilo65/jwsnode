'use strict';
module.exports = function(app) {
  var recarga = require('../controllers/recargacontroller');

  // coordinates Routes
  app.route('/recarga')
    .get(recarga.list_recarga)
    .post(recarga.create_recarga);

  app.route('/recarga/:recargaId')
    .get(recarga.read_recarga)
    .put(recarga.update_recarga)
    .delete(recarga.delete_recarga);
};