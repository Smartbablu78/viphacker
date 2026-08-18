// ==========================================
// TELEGRAM CHANNEL LINK
// ==========================================

const TELEGRAM_LINK = "https://t.me/+Su0s0eRnPj81NGFl";


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
