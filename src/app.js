
// async function app() {
    
  
//     try {

      

//       const accessCertificate = await hmkit.downloadAccessCertificate(
//         "788ffd97-d820-4066-a3e8-0cd841bc4000"
//       );
//       const response = await hmkit.telematics.sendCommand(
//         hmkit.commands.Ignition.turnIgnitionOnOff({
//           state: "on" // Available values: ['on', 'off', 'start', 'lock', 'accessory']
//         }),
//         accessCertificate
//       );
  
//       console.log(response.bytes());
//       console.log(response.parse());
//     } catch (e) {
//       console.log(e);
//     }
//   }
// import express from 'express';
// const app     = express()
// console.log(app);

const express = require('express');
const app = express();

const HMKit = require('hmkit');

const hmkit = new HMKit(
    "c2JveMvWEjciphdfPRIMdlxSpH0Dyqnnk7Fy0KQe8/y2iot00Oub9z4LyyBpmCupvZPZTfQKDNcckok9SsXZz6I3kAXTOuWCluzE5f93h9BnTtbAXv//zA8HBRhKnImTynX3VuxevpAHZShZCJJmt5cg+Kl5APQpLfEqZhvgjl3f7NXV6YG9NK+IIlmS4ZhSebf1uDeFRJHO",
    "lpUtQ4ZclL5qtqm1BAIfjY+OmIit2R2OUvRLvaapnAs="
);


app.get('/login', (res) => {
  // REDIRECT goes here
  res.redirect('https://sandbox.owner-panel.high-mobility.com/oauth/new?app_id=50A018C136CF9BB7CE539590&client_id=788ffd97-d820-4066-a3e8-0cd841bc4000&redirect_uri=https://redirectmeto.com/http://localhost:3000/oauth/authorize')
})

app.set('port', (process.env.PORT || 3000))
const server = app.listen(app.get('port'), () => {})
  // Run your app
  app();