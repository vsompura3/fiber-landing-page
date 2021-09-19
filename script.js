const hamburger = document.querySelector('.navbar__hamburger');
const navigation = document.querySelector('.navbar__nav-items');

function handleClick() {
  navigation.classList.toggle('open');
}

hamburger.addEventListener('click', handleClick);
