function visiblePopup() { 
    const popup = document.querySelector('.popup'); //Оболочка фона окон
    const openBtn = document.querySelector('.btn-open-reg'); //Кнопка открытия
    const nameModal = document.querySelector('.modal-registration'); //Модальное окно
    const closeBtn = document.querySelector('.modal-close'); //Кнопка закрытия окна

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
            document.querySelector('.modal-form').reset();//очистка формы
        } 
        // Иначе закрыть окно можно только по клику в кнопку
        else {
            closeBtn.addEventListener('click', () => {
                popup.style.display = "none";
                nameModal.style.display = "none";
                document.querySelector('.modal-form').reset();
            });
        }
    });

}
visiblePopup();

function validationForm() { 
    const name = document.querySelector('#name'),
        email = document.querySelector('#email'),
        phone = document.querySelector('#phone'),
        inputs = document.querySelectorAll('.input-form'),
        btnReg = document.querySelector('.btn-reg');

    btnReg.addEventListener('click', (e) => {
        e.preventDefault();

        inputs.forEach( function (e) { 
            e.style.border = '1px solid #D3E7F9';
            
            if (e.value === '') {
                e.style.border = '1px solid red';
            } else {
                e.style.border = '1px solid green';
                btnReg.innerText = 'Done';
            }
         })

    })


}
validationForm();