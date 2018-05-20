var jsConf = document.querySelector('.js-conf');
var menuContent =
  '<li><a href="p01.html" target="_self">Table of contents</a></li>' +
  '<li><a href="p02.html" target="_self">1. Multiple choice</a></li>' +
  '<li><a href="p03.html" target="_self">2. Select</a></li>' +
  '<li><a href="p04.html" target="_self">3. Drag and drop</a></li>' +
  '<li><a href="p05.html" target="_self">4. Multiple unique answer</a></li>' +
  '<li><a href="p06.html" target="_self">5. Multiples answers</a></li>' +
  '<li><a href="p07.html" target="_self">6. False and True</a></li>' +
  '<li><a href="p08.html" target="_self">7. Drag and drop images</a></li>' +
  '<li><a href="p09.html" target="_self">8. Accordion select</a></li>';
var totalPages = 9;
var currentPage = parseInt(jsConf.getAttribute('data-current-page'));
var menuContainer = document.querySelector('.js-menu');
var prevBtn = document.querySelectorAll('.js-prev-btn');
var nextBtn = document.querySelectorAll('.js-next-btn');
var currentPageContainer = document.querySelectorAll('.js-current-page');
var totalPagesContainer = document.querySelectorAll('.js-total-pages');

/*--Go to previos and next page--*/
function goPrev (pageNumber) {
    var new_link = '';
    if (pageNumber > 1){
        temp_page = pageNumber - 1;
        if (temp_page <= 9)
            new_link = 'p0' + temp_page + '.html';
        else
            new_link = 'p' + temp_page + '.html';
    }else{
        new_link = '../index.html';
    }
    window.location.href = new_link;
}

function goNext (pageNumber) {
    var new_link = '';
    if (pageNumber < totalPages){
        var temp_page = pageNumber + 1;
        if (temp_page <= 9)
            new_link = 'p0' + temp_page + '.html';
        else
            new_link = 'p' + temp_page + '.html';
    }else{
        new_link = 'javascript:void(0);';
    }
    window.location.href = new_link;
}

// Menu
menuContainer.innerHTML = menuContent;

currentPageContainer.forEach((el) => {
  el.innerHTML = currentPage;
});

totalPagesContainer.forEach((el) => {
  el.innerHTML = totalPages;
});

prevBtn.forEach((el) => {
  el.addEventListener('click', function (evt) {
    evt.preventDefault();
    goPrev(currentPage);
  });
});

nextBtn.forEach((el) => {
  el.addEventListener('click', function (evt) {
    evt.preventDefault();
    goNext(currentPage);
  });
});

