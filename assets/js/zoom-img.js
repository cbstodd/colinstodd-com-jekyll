// Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById('img01');
// var captionText = document.getElementById('caption');
// img.onclick = function() {
//   modal.style.display = 'block';
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName('closeModal');

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = 'none';
// };
console.log('zoom is called');
const zoomImg = document.querySelectorAll('img');
console.log(zoomImg);

// Add .enlarge class to every img on load:

// const allImages = new Array(...zoomImg);
// allImages.forEach(element => {
//   element.setAttribute('class', 'enlarge');
//   console.log(element);
// });

// console.log(allImages);
// const allImages = new Array(...zoomImg);
// console.log(allImages);

// function getCurrentImg(clickedImg) {
//   allImages.filter(img => {
//     // return allImages.indexOf(img) === allImages.indexOf(clickedImg)
//     console.log(allImages.indexOf(clickedImg));
//   });
// }
// // Changes text on button when clicked:
// function changeScaleSize(event) {
//   event.preventDefault();

//   getCurrentImg(event);
//   // let currentImg = allImages.filter(allImgs => {
//   // allImages.filter(allImgs => {
//   //   console.log(allImgs);
//   //   // if (indexOf(event) === indexOf(allImgs)) {
//   //   //   console.log(event);
//   //   //   console.log(allImages);
//   //   // }
//   // });
//   scaleSize === 1 ? (scaleSize += 0.5) : (scaleSize -= 0.5);
//   console.log('event: ', event);
//   zoomImg.setAttribute('style', `transform: scale(${scaleSize})`);
//   console.log('scaleSize: ', scaleSize);
// }

// zoomImg.addEventListener('click', changeScaleSize, (scaleSize = 1));
