// ==========================================
// TELEGRAM CHANNEL LINK
// ==========================================

const TELEGRAM_LINK = "https://t.me/YOUR_CHANNEL";


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