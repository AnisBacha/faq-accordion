

document.querySelector(".main").addEventListener("click", (event) => {
    const faqHeader = event.target.closest(".faq-item");
    if (!faqHeader) return;

    const faqItem = faqHeader.parentElement;
    const icon = faqHeader.querySelector(".dropdown-icon");

    // Toggle 'active' class
    faqItem.classList.toggle("active");

    // Toggle between plus and minus icons
    if (faqItem.classList.contains("active")) {
        icon.src = "assets/images/icon-minus.svg"; // Show minus
        icon.alt = "minus";
    } else {
        icon.src = "assets/images/icon-plus.svg"; // Show plus
        icon.alt = "plus";
    }
});
