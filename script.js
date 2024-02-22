let menu = false;

function toggleShowandHide() {
  if (menu) {
    document.getElementById("nav").classList = "";
    menu = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menu = true;
  }
}

function select() {
  document.getElementById("nav").classList = "";
  menu = false;
}
