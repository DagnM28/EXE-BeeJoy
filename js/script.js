function smoothScroll(target) {
    var element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.closest('.navbar').length) {
        $(".navbar-toggler").click();
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.back-to-top').style.display = 'block';
    } else {
        document.querySelector('.back-to-top').style.display = 'none';
    }
}

function showPopup(productName) {
    var popup = document.getElementById('popup');
    var popupTitle = document.getElementById('popup-title');
    var popupMessage = document.getElementById('popup-message');

    popupTitle.textContent = 'Order Confirmation';
    popupMessage.textContent = 'Do you want to order ' + productName + '?';

    popup.style.display = 'block';

    document.addEventListener('mousedown', function (event) {
        if (!popup.contains(event.target)) {
            closePopup();
        }
    });

    document.body.style.overflow = 'hidden';
}

function placeOrder() {
    window.location.href = 'https://www.facebook.com';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';

    document.removeEventListener('mousedown', closePopup);
    document.body.style.overflow = '';
}

$(document).ready(function () {
    $('#faqCarousel').carousel({
        interval: 5000
    });
});

