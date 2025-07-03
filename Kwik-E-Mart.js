
const imagePaths = [
    './kuvat/Kwik-e-mart/kuva1.jpg',
    './kuvat/Kwik-e-mart/kuva2.jpg',
    './kuvat/Kwik-e-mart/kuva3.jpg',
    './kuvat/Kwik-e-mart/kuva4.jpg',
    './kuvat/Kwik-e-mart/kuva5.jpg',
    './kuvat/Kwik-e-mart/kuva6.jpg'
  ];

  let currentIndex = 0;

  function showLargeImage(src) {
    currentIndex = imagePaths.indexOf(src);
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('largeImageView').style.display = 'block';
    document.getElementById('largeImg').src = src;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    document.getElementById('largeImg').src = imagePaths[currentIndex];
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    document.getElementById('largeImg').src = imagePaths[currentIndex];
  }

  function goBack() {
    document.getElementById('largeImageView').style.display = 'none';
    document.getElementById('gallery').style.display = 'flex';
  }
