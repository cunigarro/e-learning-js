const addValidationIcon = (result) => {
  var fragment = document.createDocumentFragment();
  var icon = document.createElement('i');

  icon.style.display = 'inline-block';
  icon.style.marginLeft = '10px';
  icon.style.marginRight = '10px';
  if(result == 'good') {
    icon.classList.add('good_icon');
  } else if(result == 'wrong') {
    icon.classList.add('wrong_icon');
  }

  fragment.appendChild(icon);

  return fragment;
}

export default addValidationIcon;
