function navActive() {
  var navId = document.getElementById("showNavbar");

  if (navId.className === "w-full md:block md:w-auto") {
    navId.className += " hidden";
  } else {
    navId.className = "w-full md:block md:w-auto";
  }
}
