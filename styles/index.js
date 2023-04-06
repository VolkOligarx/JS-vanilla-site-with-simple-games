function gameMonth() {
let monthNumber = prompt('Введите число месяца от 1 до 12')
if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
    alert('Это холодная зима!')
    return console.log(monthNumber);
}
else if (monthNumber >= 3 && monthNumber <= 5) {
     alert('Это цветущая весна!')
     return console.log(monthNumber);
}
else if (monthNumber >= 6 && monthNumber <= 8) {
     alert('Это жаркое лето!')
     return console.log(monthNumber);
}
else if (monthNumber >= 9 && monthNumber <= 11) {
    alert('Это дождливая осень!')
    return console.log(monthNumber);
}
else {
    alert('Вы ввели неправильное число')
    return console.log(monthNumber);
}
}
function gameWords() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let firstFruit = prompt('Какой был первый фрукт?')
    let lastFruit = prompt('Какой был последний фрукт?')
    if ((fruits[0].toLowerCase() == firstFruit && fruits[6].toLowerCase() == lastFruit) || (fruits[0] == firstFruit && fruits[6] == lastFruit)) {
        alert('Вы угадали оба фрукта! Молодец!')
    }
    else if (fruits[0].toLowerCase() == firstFruit || fruits[6].toLowerCase() == lastFruit || fruits[0] == firstFruit || fruits[6] == lastFruit) {
        alert('Вы были близки к победе!')
    }
    else {
        alert('Увы! Вы ответили неверно!')
    }
}

function gamePuzzle() {
    let userAnswer1 = prompt('Что может в одно и то же время стоять и ходить, висеть и стоять, ходить и лежать?')
    let trueAnswer = 'Часы'
    let trueAnswerlow = trueAnswer.toLowerCase()
    if (userAnswer1 == trueAnswer || userAnswer1 == trueAnswerlow) {
        return alert('Верно!')
    }
    else {
        alert('Не верно. Вот подсказка:\nЭтот предмет также может спешить и отставать не переставая идти')
        let userAnswer2 = prompt('Попробуйте еще раз (еще 2 попытки)')
        if (userAnswer2 == trueAnswer || userAnswer2 == trueAnswerlow) {
            return alert('Верно!')
        }
        else {
            alert('Не верно. Вот крайняя подсказка:\nВ этом предмете часто живет кукушка')
            let userAnswer3 = prompt('Крайняя попытка')
            if (userAnswer3 == trueAnswer || userAnswer3 == trueAnswerlow) {
                return alert('Верно!')
            }
            else {
                return alert('К сожалению вы проиграли, попробуйте еще раз')
            }
        }
    }
}