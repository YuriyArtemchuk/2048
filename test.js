console.log("OK1")
$(document).ready(function() {
    console.log("OK2")
    // Знаходимо елементи за їх id
    var startButton = $('#startButton');
    var overlay = $('#overlay');
    var gameField = $('#gameField');

    // Додаємо обробник події на клік по кнопці
    startButton.click(function() {
        // Ховаємо кнопку і overlay
        startButton.hide();
        overlay.hide();

        // Показуємо початкове поле гри
        gameField.show();

        // Тут може бути ваша логіка для розпочатку гри, лічильника тощо
        // Наприклад, можна використовувати setTimeout або setInterval для лічильника
        var seconds = 0;
        var timerInterval = setInterval(function() {
            seconds++;
            console.log('Timer:', seconds);
            // Тут може бути ваша логіка з лічильником
        }, 1000);

        // Приклад: Зупинка таймера через 5 секунд
        setTimeout(function() {
            clearInterval(timerInterval);
            console.log('Game started!');
        }, 5000);
    });
});
