document.addEventListener("DOMContentLoaded", function () {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4"); // If you've added page4
    const page1Link = document.querySelector(".pagination-controls a[href='#page1']");
    const page2Link = document.querySelector(".pagination-controls a[href='#page2']");
    const page3Link = document.querySelector(".pagination-controls a[href='#page3']");
    const page4Link = document.querySelector(".pagination-controls a[href='#page4']"); // If you've added page4

    // Function to show only the specified page and hide others
    function showPage(pageToShow) {
        [page1, page2, page3, page4].forEach(page => {
            if (page === pageToShow) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });
    }

    showPage(page1);

    page1Link.addEventListener("click", function (event) {
        event.preventDefault();
        showPage(page1);
    });

    page2Link.addEventListener("click", function (event) {
        event.preventDefault();
        showPage(page2);
    });

    page3Link.addEventListener("click", function (event) {
        event.preventDefault();
        showPage(page3);
    });

        page4Link.addEventListener("click", function (event) {
            event.preventDefault();
            showPage(page4);
        });

});
