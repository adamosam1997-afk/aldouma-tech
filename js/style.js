// رسالة ترحيب
console.log("مرحبا بك في موقع التقني الدومة");

// تأثير ظهور العناصر أثناء النزول

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

// تجهيز البطاقات قبل الظهور

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

});

// زر ترحيب

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("تم الضغط على زر");

    });

});