let footerBlocks = document.querySelectorAll(".footer-block");
isMobile = false;

$(window).resize(function () {
    console.log(window.innerWidth);
    setMobile();
    setFooter();
    dropdown();
    checkSize();
});

function setMobile() {
    if (window.matchMedia("screen and (max-width: 767px").matches) {
        $(".nav-icons").appendTo("#nav-links");
        $(".bag").prependTo(".mobile-menu");
        $(".social-logos").appendTo(".bottom");
        $(".credits").appendTo(".bottom");
        $(".mobile-menu").appendTo(".nav-bar");
    } else {
        $(".nav-icons").appendTo(".nav-bar");
        $(".bag").appendTo(".nav-icons");
        $(".social-logos").appendTo(".social-links");
        $(".credits").prependTo(".bottom");
        $(".nav-bar").after($(".mobile-menu"));
    }
}

function setFooter() {
    footerBlocks.forEach((footerBlock) => {
        let button = footerBlock.querySelector(".dropdown");
        let lists = footerBlock.querySelectorAll("li");
        let arrow = footerBlock.querySelector(".arrow");
        button.lists = lists;
        button.arrow = arrow;
        if (window.matchMedia("screen and (max-width: 767px").matches) {
            lists.forEach((list) => {
                list.style.display = "none";
            });
            button.addEventListener("click", showList);
        } else {
            lists.forEach((list) => {
                list.style.display = "block";
            });
            button.removeEventListener("click", showList);
        }
    });
}

function showList() {
    this.lists.forEach((list) => {
        if (list.style.display === "block") {
            list.style.display = "none";
            this.arrow.style.transform = "rotate(45deg)";
        } else {
            list.style.display = "block";
            this.arrow.style.transform = "rotate(-135deg)";
        }
    });
}

function dropdown() {
    let navDropdown = $(".nav-dropdown");
    if (window.matchMedia("screen and (max-width: 767px").matches) {
        navDropdown.addClass("mobile");
    } else {
        navDropdown.removeClass("mobile");
        $(".nav-dropdown > ul > li").css("display", "");
    }
}

$("#bar-container").click(function () {
    menu();
});

function menu() {
    $("#nav-links").toggle();

    var menu = document.getElementById("bar-container");
    menu.classList.toggle("change");

    var mobileNav = document.getElementById("nav-links");
    mobileNav.classList.toggle("mobile-nav");
}

$(".mobile > a").click(function () {
    $(".mobile > ul > li").toggle();
});

$(".mobile-dropdown > a").click(function () {
    $(".mobile-dropdown > ul > li").toggle();
});

function checkSize() {
    console.log(isMobile);
    if (
        window.matchMedia("screen and (max-width: 767px").matches &&
        !isMobile
    ) {
        isMobile = true;
        console.log(isMobile);
        $("#nav-links").css("display", "none");
        $("#nav-links").removeClass("mobile-nav");
        $(".mobile > a").click(function () {
            $(".mobile > ul > li").toggle();
        });
    } else if (
        !(window.matchMedia("screen and (max-width: 767px").matches && isMobile)
    ) {
        isMobile = false;
        console.log(isMobile);
        $("#nav-links").css("display", "block");
        $("#bar-container").removeClass("change");
    }
}

setMobile();
setFooter();
dropdown();
checkSize();
