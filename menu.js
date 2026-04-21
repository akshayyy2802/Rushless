let count = 0;

function addItem() {
  count++;
  document.getElementById("count").innerText = count;
}

function goBack() {
  window.location.href = "canteen.html";
}
