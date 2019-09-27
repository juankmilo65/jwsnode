var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "xxxxx@hotmail.com",
    pass: "xxxxx"
  }
});

Tarjeta Santander Mexico, 5579070089317740, por favor 🙏🏼 no me comentes más de pagos externos por la aplicación yo debo decirte no por allá, por que la ultima vez me bloquearon, es la única forma donde consigo clientes, yo soy freelance, ademas me sirve la calificación por estatus, entonces si pueedes cambiar las condiciones del proyecto y cerrarlo cosa que no me afecte a mi, así sea pago de un dólar porfa 🙏🏼 y ponerme calificación, sería súper 

Para cerrar elproyecto de manera saticfactoria y que nos sirva a los 2 entonces, ponle no se un dolar a workana, cierra el proyecto or ahi 
para que me puedas calificar, eso me sirve y el exedente me lo pasas a la tarjeta, pero no escribas nada por el char, abajo etában mis correos.

var mailOptions = {
  from: "juankmilo65@hotmail.com",
  to: "darkfire65@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};

exports.enviaremail = function(req, res) {
  //aca validas si el usuario existe o no
  //y regresas

  // if (usuario no exite) {
  //         res.json({ result: "2" }) si el usuario no existe
  // }else
  // {
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.sendStatus(500);
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.json({ result: "1" });
    }
  });

  //}
};
