const form = document.querySelector('form');


form.addEventListener('submit' , e => {

	e.preventDefault();
	const nameInput = document.querySelector("#name");
	const ageInput = document.querySelector("#age");

	const name = nameInput.value;
	const age = parseInt(ageInput.value);

	const promise = new Promise((resolve,reject)=> {
	 setTimeout(() => {
			if( age > 18 ){
			resolve(`Welcome, ${name}. You can vote.`);
		     }
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		}, 4000);	
	  });

	
})