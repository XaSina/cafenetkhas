// js/typewriter.js
document.addEventListener("DOMContentLoaded", function () {
  const text = "ثبت‌نام‌های اینترنتی، اسکن، پرینت، کپی، خرید و فروش امتیاز رسالت";
  const container = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      container.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 90); // سرعت تایپ
    }
  }

  // اجرای افکت بعد از بارگذاری صفحه
  typeWriter();
});
// js/clock.js
document.addEventListener("DOMContentLoaded", function () {
  const clock = document.getElementById("digital-clock");

  function updateClock() {
    const now = new Date();

    // ساعت، دقیقه، ثانیه
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // نمایش فرمت 24 ساعته
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock(); // اجرا در شروع
  setInterval(updateClock, 1000); // هر ثانیه به‌روزرسانی
});
