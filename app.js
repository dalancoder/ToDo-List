const genel = document.querySelector(".genel")
function saveLocalStorage(){
    const data = {
    list:genel.innerHTML
  }
  localStorage.setItem("myData", JSON.stringify(data))
}
function loadLocalStorage(){
  const veriCekme = JSON.parse(localStorage.getItem("myData",)||[])
  genel.innerHTML = veriCekme.list

}
document.addEventListener("DOMContentLoaded", loadLocalStorage)


function addItem() {

  let inputValue = document.getElementById("inputValue").value.trim();
  const selectedDivId = document.querySelector("#selectBox").value;
  //Burda önemli olan select.value su ile div idleri aynı veriyor olmamız
  const selectedDiv = document.getElementById(selectedDivId);
  // Yeni bir liste öğesi oluşturma
  const newItem = document.createElement("li");
  //   newItem.textContent = inputValue;
  newItem.className = "list-item";
  newItem.innerHTML = `                
              ${inputValue}          
               <button onclick="toggleItem(this)"><i class="fas fa-check"></i></button>
              <button onclick="deleteItem(this)"><i class="fas fa-trash"></i></button>       
             
           `;
  document.getElementById("inputValue").focus();

  if (!inputValue) return;
  // Liste öğesini div'e ekleme
  const ol = selectedDiv.querySelector("ol") || document.createElement("ol");
  ol.appendChild(newItem);
  selectedDiv.appendChild(ol);
  document.getElementById("inputValue").value = ""; // Input'u temizleme
  saveLocalStorage()
}




// function localStorageSetGet(inputValue){
//   let data = JSON.parse(localStorage.getItem("myData")) || [];
//   // Yeni öğeyi ekle
//   data.push(inputValue);
//   // Güncellenmiş verileri localStorage'a kaydet
//   localStorage.setItem("myData", JSON.stringify(data));
// }

function toggleItem(button) {
  // Butona tıklanan liste öğesinin stilini değiştir
  const listItem = button.parentElement;
  listItem.classList.toggle("esnek");
  saveLocalStorage()
}
function deleteItem(button) {
  const sifre = prompt(
    "Lütfen silme işlemi için şifre giriniz: (Demo mod için şifre:1234)"
  );
  if (sifre == 1234) {
    const listItem = button.parentElement;
    listItem.remove();
  } else {
    alert("Üzgünüm silme yetkiniz bulunmamaktadır!");
  }
  saveLocalStorage()
}
function removeItemAll(x) {
  const sifre = prompt(
    "Lütfen silme işlemi için şifre giriniz: (Demo mod için şifre:1234"
  );
  if (sifre == 1234) {
    const divDelete = document.getElementById(x);
    const delOl = divDelete.querySelector("ol");
    delOl.innerHTML = "";
  } else {
    alert("Üzgünüm silme yetkiniz bulunmamaktadır!");
  }
  saveLocalStorage()
}
