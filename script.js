// GREETING OTOMATIS + EMOJI
function updateGreeting() {
    const greeting = document.getElementById("greeting");
    if (!greeting) return;

    const hour = new Date().getHours();
    let text = "";

    if (hour >= 5 && hour < 12) {
        text = "Pagi ☀️";
    } else if (hour >= 12 && hour < 15) {
        text = "Siang 🌤️";
    } else if (hour >= 15 && hour < 18) {
        text = "Sore 🌅";
    } else {
        text = "Malam 🌙";
    }

    greeting.textContent = text;
}
updateGreeting();
