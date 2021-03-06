const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");

// initialize the app
const app = express();
const PORT = process.env.PORT || 3001;

// --- uncomment when connection.js is set up ---
const sequelize = require("./config/connection");

// --- uncomment when sessions are set up ---
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// --- uncomment when sessions are set up ---
// set up sessions
const sess = {
	secret: "4g4JCTF3",
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

// require express-handlebars
const hbs = exphbs.create({});

// add a helper to validate equality
hbs.handlebars.registerHelper("checkEqual", function (v1, v2, options) {
	if (v1 === v2) {
		return options.fn(this);
	}
	return options.inverse(this);
});

// set up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// set up express handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(require("./controllers/"));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
