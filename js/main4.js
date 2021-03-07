/**
 * main4.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function () {
  var bodyEl = document.body,
    content = document.querySelector(".content-wrap"),
    openbtn = document.getElementById("open-button"),
    closebtn = document.getElementById("close-button"),
    isOpen = false,
    morphEl = document.getElementById("morph-shape"),
    s = Snap(morphEl.querySelector("svg"));
  path = s.select("path");
  var initialPath = this.path.attr("d"),
    steps = morphEl.getAttribute("data-morph-open").split(";");
  stepsTotal = steps.length;
  isAnimating = false;

  function init() {
    initEvents();
  }

  function initEvents() {
    openbtn.addEventListener("click", toggleMenu);
    if (closebtn) {
      closebtn.addEventListener("click", toggleMenu);
    }

    // close the menu element if the target it´s not the menu element or one of its descendants..
    content.addEventListener("click", function (ev) {
      var target = ev.target;
      if (isOpen && target !== openbtn) {
        toggleMenu();
      }
    });
  }

  function toggleMenu() {
    if (isAnimating) return false;
    isAnimating = true;
    if (isOpen) {
      classie.remove(bodyEl, "show-menu");
      // animate path
      setTimeout(function () {
        // reset path
        path.attr("d", initialPath);
        isAnimating = false;
      }, 300);
    } else {
      classie.add(bodyEl, "show-menu");
      // animate path
      var pos = 0,
        nextStep = function (pos) {
          if (pos > stepsTotal - 1) {
            isAnimating = false;
            return;
          }
          path.animate(
            {
              path: steps[pos],
            },
            pos === 0 ? 400 : 500,
            pos === 0 ? mina.easein : mina.elastic,
            function () {
              nextStep(pos);
            }
          );
          pos++;
        };

      nextStep(pos);
    }
    if (!isOpen) {
      setTimeout(function () {
        $(".morph-shape").css({
          opacity: "0",
        });
        $(".menu-wrap").css({
          background: menuWrapbgColor,
          "backdrop-filter": "blur(3px)",
          "box-shadow":
            "0 12px 16px 0 rgba(0, 0, 0, 0.15), 0 17px 50px 0 rgba(0, 0, 0, 0.19)",
        });
      }, 600);
    }
    isOpen = !isOpen;
    $(".morph-shape").css({
      opacity: "",
    });
    $(".menu-wrap").css({
      background: "",
      "backdrop-filter": "",
      "box-shadow": "",
    });
  }

  init();
})();
