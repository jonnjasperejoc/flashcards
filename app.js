const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');
const app = express();

var namesObj = [{lastName:"Ejoc",firstName:"Jonn Jasper"},{lastName:"Espera",firstName:"Kim"},{lastName:"Lupian",firstName:"Alfred"},{lastName:"Dumdum",firstName:"Heindrick"},{lastName:"Abella",firstName:"Angelo"},{lastName:"Taneo",firstName:"Peter Geneses"}];
var namesArr = [['Ejoc','Jonn Jasper'],['Espera','Kim'],['Lupian','Alfred'],['Dumdum','Heindrick'],['Abella','Angelo'],['Taneo','Peter Geneses']];

app.listen(3000, () =>{
	console.log("This is server is up and running in port 3000!");
});

app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));
app.use(mainRoutes);
app.use('/cards',cardRoutes);

/**** 404 - Not Found modules ****/
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});
/**** 404 - Not Found modules ****/