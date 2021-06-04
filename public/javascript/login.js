async function loginHandler(event) {
	// prevent the default behaviour of page reload
	event.preventDefault();

	// get the email and password from the form
	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();

	console.log("EMAIL: ", email, " PASSWORD: ", password);

	// log in with firebase
	await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			var user = userCredential.user;

			console.log("Login Successful!");
		})
		.catch((err) => {
			var errorCode = err.code;
			var errorMessage = err.message;
			alert("No user found with this username and password combination");
			return;
		});

	// this is a signout route for testing
	// await firebase
	// 	.auth()
	// 	.signOut()
	// 	.then(() => {
	// 		console.log("Sign out successful");
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 		console.log("Sign out not successful");
	// 	});

	var user = firebase.auth().currentUser;

	if (user) {
		console.log("Signed in Successfully");
	} else {
		console.log("did not work");
	}
}

document.querySelector("#login-button").addEventListener("click", loginHandler);
