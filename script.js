const text = document.querySelector(".text-second");

const textLoad = () => {
   setTimeout(() => {
       text.textContent = "Innova";
   }, 0);
   setTimeout(() => {
       text.textContent = "Etios";
   }, 2000);
   setTimeout(() => {
       text.textContent = "Crysta";
   }, 4000);    
   setTimeout(() => {
       text.textContent = "Fortuner";
   }, 8000);
}
textLoad();
setInterval(textLoad,12000);
let names = [
  "Ajmer", "Bhilwara,Nagaur", "Tonk", "Baran", "Bundi", "Jhalawar", "Kota", "Barmer", "Jaisalmer", "Jalore", "Jodhpur", "Pali", "Sirohi", "Alwar", "Dausa", "Jaipur", "Jhunjhunu", "Sikar", "Banswara", "Chittorgarh", "Dungarpur", "Pratapgarh", "Rajsamand", "Udaipur", "Bharatpur", "Dholpur", "Karauli", "Sawai Madhopur", "Bikaner", "Churu", "Hanumangarh", "Sri Ganganagar",
  ];
  let sortedNames = names.sort();
  
  let input = document.getElementById("input");
  
  input.addEventListener("keyup", (e) => {
    removeElements();
    for (let i of sortedNames) {
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        let listItem = document.createElement("li");
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }






  