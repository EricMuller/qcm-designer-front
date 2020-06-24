const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000

express()
  .use(express.static(path.join(__dirname, '/dist/qcm-angular-front')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('/dist/qcm-angular-front/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
