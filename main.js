// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph')

const handleClick = (event) => {
	const heart = event.target
	mimicServerCall('fakeUrl')
		.then(() => {
			if (heart.innerText === EMPTY_HEART) {
				heart.innerText = FULL_HEART
				heart.classList.toggle('activated-heart')
			} else {
				heart.innerText = EMPTY_HEART
				heart.classList.toggle('activated-heart')
			}
		})
		.catch((error) => {
			const errorModal = document.getElementById('modal')
			errorModal.innerHTML = `<h2>Random server error. Try again.</h2>
    <p id="modal-message"></p>`
			errorModal.classList.toggle('hidden')
			setTimeout(() => {
				errorModal.classList.toggle('hidden')
			}, 3000)
		})
}
hearts.forEach((button) => button.addEventListener('click', handleClick))

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < 0.2
			if (isRandomFailure) {
				reject('Random server error. Try again.')
			} else {
				resolve('Pretend remote server notified of action!')
			}
		}, 300)
	})
}
