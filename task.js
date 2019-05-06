function ButtonAction1(){
  var elements = document.querySelectorAll('ul>li');
  for(let i=0; i<elements.length; i++){
    var currentLi = elements[i];
    currentLi.innerHTML = 'random text';
  }
}
function ButtonAction2(){
  var elements = document.getElementsByTagName('li');
  var value = 0;
  for(let i=0; i<elements.length; i++){
    value++;
  }
  alert('Кількість всіх елементів <li>: '+value);
}
