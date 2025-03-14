document.addEventListener("DOMContentLoaded", function () {
    const tabMenu = document.querySelector(".tab-menu ul");
    const tabContainer = document.querySelector(".tab-menu");

    // Đặt position relative để định vị mũi tên
    tabContainer.style.position = "relative";

    // Tạo nút mũi tên trái & phải
    const leftArrow = document.createElement("button");
    const rightArrow = document.createElement("button");

    leftArrow.className = "tab-arrow tab-arrow-left";
    rightArrow.className = "tab-arrow tab-arrow-right";

    leftArrow.innerHTML = '<i class="fa fa-chevron-left"></i>';
    rightArrow.innerHTML = '<i class="fa fa-chevron-right"></i>';

    tabContainer.appendChild(leftArrow);
    tabContainer.appendChild(rightArrow);

    const scrollAmount = tabMenu.clientWidth ; // Lướt qua 3 mục mỗi lần

    leftArrow.addEventListener("click", function () {
        tabMenu.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", function () {
        tabMenu.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    function updateArrowVisibility() {
        if (window.innerWidth > 768) {
            leftArrow.style.display = "none";
            rightArrow.style.display = "none";
        } else {
            leftArrow.style.display = "flex";
            rightArrow.style.display = "flex";
        }
    }

    updateArrowVisibility();
    window.addEventListener("resize", updateArrowVisibility);
});
