const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000

express()
  .use(express.static(path.join(__dirname, '/dist/qcm-angular-front')))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  .get('/', (req, res) => res.render('/dist/qcm-angular-front/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//Install express server
// const express = require('express');
// const path = require('path');
// const app = express();
// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/<name-of-app>'));
// app.get('/*', function(req,res) {
//   res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
// });
//
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
