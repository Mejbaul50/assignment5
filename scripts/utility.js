function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-primary-color');
    element.classList.add('text-white');
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function calculationTable(setNumber) {
    let ulElement = document.createElement('ul');
    ulElement.classList.add('flex', 'justify-between', 'my-5');

    let p1 = document.createElement('p');
    p1.textContent = setNumber;
    let p2 = document.createElement('p');
    p2.textContent = 'Economoy';
    let p3 = document.createElement('p');
    p3.textContent = '550';

    ulElement.appendChild(p1);
    ulElement.appendChild(p2);
    ulElement.appendChild(p3);

    const calculationTable = document.getElementById('calculation-table');
    calculationTable.appendChild(ulElement);
}

function disableOnClick(elementId) {
    let element = document.getElementById(elementId);

    if (element) {
        element.onclick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        };
        element.style.cursor = 'not-allowed';
    } else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
}
function alertSignal() {
    alert("only 4 ticket you can booked");
}

function alertSignalOfWrongCoupon(){
    alert("please enter valid coupon");
}




function disableAllSeats() {
    const seatElements = document.querySelectorAll('.py-1');
    seatElements.forEach(seat => {
        seat.onclick = null;
        seat.style.cursor = 'not-allowed';
        seat.style.opacity = 0.5;
    });
}

function totalPrice(totalTicket) {
    let totalTicketPrice = totalTicket * 550;
    const price = document.getElementById('total-price');
    price.innerText = totalTicketPrice;
    return totalTicketPrice;
}

function applyBtnDisable(value) {
    const applyButton = document.getElementById('coupon-apply-btn');
    const inputFild = document.getElementById('coupon-input-fild');
    if (value === 4) {
        applyButton.removeAttribute('disabled');
        inputFild.removeAttribute('disabled');
        alertSignal();
        getCoupon();
    }
}
function inputFildEnable(elementId) {
    const applyButton = document.getElementById(elementId);
    applyButton.removeAttribute('disabled');
}
function hideSection(elementId) {
    const hideCouponSection = document.getElementById(elementId);
    hideCouponSection.classList.add('hidden');
}
function discount20(discountValue, totalDiscount) {
    if (discountValue === 15) {
        let ulElement = document.getElementById('discountAmount');
        ulElement.classList.add('flex', 'justify-between', 'my-5' ,'font-bold' ,'text-xl');
        let p1 = document.createElement('p');
        p1.innerText= '15% Discount:';
        let p2 = document.createElement('p');
        p2.innerText = totalDiscount;
        ulElement.appendChild(p1);
        ulElement.appendChild(p2);

    }
    else if (discountValue === 20) {
        let ulElement = document.getElementById('discountAmount');
        ulElement.classList.add('flex', 'justify-between', 'my-5' ,'font-bold' ,'text-xl');
        let p1 = document.createElement('p');
        p1.innerText= '20% Discount:';
        let p2 = document.createElement('p');
        p2.innerText = totalDiscount;
        ulElement.appendChild(p1);
        ulElement.appendChild(p2);
    }
}

function getCoupon() {
    document.getElementById('coupon-apply-btn').addEventListener('click', function () {
        const commentBox = document.getElementById('coupon-input-fild');
        const newComment = commentBox.value;
        // console.log(newComment);
        if (newComment === 'Couple 20' || newComment === 'NEW15') {
            const calculationPrice = document.getElementById('total-price');
            let totalTicketPrice = parseInt(calculationPrice.innerText);
            if (newComment === 'Couple 20') {
                let discount=totalTicketPrice;
                totalTicketPrice = totalTicketPrice * 0.80;
                discount=discount-totalTicketPrice;


                setTextElementValueById('grand-total', totalTicketPrice);
                hideSection('coupon-section');
                discount20(20,discount);
            }
            else if (newComment === 'NEW15') {
                let discount=totalTicketPrice;
                totalTicketPrice = totalTicketPrice * 0.85;
                discount=discount-totalTicketPrice;
                setTextElementValueById('grand-total', totalTicketPrice);
                hideSection('coupon-section');
                discount20(15,discount);
            }
            
        }
    })
}


document.addEventListener("DOMContentLoaded", function () {
    const modalForm = document.getElementById("modalForm");
    const modal = document.getElementById("my_modal_4");
    const continueButton = modal.querySelector(".modal-action button");

    modalForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });
    continueButton.addEventListener("click", function () {
        modal.close();
    });
});

function getValue(){
    const commentBox = document.getElementById('coupon-input-fild');
    const newComment = commentBox.value;
    if(newComment != 'Couple 20' && newComment != 'NEW15'){
            alertSignalOfWrongCoupon();
    }
}