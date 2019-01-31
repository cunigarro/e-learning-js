<h1>E-learning Js 0.1 (Alpha 1)</h1>

E-learning Js is licensed under a [MIT License](https://github.com/cunigarro/e-learning-js/blob/master/LICENSE).

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

<h2>Installation:</h2>

<h3>Npm:</h3>

```sh
npm install e-learning-js
```

<h2>Module:</h2>

<h3>Common js:</h3>

```javascript
require('e-learning-js');
```

<h3>Import ES6:</h3>

```javascript
import 'e-learning-js';
```

<h3>Import SASS:</h3>

```css
@import '~e-learning-js/dist/e-learning-js.min.css';
```

<h2>Usage:</h2>

You need to follow the next html structure for each activity and add javascript parameters for each of one.

Add the css file [e-learning_activities_0.1.css](https://github.com/cunigarro/e-learning-js/blob/master/dist/e-learning-js.min.css) inside the head tag and the js file [e-learning_activities_0.1.js](https://github.com/cunigarro/e-learning-js/blob/master/dist/e-learning-js.min.js) inside the body tag before close it.

<h3>Multiple choice</h3>

```html
<ul class="questions-container">
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

<button class="check-answers-button">
  Check
</button>

<button class="reset-answers-button">
  Reset
</button>

<button class="answer-answers-button">
  Answers
</button>
```

```javascript
create_multiple_choice({
  questions_html: '.questions-container',
  check_button: '.check-answers-button',
  reset_button: '.reset-answers-button',
  answer_button: '.answer-answers-button',
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
<ul class="number_list select_activity questions-container">
  <li data-question='1'>
      <div data-option='1'>A</div>
      <div data-option='2'>B</div>
      <div data-option='3'>C</div>
      <div data-option='4'>D</div>
  </li>
  <li data-question='2'>
      <div data-option='1'>E</div>
      <div data-option='2'>F</div>
      <div data-option='3'>G</div>
      <div data-option='4'>H</div>
  </li>
  <li data-question='3'>
      <div data-option='1'>I</div>
      <div data-option='2'>J</div>
      <div data-option='3'>K</div>
      <div data-option='4'>L</div>
  </li>
</ul>

<button class="check-answers-button">
  Check
</button>

<button class="reset-answers-button">
  Reset
</button>

<button class="answer-answers-button">
  Answers
</button>
```

```javascript
create_select({
  questions_html: '.questions-container',
  check_button: '.check-answers-button',
  reset_button: '.reset-answers-button',
  answer_button: '.answer-answers-button',
  answers: [3, 4, 2]
});
```

<h3>Drag and drop</h3>

```html
<ul class="questions-container">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing <span data-question="1" class="box"></span>.</li>
  <li>Ut pharetra nisl et lectus pretium <span data-question="2" class="box"></span>.</li>
  <li>Nunc sollicitudin eros vel eros tristique <span data-question="3" class="box"></span>.</li>
</ul>

<ul class="answers-container">
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

<button class="check-answers-button">
  Check
</button>

<button class="reset-answers-button">
  Reset
</button>

<button class="answer-answers-button">
  Answers
</button>
```

```javascript
create_drag_drop({
  options_html: '.questions-container',
  questions_html: '.answers-container',
  check_button: '.check-answers-button',
  reset_button: '.reset-answers-button',
  answer_button: '.answer-answers-button',
  answers: [2, 1, 3]
});
```

<h3>Multiple unique answer</h3>

```html
<ol class="word_list questions-container">
  <li>Question 1:
    <ol data-question="1" class="no_list">
      <li>
        <input data-option="option_1" value="1" type="radio" name="option_1"/><label for="option_1_1"><i class="fa"></i></label> Answer option 1.
      </li>
      <li>
        <input data-option="option_2" value="2" type="radio" name="option_1"/><label for="option_1_1"><i class="fa"></i></label> Answer option 2
      </li>
      <li>
        <input data-option="option_3" value="3" type="radio" name="option_1"/><label for="option_1_1"><i class="fa"></i></label> Answer option 3
      </li>
      <li>
        <input data-option="option_4" value="4" type="radio" name="option_1"/><label for="option_1_1"><i class="fa"></i></label> Answer option 4
      </li>
    </ol>
  </li>
  <li>Question 2:
    <ol data-question="2" class="no_list">
      <li>
        <input data-option="option_1" value="1" type="radio" name="option_2"/><label for="option_2_1"><i class="fa"></i></label> Answer option 1
      </li>
      <li>
        <input data-option="option_2" value="2" type="radio" name="option_2"/><label for="option_2_2"><i class="fa"></i></label> Answer option 2
      </li>
      <li>
        <input data-option="option_3" value="3" type="radio" name="option_2"/><label for="option_2_3"><i class="fa"></i></label> Answer option 3
      </li>
      <li>
        <input data-option="option_4" value="4" type="radio" name="option_2"/><label for="option_2_4"><i class="fa"></i></label> Answer option 4
      </li>
    </ol>
  </li>
  <li>Question 3:
    <ol data-question="3" class="no_list">
      <li>
        <input data-option="option_1" value="1" type="radio" name="option_3"/><label for="option_3_1"><i class="fa"></i></label> Answer option 1
      </li>
      <li>
        <input data-option="option_2" value="2" type="radio" name="option_3"/><label for="option_3_2"><i class="fa"></i></label> Answer option 2
      </li>
      <li>
        <input data-option="option_3" value="3" type="radio" name="option_3"/><label for="option_3_3"><i class="fa"></i></label> Answer option 3
      </li>
      <li>
        <input data-option="option_4" value="4" type="radio" name="option_3"/><label for="option_3_4"><i class="fa"></i></label> Answer option 4
      </li>
    </ol>
  </li>
</ol>

<button class="check-answers-button">
  Check
</button>

<button class="reset-answers-button">
  Reset
</button>

<button class="answer-answers-button">
  Answers
</button>
```

```javascript
create_multiple_unique_asnwers({
  questions_html: '.questions-container',
  check_button: '.check-answers-button',
  reset_button: '.reset-answers-button',
  answer_button: '.answer-answers-button',
  answers: [1, 2, 4]
});
```

<h3>Multiples answers</h3>

```html
<ol class="questions-container">
  <li class="question_text">Question 1:
    <ol class="no_list" data-question="1">
      <li><input type="checkbox" value="1" data-option="option_1"/><label for="option_1_1"><i class="fa"></i></label> Answer option 1.</li>
      <li><input type="checkbox" value="2" data-option="option_2"/><label for="option_1_2"><i class="fa"></i></label> Answer option 2.</li>
      <li><input type="checkbox" value="3" data-option="option_3"/><label for="option_1_3"><i class="fa"></i></label> Answer option 3.</li>
      <li><input type="checkbox" value="4" data-option="option_4"/><label for="option_1_4"><i class="fa"></i></label> Answer option 4.</li>
      <li><input type="checkbox" value="5" data-option="option_5"/><label for="option_1_5"><i class="fa"></i></label> Answer option 5.</li>
    </ol>
  </li>
  <li class="question_text">Question 2:
    <ol class="no_list" data-question="2">
      <li><input type="checkbox" value="1" data-option="option_1"/><label for="option_2_1"><i class="fa"></i></label> Answer option 1.</li>
      <li><input type="checkbox" value="2" data-option="option_2"/><label for="option_2_2"><i class="fa"></i></label> Answer option 2.</li>
      <li><input type="checkbox" value="3" data-option="option_3"/><label for="option_2_3"><i class="fa"></i></label> Answer option 3.</li>
      <li><input type="checkbox" value="4" data-option="option_4"/><label for="option_2_4"><i class="fa"></i></label> Answer option 4.</li>
    </ol>
  </li>
  <li class="question_text">Question 3:
    <ol class="no_list" data-question="3">
      <li><input type="checkbox" value="1" data-option="option_1"/><label for="option_3_1"><i class="fa"></i></label> Answer option 1.</li>
      <li><input type="checkbox" value="2" data-option="option_2"/><label for="option_3_2"><i class="fa"></i></label> Answer option 2.</li>
      <li><input type="checkbox" value="3" data-option="option_3"/><label for="option_3_3"><i class="fa"></i></label> Answer option 3.</li>
      <li><input type="checkbox" value="4" data-option="option_4"/><label for="option_3_4"><i class="fa"></i></label> Answer option 4.</li>
    </ol>
  </li>
</ol>

<button class="check-answers-button">
  Check
</button>

<button class="reset-answers-button">
  Reset
</button>

<button class="answer-answers-button">
  Answers
</button>
```

```javascript
create_multiple_answers({
  questions_html: '.questions-container',
  check_button: '.check-answers-button',
  reset_button: '.reset-answers-button',
  answer_button: '.answer-answers-button',
  answers: [
    [1, 3, 4, 5],
    [3, 4],
    [1, 3, 4]
  ]
});
```

<h3>False and True</h3>

```html
<ul class="questions-container">
  <li data-question="1">
    Question 1:
    <span><input type="radio" value="1" data-option="option_1" name="option_1"/><label for="option_1_1"><i class="fa"></i></label> (T)</span>&nbsp;
    <span><input  type="radio" value="2" data-option="option_2" name="option_1"/><label for="option_1_2"><i class="fa"></i></label> (F)</span>
  </li>
  <li data-question="2">
    Question 2:
    <span><input type="radio" value="1" data-option="option_1" name="option_2"/><label for="option_2_1"><i class="fa"></i></label> (T)</span>&nbsp;
    <span><input type="radio" value="2" data-option="option_2" name="option_2"/><label for="option_2_1"><i class="fa"></i></label> (F)</span>
  </li>
  <li data-question="3">
    Question 3:
    <span><input type="radio" value="1" data-option="option_1" name="option_3"/><label for="option_3_1"><i class="fa"></i></label> (T)</span>&nbsp;
    <span><input type="radio" value="2" data-option="option_2" name="option_3"/><label for="option_3_2"><i class="fa"></i></label> (F)</span>
  </li>
</ul>

<button class="check-answers-button">
  Check
</button>

<button class="reset-answers-button">
  Reset
</button>

<button class="answer-answers-button">
  Answers
</button>
```

```javascript
create_false_true({
  questions_html: '.questions-container',
  check_button: '.check-answers-button',
  reset_button: '.reset-answers-button',
  answer_button: '.answer-answers-button',
  answers: [1, 2, 1, 1]
});
```

<h3>Drag and drop images</h3>

```html
<table class="questions-container">
  <tr>
    <th colspan="2">Colocar imágenes</th>
  </tr>
  <tr>
    <td class="center"><span data-question="1" class="box_img"></span></td>
    <td class="center"><span data-question="2" class="box_img"></span></td>
  </tr>
  <tr>
    <td class="center"><span data-question="3" class="box_img"></span></td>
  </tr>
</table>

<table class="answers-container">
  <tr>
    <th colspan="2">Images list:</th>
  </tr>

  <tr>
    <td class="box_answer_content">
      <div data-option="1" class="box_img answer_par">
        <img src="http://via.placeholder.com/200x200" alt="">
      </div>
    </td>
    <td class="box_answer_content">
      <div data-option="2" class="box_img answer_par">
        <img src="http://via.placeholder.com/200x200" alt="">
      </div>
    </td>
  </tr>
  <tr>
    <td class="box_answer_content">
      <div data-option="3" class="box_img answer_par">
        <img src="http://via.placeholder.com/200x200" alt="">
      </div>
    </td>
  </tr>
</table>

<button class="check-answers-button">
  Check
</button>

<button class="reset-answers-button">
  Reset
</button>

<button class="answer-answers-button">
  Answers
</button>
```

```javascript
create_drag_drop_images({
  options_html: '.questions-container',
  questions_html: '.answers-container',
  check_button: '.check-answers-button',
  reset_button: '.reset-answers-button',
  answer_button: '.answer-answers-button',
  answers: [1, 3, 2]
});
```

<h3>Accordion select</h3>

```html
<ul class="questions-container">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing
  <select class="input_select">
    <option value="" selected></option>
    <option value="1">elit</option>
    <option value="2">justo</option>
    <option value="3">nisi</option>
  </select>
  .</li>
  <li>
    Praesent nisi quam, maximus non dui vel, venenatis rhoncus
    <select class="input_select">
      <option value="" selected></option>
      <option value="1">elit</option>
      <option value="2">justo</option>
      <option value="3">nisi</option>
    </select>
    .
  </li>
  <li>
    Curabitur a tristique
    <select class="input_select">
      <option value="" selected></option>
      <option value="1">elit</option>
      <option value="2">justo</option>
      <option value="3">nisi</option>
    </select>
    .
  </li>
</ul>
```

```javascript
create_accordion_select({
  options_html: '.questions-container',
  questions_html: '.answers-container',
  check_button: '.check-answers-button',
  reset_button: '.reset-answers-button',
  answer_button: '.answer-answers-button',
  answers: [2, 1, 3]
});
```
