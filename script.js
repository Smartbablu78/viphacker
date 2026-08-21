// ==========================================
// TELEGRAM CHANNEL LINK
// ==========================================

const TELEGRAM_LINK = "https://t.me/+Su0s0eRnPj81NGFl";
// ==========================================
// 10 SECOND AUTO REDIRECT
// ==========================================

let secondsLeft = 17;

const countdownElement = document.getElementById("countdown");

const redirectTimer = setInterval(function () {

    secondsLeft--;

    if (countdownElement) {
        countdownElement.textContent = secondsLeft;
    }

    if (secondsLeft <= 0) {

        clearInterval(redirectTimer);

        window.location.href = TELEGRAM_LINK;
    }

}, 1000);

// ==========================================
// TELEGRAM BUTTON CLICK
// ==========================================

function joinTelegram() {

    // Meta Pixel Subscribe Event
    if (typeof fbq === "function") {
        fbq("track", "Subscribe");
    }

    // Open Telegram
    window.location.href = TELEGRAM_LINK;
}
