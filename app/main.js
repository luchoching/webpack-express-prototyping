require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./main.scss');
//require('bootstrap');

var Hello = require('./components/Hello.jsx');

React.render(<Hello />, document.getElementById('app'));
