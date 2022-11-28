const navButton = document.querySelector("#menu__toggle");
const menuItem = [...document.querySelectorAll(".menu__item")];
const menuBox = document.querySelector(".menu__box");

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("#menu__toggle").checked = false;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var animationElement = [...document.querySelectorAll(".animation")];
  console.log(animationElement);
  //   let take = window.matchMedia("only screen and (max-width: 768px)");
  //   if (take.matches) {
  //     animationElement.forEach((item) => {
  //       item.remove();
  //     });
  //   }
  function checkIfInView() {
    var windowHeight = screen.height;
    var windowTopPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    var windowBottomPosition = windowTopPosition + windowHeight;

    animationElement.forEach(function (element) {
      var elementHeight = element.offsetHeight;
      var elementTopPosition = element.offsetTop || element.scrollTop;
      var elementButtomPosition = elementTopPosition + elementHeight;
      //check to see if the container is within view port

      if (elementButtomPosition >= windowTopPosition) {
        element.classList.add("in-view");
        console.log(elementButtomPosition, windowTopPosition);
      } else {
        element.classList.remove("in-view");
      }

      if (elementTopPosition <= windowBottomPosition) {
        element.classList.add("in-view");
        console.log(elementTopPosition, windowBottomPosition);
      } else {
        element.classList.remove("in-view");
      }
    });
  }
  window.addEventListener("scroll", checkIfInView);
  function trigger(el, eventType) {
    if (typeof eventType === "string" && typeof el[eventType] === "function") {
      el[eventType]();
    } else {
      const event =
        eventType === "string"
          ? new Event(eventType, { bubbles: true })
          : eventType;
      el.dispatchEvent(event);
    }
  }
  animationElement.forEach((item) => {
    trigger(item, "scroll");
  });
});
