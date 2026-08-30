// تأثير بسيط عند تحريك الماوس على الأيقونات الجانبية
document.querySelectorAll('.icon-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.boxShadow = "0 0 20px rgba(255, 77, 184, 0.3)";
    });
    box.addEventListener('mouseout', () => {
        box.style.boxShadow = "none";
    });
});

// رسالة ترحيبية عند الضغط على زر الاتصال
document.querySelector('.connect-btn').addEventListener('click', () => {
    alert("Thank you for reaching out! Let's build something great.");
});