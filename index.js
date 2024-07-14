import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

var url = "";

inquirer
    .prompt ([
        {
            name: 'url',
            message: 'Enter the url you want to mask: ',
            type: 'input'
        },
    ])
    .then ((answers) => {
        url = answers.url;
        // console.log (url);

        var qrImg = qr.image (url, { type: 'png' });
        qrImg.pipe (fs.createWriteStream ('qr.png'));

        fs.writeFile ("url.txt", url, (error) => {
            if (error) {
                console.log (error);
            }
            console.log ("file Saved!") ;           
        })
    })
    .catch ((error) => {
        console.log (error);
    })


// var qr_img = qr.image('Hello from NodeJS', { type: 'pdf' });
// qr_img.pipe(fs.createWriteStream('qr.pdf'));

// console.log (qr_img);

// inquirer
//     .prompt([
//         {
//             name: 'Name',
//             message: 'Enter your name: ',
//             type: 'input'
//         },
//         {
//             name: 'Email',
//             message: 'Enter your email: ',
//             type: 'input'
//         }, 
//         {
//             name: 'Age',
//             message: 'Enter your age: ',
//             type: 'number'
//         },
//         {
//             name: 'Confirmed',
//             message: 'Are you sure you want to submit? ',
//             type: 'confirm'
//         }
//     ])
//     .then((answers) => {
//         console.log (answers);
//     })
//     .catch((error) => {
//         console.log (error);
//     });
