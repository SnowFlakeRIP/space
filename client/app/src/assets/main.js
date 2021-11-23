import $ from 'jquery'

$(function () {
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" alt="1" src="./images/icons/Arrowleft.svg">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" alt="1" src="./images/icons/Arrowright.svg">',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('active')
    });
});
// function upFirst(str) {
//     if (!str) return str;
//
//     return str[0].toUpperCase() + str.slice(1);
// }
// let select = document.querySelector('.company')
// let key
// select.addEventListener('change', function () {
//     key = this.value
//     localStorage.setItem('company', key)
// })
//
//
// async function postData(url = '', data = {}) {
//
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.54
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
// }
// let checkPhoto = false
// let checkDisk = false
// document.querySelector('.photo').onclick = function () {
//     document.querySelector('.check-photo').checked = !document.querySelector('.check-photo').checked
//     checkPhoto = !checkPhoto
//     document.querySelector('.photo').classList.toggle('green')
// }
// document.querySelector('.check-photo').onchange = function () {
//     checkPhoto = !checkPhoto
//     document.querySelector('.photo').classList.toggle('green')
// }
// document.querySelector('.disk').onclick = function () {
//     document.querySelector('.check-disk').checked = !document.querySelector('.check-disk').checked
//     checkDisk = !checkDisk
//     document.querySelector('.disk').classList.toggle('green')
// }
// document.querySelector('.check-disk').onchange = function () {
//     checkDisk = !checkDisk
//     console.log(checkDisk)
//     document.querySelector('.disk').classList.toggle('green')
// }
// document.querySelector('.go').onclick = function () {
//     event.preventDefault()
//     let name = upFirst(document.querySelector('.name').value)
//     let surname = upFirst(document.querySelector('.surname').value)
//     let secondName = upFirst(document.querySelector('.secondName').value)
//     let date = new Date()
//     let count = document.querySelector('.number').value
//     let company = localStorage.getItem('company')
//     let photo = checkPhoto
//     let disk = checkDisk
//     // Валидация полученных значений
//     const nameControl = /^[a-zA-Zа-яА-Я ]{2,30}$/;
//     const countControl = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/
//     let isValidName = nameControl.test(name);
//     if (!isValidName) {
//         document.querySelector('.name').classList.add('red')
//         document.querySelector('.name').value = `${name} - Не является именем, попробуйте ввести другое значение`
//     }
//     let isValidSurname = nameControl.test(surname);
//     if(!isValidSurname){
//         document.querySelector('.surname').classList.add('red')
//         document.querySelector('.surname').value = `${surname} - Не является фамилией, попробуйте ввести другое значение`
//     }
//     let isValidSecondName = nameControl.test(secondName);
//     if(!isValidSecondName){
//         document.querySelector('.secondName').classList.add('red')
//         document.querySelector('.secondName').value = `${secondName} - Не является отчеством, попробуйте ввести другое значение`
//     }
//     let isValidCompany = nameControl.test(company);
//
//     let isValidCount = countControl.test(count)
//     // Условие для отправки запроса
//     if (isValidName && isValidSurname && isValidSecondName && isValidCount && isValidCompany) {
//         console.log(disk)
//         console.log(photo)
//         postData('http://127.0.0.1:3000/register', {
//             name: name,
//             surname: surname,
//             secondName: secondName,
//             date: date,
//             count: count,
//             name_of_company: company,
//             photo: photo,
//             disk: disk
//         })
//         alert('Заявка успешно отправлена')
//     }
//
// }
//
