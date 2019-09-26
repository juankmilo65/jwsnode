'use strict';
module.exports = function(app) {
  var pagoservicio = require('../controllers/pagoserviciocontroller');

  // coordinates Routes
  app.route('/pagoservicio')
    .get(pagoservicio.list_pagoservicio)
    .post(pagoservicio.create_pagoservicio);

  app.route('/pagoservicio/:pagoservicioId')
    .get(pagoservicio.read_pagoservicio)
    .put(pagoservicio.update_pagoservicio)
    .delete(pagoservicio.delete_pagoservicio);
};