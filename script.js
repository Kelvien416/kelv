function navActive() {
  var navId = document.getElementById("showNavbar");

  if (navId.className === "w-full md:block md:w-auto") {
    navId.className += " hidden";
  } else {
    navId.className = "w-full md:block md:w-auto";
  }
}

function pageActive() {
  $(document).ready(function () {
    $(".nav-link").click(function () {
      $(this)
        .addClass("bg-teal-700 rounded-md rounded-lg")
        .sibling()
        .removeClass("bg-teal-700 rounded-md rounded-lg");
    });
  });
}
