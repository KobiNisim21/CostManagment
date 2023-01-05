function init() {

    let name = document.getElementById("fname").value;
    let sum = document.getElementById("Price").value;
    let category = document.getElementById("browser").value;
    let date = document.getElementById("Date").value;

    if (name != "" && sum != "" && category != "" && date != "") {

        if (localStorage.getItem("i") == null) {
            i = 1
        }

        else {
            i = localStorage.getItem("i");
        } 
        
        createItem(name, sum, category, date, i);  
    }
}



function createItem(name, sum, category, date, i) {
    const storage = new LocalStorageWrapper();
    storage.addItem(name, sum, category, date, i);
    i++;
    localStorage.setItem("i", i);
}

