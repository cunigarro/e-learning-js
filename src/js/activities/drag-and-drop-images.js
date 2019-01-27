/*--Drag and drop images BEGIN --*/
const createDragAndDropImages = (options) => {
  var questions_html_box = document.querySelector(options.questions_html);
  var options_html;
  var questions_html;
  var check_button = document.querySelector(options.check_button);
  var reset_button = document.querySelector(options.reset_button);
  var answer_button = document.querySelector(options.answer_button);
  var answers = options.answers;
  var options_html_content = [];
  var currentlyDragging = null;
  var selected = [];

  questions_html_box.insertAdjacentHTML('beforeend', '<span class="js-invalid-msg invalid_msg"></span>');

  function activateDragAndDrop() {
    options_html = document.querySelector(options.options_html).querySelectorAll('.box_img');
    questions_html = document.querySelector(options.questions_html).querySelectorAll('.box_img');

    options_html.forEach(function(item, k) {
      options_html_content[k] = options_html[k].parentNode.innerHTML;
      item.setAttribute( 'draggable', true );
      item.ondragstart = function( ev ) {
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData( 'text/html', this.innerHTML )
        currentlyDragging = ev.target.parentNode;
      }
    });

    questions_html.forEach(function(item, k) {
      item.ondragenter = item.ondragover = function( ev ) {
        ev.preventDefault();
      };

      item.ondrop = function(ev) {
        ev.preventDefault();
        item.appendChild(currentlyDragging);
        selected[k] = parseInt(currentlyDragging.getAttribute('data-option'));
        currentlyDragging = null;
      };
    });
  }

  activateDragAndDrop();

  questions_html.forEach(function(item, i) {
    selected.push(0);
    item.insertAdjacentHTML('afterend', '<span></span>');
  });

  addEventHandler(check_button, 'click', function() {
    var iterate = 0;

    questions_html.forEach(function(item, i) {
      if(selected[i] != 0) {
        if(selected[i] == answers[i]) {
          item.nextSibling.appendChild(addValidationIcon('good'));
        } else {
          item.nextSibling.appendChild(addValidationIcon('wrong'));
        }

        answer_button.style.display = 'inline-block';
        reset_button.style.display = 'inline-block';
        check_button.style.display = 'none';
      } else {
        iterate++;
      }
    });

    if(iterate === questions_html.length) {
      questions_html_box.querySelector('.js-invalid-msg').innerHTML = 'Enter at least one response.';
    } else {
      questions_html_box.querySelector('.js-invalid-msg').innerHTML = '';
    }
  });

  addEventHandler(reset_button, 'click', function() {
    questions_html.forEach(function(item, i) {
      selected[i] = 0;
      item.innerHTML = '';
      item.nextSibling.innerHTML = '';
    });

    options_html.forEach(function(item, i) {
      document.querySelectorAll('.box_answer_content')[i].innerHTML = options_html_content[i];
    });

    activateDragAndDrop();

    answer_button.style.display = 'none';
    reset_button.style.display = 'none';
    check_button.style.display = 'inline-block';
  });

  addEventHandler(answer_button, 'click', function() {
    questions_html.forEach(function(item, i) {
      selected[i] = 0;
      item.innerHTML = options_html_content[answers[i] - 1];
      item.nextSibling.innerHTML = '';
    });

    options_html.forEach(function(item, i) {
      document.querySelectorAll('.box_answer_content')[i].innerHTML = '';
    });
  });
}
/*--Drag and drop images END --*/

export default createDragAndDropImages;
