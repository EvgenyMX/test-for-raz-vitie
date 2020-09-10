function visiblePopup() { 
    const popup = document.querySelector('.popup'); //Оболочка фона окон
    const openBtn = document.querySelector('.btn-open-reg'); //Кнопка открытия
    const nameModal = document.querySelector('.modal-registration'); //Модальное окно
    const closeBtn = document.querySelector('.modal-close'); //Кнопка закрытия окна

    //Открыть модальное окно по кнопке
    openBtn.addEventListener('click', () => {
        popup.style.display = "flex";
        nameModal.style.display = "flex";
        // nameModal.style.top = "100%";



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

}
visiblePopup('.btn-open-reg','.modal-registration');

function validationForm() { 
    const name = document.querySelector('#name'),
        email = document.querySelector('#email'),
        phone = document.querySelector('#phone'),
        btnReg = document.querySelector('.btn-reg');//Кнопка формы отправления данных

    //Запретить переход на станицу обработчика формы
    btnReg.addEventListener('click', (e) => {
        e.preventDefault();

        if ( name.value === '' ) {
            name.style = 'border: 1px solid red';
        } else if (name.value > 0)  {
            name.style = 'border: 1px solid #D3E7F9';
        }

        
        if ( email.value === '' ) {
            email.style = 'border: 1px solid red';
        } else if (email.value > 0)  {
            email.style = 'border: 1px solid #D3E7F9';
        }


        if ( phone.value === '' ) {
            phone.style = 'border: 1px solid red';
        } else if (phone.value > 0)  {
            phone.style = 'border: 1px solid #D3E7F9';
        }



        // email.style = 'border: 1px solid #D3E7F9';
        // modal-form input

    })


}
validationForm();