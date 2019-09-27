var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "xxxxx@hotmail.com",
    pass: "xxxxx"
  }
});

paece, escribeme al correo y hablamos mejor, o me llamas juankmilo65@hotmail.com ahora debo entrar a un test, asi que hagamos est rapido, por que despues sago y no tendre conexión a mi computador

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
