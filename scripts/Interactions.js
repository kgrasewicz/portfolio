const cursor = document.querySelector(".cursor");
let scrollTop = window.pageYOffset;
const currentCursorPosition = $(".cursor").offset().top + $(window).scrollTop();

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.clientY + "px; left: " + e.clientX + "px;"
  );
});

if ($(window).width() > 1200) {
  $(document).on("mousemove", function parallax(e) {
    document
      .querySelectorAll(".about__content__images")
      .forEach(function (move) {
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX - 0.5 * window.innerWidth) * moving_value;
        let y = (e.clientY - 0.5 * window.innerHeight) * moving_value;

        console.log(x);
        console.log(y);

        move.style.transform =
          "translateX(calc(-50% + " +
          x +
          "px)) translateY(calc(-50% + " +
          y +
          "px))";
      });
  });
}

if ($(window).width() > 996) {
  $(document).on("mousemove", function (e) {
    doElseCollide = function (el2) {
      el1X = e.pageX;
      el1Y = e.pageY;
      el2Bottom = Math.round($(el2).offset().top + $(el2).height());
      el2Right = Math.round($(el2).offset().left + $(el2).width());
      el2Top = Math.round($(el2).offset().top);
      el2Left = Math.round($(el2).offset().left);

      if (
        el1X >= el2Left &&
        el1X <= el2Right &&
        el1Y <= el2Bottom &&
        el1Y >= el2Top
      ) {
        if (
          $(el2).hasClass("about__content__title-1") ||
          $(el2).hasClass("about__content__title-2") ||
          $(el2).hasClass("about__content__images") ||
          $(el2).hasClass("about__content__scroll-line")
        ) {
          $(".cursor").addClass("hoveredCursor about-hovered");
          console.log("works");
        } else {
          $(".cursor").addClass("hoveredCursor");
          $(el2).addClass("hovered");
        }
      } else {
        $(".cursor").removeClass("hoveredCursor");
        $(el2).removeClass("hovered");
        $(".cursor").removeClass("hoveredCursor");
        $(".cursor").removeClass("about-hovered");
      }
    };

    $(".hover").each(function (i, obj) {
      doElseCollide(this);

      if ($(".cursor").hasClass("hoveredCursor")) {
        let currentIndex = i;

        $(".hover").each(function (index, obj) {
          if (index > currentIndex) {
            $(this).removeClass("hovered");
            $(this).removeClass("about-hovered");
          }
        });

        return false;
      }
    });
  });
}

$(".top-section__button__icon").on("click", function () {
  $(this).toggleClass("expanded closed");
  $("#menu-icon-svg").toggleClass("rotated");
  $(".top-section").toggleClass("open");
});
if ($(window).width() > 1200) {
  $(document).mouseleave(function (e) {
    const cursor = $("body");
    cursor.removeClass("visible").addClass("invisible");
  });

  $(document).mouseenter(function (e) {
    const cursor = $("body");
    cursor.addClass("visible").removeClass("invisible");
  });
}

var timeout_id = 0;

var circle = document.querySelector("circle");
var radius = 0.4 * window.innerWidth;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

$(document).ready(function () {
  setProgress(0);
});

if ($(window).width() > 1200) {
  $(".about__content")
    .on("mousedown", function (event) {
      timeout_id = setTimeout(function () {
        $(".cursor").addClass("animate");
        $(".about__content").addClass("about-hovered");
        $(".page-container").css("height", "1090vh");
        $(".about__content__title-1").removeClass("hover");
        $(".about__content__title-2").removeClass("hover");
        $(".about__content__images").removeClass("hover");
        $(".about__content__scroll-line__circle").addClass("visible");
        $(".about__content__scroll-line__circle__progress-ring").addClass(
          "visible"
        );
        $(".top-section__button").addClass("visible");

        setProgress(100);
      }, 500);

      setTimeout(function () {
        $(".cursor").removeClass("animate hoveredCursor");
      }, 1000);

      setTimeout(function () {
        $(".about__content__images__img").css({ transition: "none" });
      }, 1500);

      setTimeout(function () {
        $(".about__content__title-3").css({
          width: "24vw",
          height: "32vw",
          animation: "none",
        });
        $(".about__content__skill__detailed").css({
          transform: "translate(0,0)",
          animation: "none",
        });
      }, 5000);
    })
    .bind("mouseup mouseleave", function () {
      clearTimeout(timeout_id);

      $(".cursor").removeClass("animate");
    });
} else {
  $(".about__content")
    .on("mousedown", function (event) {
      $(".cursor").addClass("animate");
      $(".about__content").addClass("about-hovered");
      $(".page-container").css("height", "1090vh");
      $(".about__content__title-1").removeClass("hover");
      $(".about__content__title-2").removeClass("hover");
      $(".about__content__title-1 h1, .about__content__title-2 h1 ").css(
        "display",
        "none"
      );
      $(".about__content__images").removeClass("hover");
      $(".about__content__scroll-line__circle").addClass("visible");
      $(".about__content__scroll-line__circle__progress-ring").addClass(
        "visible"
      );
      $(".top-section__button").addClass("visible");

      setProgress(100);

      setTimeout(function () {
        $(".cursor").removeClass("animate hoveredCursor");
      }, 1000);

      setTimeout(function () {
        $(".about__content__images__img").css({ transition: "none" });
      }, 1500);

      setTimeout(function () {
        $(".about__content__skill__detailed").css({
          transform: "translate(0,0)",
          animation: "none",
        });
      }, 5000);
    })
    .bind("mouseup mouseleave", function () {
      clearTimeout(timeout_id);

      $(".cursor").removeClass("animate");
    });
}

$(document).ready(function () {
  $(".menu-category-4").on("click", function () {
    $(".top-section").removeClass("open");
    var contact = document.querySelector(".contact");
    zenscroll.to(contact, 1000);
    $("#menu-icon-svg").toggleClass("rotated");
  });

  $(".menu-category-3").on("click", function () {
    $(".top-section").removeClass("open");
    var projects = document.querySelector(".projects__title");
    zenscroll.center(projects, 1000);
    $("#menu-icon-svg").toggleClass("rotated");
  });

  $(".menu-category-2, .contact__back-container h5").on("click", function () {
    $(".top-section").removeClass("open");
    var about = document.querySelector(".about");
    zenscroll.to(about, 1000);
    $("#menu-icon-svg").toggleClass("rotated");
  });
});
