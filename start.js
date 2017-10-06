const express = require('express');
const app = express();
const webpack = require('webpack');
const path = require('path');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackOpts = require('./webpack.config');
const graphqlServer = require('./src/server/graphql/server')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const compiler = webpack(webpackOpts);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackOpts.output.publicPath,
    stats: {colors: true}
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/graphql', graphqlServer);

app.use('/', express.static('dist'));

app.use('/css', express.static(__dirname + '/node_modules/bulma/css/'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
