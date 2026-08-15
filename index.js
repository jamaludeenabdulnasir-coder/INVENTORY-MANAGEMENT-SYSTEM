function toggleDropdown8() {
  const content = document.getElementById("dropdown-content8");
  content.classList.toggle("hidden8");
}

// Mobile Menu Toggle
function toggleMenu() {
  const menuList = document.querySelector('.menu-list');
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.menu-overlay');
  
  if (menuList) {
    menuList.classList.toggle('active');
  }
  if (hamburger) {
    hamburger.classList.toggle('active');
  }
  if (overlay) {
    overlay.classList.toggle('active');
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menuList = document.querySelector('.menu-list');
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuList && menuList.classList.contains('active')) {
    if (event.target !== menuToggle && !menuToggle.contains(event.target) && !menuList.contains(event.target)) {
      menuList.classList.remove('active');
    }
  }
});

// Close menu when window resizes to desktop
window.addEventListener('resize', function() {
  const menuList = document.querySelector('.menu-list');
  if (menuList && window.innerWidth > 768) {
    menuList.classList.remove('active');
  }
});





    
function toggleDropdown() {
  const header = document.querySelector(".dropdown-header");
  const content = document.getElementById("dropdown-content");
  header.classList.toggle("active");
  content.classList.toggle("show");
}

function toggleDropdown1() {
  const header = document.querySelector(".dropdown-header1");
  const content = document.getElementById("dropdown-content1");
  header.classList.toggle("active");
  content.classList.toggle("show");
}

function toggleDropdown2() {
  const header = document.querySelector(".dropdown-header2");
  const content = document.getElementById("dropdown-content2");
  header.classList.toggle("active");
  content.classList.toggle("show");
}

function toggleDropdown3() {
  const header = document.querySelector(".dropdown-header3");
  const content = document.getElementById("dropdown-content3");
  header.classList.toggle("active");
  content.classList.toggle("show");
}

function toggleDropdown4() {
  const header = document.querySelector(".dropdown-header4");
  const content = document.getElementById("dropdown-content4");
  header.classList.toggle("active");
  content.classList.toggle("show");
}

function toggleDropdown5() {
  const header = document.querySelector(".dropdown-header5");
  const content = document.getElementById("dropdown-content5");
  header.classList.toggle("active");
  content.classList.toggle("show");
}

function toggleDropdown6() {
  const header = document.querySelector(".dropdown-header6");
  const content = document.getElementById("dropdown-content6");
  header.classList.toggle("active");
  content.classList.toggle("show");
}

function toggleDropdown7() {
  const header = document.querySelector(".dropdown-header7");
  const content = document.getElementById("dropdown-content7");
  header.classList.toggle("active");
  content.classList.toggle("show");
}




function toggleDropdown1() {
  const content = document.getElementById("dropdown-content1");
  content.classList.toggle("hidden1");
}





function toggleDropdown2() {
  const content = document.getElementById("dropdown-content2");
  content.classList.toggle("hidden2");
}




function toggleDropdown3() {
  const content = document.getElementById("dropdown-content3");
  content.classList.toggle("hidden3");
}





function toggleDropdown4() {
  const content = document.getElementById("dropdown-content4");
  content.classList.toggle("hidden4");
}







function toggleDropdown5() {
  const content = document.getElementById("dropdown-content5");
  content.classList.toggle("hidden5");
}







function toggleDropdown6() {
  const content = document.getElementById("dropdown-content6");
  content.classList.toggle("hidden6");
}







function toggleDropdown7() {
  const content = document.getElementById("dropdown-content7");
  content.classList.toggle("hidden7");
}