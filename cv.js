// RWD Certificate popup
document.getElementById('certificate-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('rwd-popup').style.display = 'block';
  addBlurEffectToMain();
});

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
  removeBlurEffectFromMain();
}

// Project 1 popup
document.getElementById('project-one-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('project-one-popup').style.display = 'block';
  addBlurEffectToMain();
});

function closeProjectOnePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
  removeBlurEffectFromMain();

}

// Project 2 popup
document.getElementById('project-two-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('project-two-popup').style.display = 'block';
  addBlurEffectToMain();
});

function closeProjectTwoPopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
  removeBlurEffectFromMain();
}


// Function to add blur effect to specific components within main
function addBlurEffectToMain() {
  document.querySelectorAll('.welcomesection-container, .cards-container').forEach(function (element) {
    element.classList.add('popup-open');
  });
}

// Function to remove blur effect from specific components within main
function removeBlurEffectFromMain() {
  document.querySelectorAll('.welcomesection-container, .cards-container').forEach(function (element) {
    element.classList.remove('popup-open');
  });
}
