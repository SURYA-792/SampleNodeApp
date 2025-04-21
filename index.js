import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Type your URL: ",
      name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;

    const qrImage = qr.image(url);
    qrImage.pipe(fs.createWriteStream("qr-image.jpg"));

    fs.writeFile("message.txt", url, (err) => {
      if (err) throw err;
      console.log("URL has been saved to message.txt");
    });

    console.log("QR Code generated and saved as 'qr-image.png'!");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
