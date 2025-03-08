document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    document.addEventListener("click", function (event) {
        let isClickInsideAccordion = false;

        accordionItems.forEach(item => {
            if (item.contains(event.target)) {
                isClickInsideAccordion = true;

                // Nếu là disabled thì không làm gì
                if (item.classList.contains("disabled")) return;

                // Toggle active class
                if (item.classList.contains("active")) {
                    item.classList.remove("active");
                } else {
                    // Xóa active của các mục khác
                    accordionItems.forEach(i => i.classList.remove("active"));
                    item.classList.add("active");
                }
            }
        });

        // Nếu click ra ngoài accordion thì xóa tất cả active
        if (!isClickInsideAccordion) {
            accordionItems.forEach(item => item.classList.remove("active"));
        }
    });
});