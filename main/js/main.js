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
// var parent = document.getElementById("animated-background");
// var circle_container = document
//   .createElement("div")
//   .classList.add("circle-container");
// var circle = document.createElement("div").classList.add("circle");
// var child = circle_container.appendChild(circle);
let child = "<div class='circle-container'><div class='circle'></div></div>";
for (var i = 1; i < 100; i++) {
  document
    .getElementById("animated-background")
    .insertAdjacentHTML("beforeend", child);
}
// function myFunction(e) {
//   var elems = document.querySelectorAll(".active");
//   [].forEach.call(elems, function (el) {
//     el.classList.remove("active");
//   });
//   e.target.className = "active";
// }
// var elems = document.querySelectorAll(".active");
// var underline = document.querySelectorAll(".underline")
// var pane = document.querySelectorAll(".tab-pane");
// document.querySelector(".active").classList.remove("active");
// underline.forEach((element) => {
//   element.addEventListener("click", )
// });
function tab1(e) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("tab1").classList.add("active");
  e.target.classList.add("show-underline");
}
function tab2(e) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("tab2").classList.add("active");
  e.target.classList.add("show-underline");
}
function tab3(e) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("tab3").classList.add("active");
  e.target.classList.add("show-underline");
}
function growDiv() {
  var growDiv = document.getElementById("grow");
  if (growDiv.clientHeight) {
    growDiv.style.height = 0;
  } else {
    var wrapper = document.querySelector(".measuringWrapper");
    growDiv.style.height = wrapper.clientHeight + "px";
  }
  document.getElementById("more-button").value =
    document.getElementById("more-button").value == "Read more"
      ? "Read less"
      : "Read more";
}
function project1(e) {
  var elems = document.querySelectorAll(".project-active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("project-active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("aim").classList.add("project-active");
  e.target.classList.add("show-underline");
}
function project2(e) {
  var elems = document.querySelectorAll(".project-active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("project-active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("plan").classList.add("project-active");
  e.target.classList.add("show-underline");
}
function project3(e) {
  var elems = document.querySelectorAll(".project-active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("project-active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("role").classList.add("project-active");
  e.target.classList.add("show-underline");
}
function project4(e) {
  var elems = document.querySelectorAll(".project-active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("project-active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("scope").classList.add("project-active");
  e.target.classList.add("show-underline");
}
function project5(e) {
  var elems = document.querySelectorAll(".project-active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("project-active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("limit").classList.add("project-active");
  e.target.classList.add("show-underline");
}
function project6(e) {
  var elems = document.querySelectorAll(".project-active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("project-active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("tool").classList.add("project-active");
  e.target.classList.add("show-underline");
}
function project7(e) {
  var elems = document.querySelectorAll(".project-active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("project-active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("testing").classList.add("project-active");
  e.target.classList.add("show-underline");
}
function project8(e) {
  var elems = document.querySelectorAll(".project-active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("project-active");
  });
  var elems = document.querySelectorAll(".show-underline");
  [].forEach.call(elems, function (el) {
    el.classList.remove("show-underline");
  });
  document.getElementById("risk").classList.add("project-active");
  e.target.classList.add("show-underline");
}
