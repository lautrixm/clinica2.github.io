const button = document.getElementById('button')
const user = document.getElementById('user')
const password = document.getElementById('password')



button.addEventListener('click', (e) =>{
	e.preventDefault()
	const data = {
		user: user.value,
		password: password.value
	}

	console.log(data)
})