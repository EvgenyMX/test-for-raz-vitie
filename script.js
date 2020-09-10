function visiblePopup() { 

    const popup = document.querySelector('.popup'); //Оболочка фона окон
    const openBtn = document.querySelector('btn-open-reg'); //Кнопка открытия
    const nameModal = document.querySelector('modal-registration'); //Модальное окно
    const closeBtn = document.querySelector('.modal-close'); //Кнопка закрытия окна
    const regBtn = document.querySelector('.btn-reg'); //Кнопка формаы отправления данных

    //Открыть модальное окно по кнопке
    openBtn.addEventListener('click', () => {
        popup.style.display = "flex";
        nameModal.style.display = "flex";
    });

    //Закрытие модального окна по кнопке "крестик" и при клике вне области окна
    //Отслеживаем в какой области был совершен клик
    window.addEventListener('click', (e) => {
        //Если у области совпадает класс с классов оболчки, то закрываем окно
        if ( e.target.classList.contains('popup') ) {
            popup.style.display = "none";
            nameModal.style.display = "none";
        } 
        // Иначе закрыть окно можно только по клику в кнопку
        else {
            closeBtn.addEventListener('click', () => {
                popup.style.display = "none";
                nameModal.style.display = "none";
            });
        }
    });
    //Запретить переход на станицу обработчика формы
    regBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })
}

visiblePopup('.btn-open-reg','.modal-registration');

