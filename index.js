// Это обьявление переменной, мы нашли кнопку по тэгу
var button = document.querySelector('button.cat_button');

/* Тут на кнопку навешиваем обработчик, который ждет клика
и тогда запустит логику */
button.addEventListener('click', function(){
    alert('Деньги - это не главное!')
})
