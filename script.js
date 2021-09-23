//Get the button
var mybutton = document.getElementById('myBtn');
var mysection = document.getElementById('toSection');
var rootElement = document.documentElement;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  var top = document.getElementById('top');
  top.scrollIntoView();
}

function toSection(page) {
  if (page === 'page1') {
    var section = document.getElementById('top');
  } else {
    var section = document.getElementById(page);
  }

  section.scrollIntoView();
}

mybutton.addEventListener('click', topFunction);
mysection.addEventListener('click', toSection);

function update() {
  const page1 = document.getElementById('page1');
  const pageTitle1 = document.getElementById('page-title-1');
  const rect1 = page1.getBoundingClientRect();

  const page2 = document.getElementById('page2');
  const pageTitle2 = document.getElementById('page-title-2');
  const rect2 = page2.getBoundingClientRect();

  const page3 = document.getElementById('page3');
  const pageTitle3 = document.getElementById('page-title-3');
  const rect3 = page3.getBoundingClientRect();

  const page4 = document.getElementById('page4');
  const pageTitle4 = document.getElementById('page-title-4');
  const rect4 = page4.getBoundingClientRect();

  const page5 = document.getElementById('page5');
  const pageTitle5 = document.getElementById('page-title-5');
  const rect5 = page5.getBoundingClientRect();

  let showTitle = pageTitle1;

  const heightToChangeTitle = 200;

  if (rect1.top <= heightToChangeTitle) {
    showTitle = pageTitle1;
  }
  if (rect2.top <= heightToChangeTitle) {
    showTitle = pageTitle2;
  }
  if (rect3.top <= heightToChangeTitle) {
    showTitle = pageTitle3;
  }
  if (rect4.top <= heightToChangeTitle) {
    showTitle = pageTitle4;
  }
  if (rect5.top <= heightToChangeTitle) {
    showTitle = pageTitle5;
  }

  if (showTitle === pageTitle1) {
    pageTitle1.style.visibility = 'visible';
    pageTitle2.style.visibility = 'hidden';
    pageTitle3.style.visibility = 'hidden';
    pageTitle4.style.visibility = 'hidden';
    pageTitle5.style.visibility = 'hidden';
  } else if (showTitle === pageTitle2) {
    pageTitle1.style.visibility = 'hidden';
    pageTitle2.style.visibility = 'visible';
    pageTitle3.style.visibility = 'hidden';
    pageTitle4.style.visibility = 'hidden';
    pageTitle5.style.visibility = 'hidden';
  } else if (showTitle === pageTitle3) {
    pageTitle1.style.visibility = 'hidden';
    pageTitle2.style.visibility = 'hidden';
    pageTitle3.style.visibility = 'visible';
    pageTitle4.style.visibility = 'hidden';
    pageTitle5.style.visibility = 'hidden';
  } else if (showTitle === pageTitle4) {
    pageTitle1.style.visibility = 'hidden';
    pageTitle2.style.visibility = 'hidden';
    pageTitle3.style.visibility = 'hidden';
    pageTitle4.style.visibility = 'visible';
    pageTitle5.style.visibility = 'hidden';
  } else if (showTitle === pageTitle5) {
    pageTitle1.style.visibility = 'hidden';
    pageTitle2.style.visibility = 'hidden';
    pageTitle3.style.visibility = 'hidden';
    pageTitle4.style.visibility = 'hidden';
    pageTitle5.style.visibility = 'visible';
  }
}

document.addEventListener('scroll', update);
update();
