function skip() {
  window.location.href = "canteen.html";
}
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("skipBtn");

  if (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "canteen.html";
    });
  }
});
