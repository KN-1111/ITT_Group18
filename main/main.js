(function () {
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById("header");

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      header.classList.add("hide");
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove("hide");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
})();

// var person_list = document.querySelectorAll(".person-container");
// person_list.forEach((person, index) => {
//   person.addEventListener("mouseenter", (event) => {
//     var remove_list = person_list.splice(1, 1);
//     remove_list.forEach((item) => {
//       item.style.opacity = "0.4";
//     });
//   });
// });

var person_list = document.querySelectorAll(".person-container");
// for (person in person_list) {
//   person_list[person].onmouseover = function () {
//     for (item in person_list) {
//       person_list[item].style.opacity = "0.4";
//     }
//   };
//   person_list[person].onmouseout = function () {
//     for (item in person_list) {
//       if (person_list[person] != person_list[item]) {
//         // console.log("first item", person_list[person]);
//         // console.log("second item", person_list[item]);
//         // console.log(item !== person);
//         // person_list[item].style.opacity = "0.4";
//       }
//       person_list[item].style.opacity = "0.4";
//     }
//   };
// }
person_list.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    person_list.forEach((item) => {
      if (item != element) {
        item.style.opacity = "0.4";
      }
    });
  });
  element.addEventListener("mouseout", (event) => {
    person_list.forEach((item) => {
      if (item != element) {
        item.style.opacity = "1";
      }
    });
  });
});


