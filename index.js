const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');
const skills = document.getElementsByClassName('skills');
const sideMenu = document.getElementById('side-menu');
const openSide = document.getElementById('fa-bars');
const closeSide = document.getElementById('fa-circle-xmark');

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link');
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab');
}

function forOpening() {
  sideMenu.style.right = '0';
}
openSide.addEventListener('click', forOpening);

function forClosing() {
  sideMenu.style.right = '-200px';
}
closeSide.addEventListener('click', forClosing);
