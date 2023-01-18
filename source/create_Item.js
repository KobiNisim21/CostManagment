function init() {
  let name = document.getElementById("fname").value;
  let sum = document.getElementById("Price").value;
  let category = document.getElementById("browser").value;
  let date = document.getElementById("Date").value;

  if (name != "" && sum != "" && category != "" && date != "") {
    if (localStorage.getItem("i") == null) {
      i = 1;
    } else {
      i = localStorage.getItem("i");
    }

    createItem(name, sum, category, date, i);
  }
}

async function createItem(name, sum, category, date, i) {
  const storage = new LocalStorageWrapper();
  await storage.addItem(name, sum, category, date, i);
  i++;
  await localStorage.setItem("i", i);
  openPopup();
  clearForm(name, sum, category, date);
}

function openPopup() {
  let popup = document.getElementById("popup");
  popup.classList.add("open-popup");
}

function closePopup() {
  let popup = document.getElementById("popup");
  popup.classList.remove("open-popup"); //Clearing the form after closing the Popup window
  document.getElementById("fname").value = "";
  document.getElementById("Price").value = "";
  document.getElementById("browser").value = "";
  document.getElementById("Date").value = "";
}
