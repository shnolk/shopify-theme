var prevPos = window.pageYOffset;

window.onscroll = function() {
    var currentPos = window.pageYOffset;
    if (prevPos < currentPos && currentPos > 250) {
        document.getElementById("nav").classList.add('nav-hidden');
    } else {
        document.getElementById("nav").classList.remove('nav-hidden');
    }
    prevPos = currentPos
}


const images = document.querySelectorAll('[data-original]');

for (let image of images) {
	const filename = image.dataset.original
	const fullImg = new Image()
	fullImg.src = filename
	fullImg.onload = () => {
		setTimeout(() => {
			image.src = filename
		}, 1000)
	}
}

//const pixelator = document.querySelector('img')
//const filename = pixelator.dataset.original

//const image = new Image()
//image.src = filename

//image.onload = () => {
//	pixelator.src=filename
//}
