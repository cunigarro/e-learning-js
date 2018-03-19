<h1>E-learning Js 0.1 (Alpha 1)</h1>

E-learning Js is licensed under a Creative Commons Attribution 3.0 Unported (CC BY 3.0) (http://creativecommons.org/licenses/by/3.0/) and MIT License - http://opensource.org/licenses/mit-license.html.

Actually this library is an entire demo, feel free to download and use it on any project.

<h2>List of activities:</h2>

Each design has a default design but you can also replace the images to fit your design.

These are the following activities:

<ol>
  <li><strong>Multiple choice</strong></li>
  <li><strong>Select</strong></li>
  <li><strong>Drag and drop</strong></li>
  <li><strong>Multiple unique answer</strong></li>
  <li><strong>Multiples answers</strong></li>
  <li><strong>False and True</strong></li>
  <li><strong>Drag and drop images</strong></li>
  <li><strong>Accordion select</strong></li>
</ol>

<h2>Usage:</h2>

You need to copy the html for each activity and add javascript parameters for each of one. For custom configuration you have to follow the html structure.

Copy the file [e-learning_activities_0.1.js](https://github.com/cunigarro/e-learning-js/blob/develop/js/e-learning_activities_0.1.js) inside the body tag before close it.

You can modify all styles about activities. Next I'm going to create themes to add ui design. Use basic html and javascript code to generate activity.

<h3>Multiple choice</h3>

```html
<ul class="questions-container-selector">
  <li>
    ¿Question one?: <input type="text">
  </li>
  <li>
    ¿Question two?: <input type="text">
  </li>
  <li>
    ¿Question three?: <input type="text">
  </li>
</ul>

<button class="check-answers-button-selector">
  Check
</button>

<button class="reset-answers-button-selector">
  Reset
</button>

<button class="answer-answers-button-selector">
  Answers
</button>
```

```javascript
create_multiple_choice({
  questions_html: '.questions-container-selector',
  check_button: '.check-answers-button-selector',
  reset_button: '.reset-answers-button-selector',
  answer_button: '.answer-answers-button-selector',
  // Multiples options of answer for each question
  answers: [
    ['answer-1-1', 'answer-1-2', 'answer-1-3'],
    ['answer-2-1', 'answer-2-2'],
    ['answer-3-1', 'answer-3-2']
  ]
});
```

<h3>Select</h3>

```html
<ul class="questions-container-selector">
  <li class='js-select-input' data-question='1'>
      <div data-answer='1'>A</div>
      <div data-answer='2'>B</div>
      <div data-answer='3'>C</div>
      <div data-answer='4'>D</div>
  </li>
  <li class='js-select-input' data-question='2'>
      <div data-answer='1'>E</div>
      <div data-answer='2'>F</div>
      <div data-answer='3'>G</div>
      <div data-answer='4'>H</div>
  </li>
  <li class='js-select-input' data-question='3'>
      <div data-answer='1'>I</div>
      <div data-answer='2'>J</div>
      <div data-answer='3'>K</div>
      <div data-answer='4'>L</div>
  </li>
</ul>

<button class="check-answers-button-selector">
  Check
</button>

<button class="reset-answers-button-selector">
  Reset
</button>

<button class="answer-answers-button-selector">
  Answers
</button>
```

```javascript
create_select({
  questions_html: '.questions-container-selector',
  check_button: '.check-answers-button-selector',
  reset_button: '.reset-answers-button-selector',
  answer_button: '.answer-answers-button-selector',
  answers: [3, 4, 2]
});
```

<h3>Drag and drop</h3>

```html
<ul class="questions-container-selector">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing <span data-question="1" class="box"></span>.</li>
  <li>Ut pharetra nisl et lectus pretium <span data-question="2" class="box"></span>.</li>
  <li>Nunc sollicitudin eros vel eros tristique <span data-question="3" class="box"></span>.</li>
</ul>

<ul class="answers-container-selector">
  <li class="box_answer_content">
    <div class="box answer_par" data-option="1">rutrum</div>
  </li>
  <li class="box_answer_content">
    <div class="box answer_par" data-option="2">elit</div>
  </li>
  <li class="box_answer_content">
    <div class="box answer_par" data-option="4">venenatis</div>
  </li>
</ul>

<button class="check-answers-button-selector">
  Check
</button>

<button class="reset-answers-button-selector">
  Reset
</button>

<button class="answer-answers-button-selector">
  Answers
</button>
```

```javascript
create_drag_drop({
  options_html: '.questions-container-selector',
  questions_html: '.answers-container-selector',
  check_button: '.check-answers-button-selector',
  reset_button: '.reset-answers-button-selector',
  answer_button: '.answer-answers-button-selector',
  answers: [2, 1, 3]
});
```
