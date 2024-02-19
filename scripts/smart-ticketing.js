function scrollToElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        let offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function myFunction(elementId) {
    // bg color change
    const innerText = elementId.innerText;
    setBackgroundColorById(innerText);

    // update current set
    const currentSetElement = document.getElementById('current-set');
    const currentSetText = currentSetElement.innerText;
    const currentSet = parseInt(currentSetText);
    const updatedSet = currentSet - 1;
    setTextElementValueById('current-set', updatedSet);

    // calculation Table
    calculationTable(innerText);

    // disable after click
    disableOnClick(innerText);

    // seat booking counter
    const bookingSetElement = document.getElementById('booking-seat');
    const bookingSetText = bookingSetElement.innerText;
    const bookingSet = parseInt(bookingSetText);
    const updatedBookingSet = bookingSet + 1;
    setTextElementValueById('booking-seat', updatedBookingSet);

    // disable all onclick function
    if (updatedBookingSet === 4) {
        disableAllSeats();
    }

    // Total amount
    totalPrice(updatedBookingSet);

    // grand total 
    const grandTotal=document.getElementById('grand-total');
    grandTotal.innerText=totalPrice(updatedBookingSet);
    
    // disable apply btn
    applyBtnDisable(updatedBookingSet);
   
    inputFildEnable('mobile-number');
    inputFildEnable('input-name');
    inputFildEnable('input-email');

}
document.getElementById('mobile-number').addEventListener('keyup', function(){
    const mobileNumber=event.target.value;
    const lengthOfNumber=mobileNumber.length;
    const bookingSetElement = document.getElementById('booking-seat');
    const bookingSetText = bookingSetElement.innerText;
    const bookingSet = parseInt(bookingSetText);

    if(lengthOfNumber>0 && bookingSet>0){
        const applyButton=document.getElementById('next-btn');
        applyButton.removeAttribute('disabled');
    }
})

