function addItem() {
    let inputValue = document.getElementById("inputValue").value.trim();
    const selectedDivId = document.querySelector("#selectBox").value;
    //Burda önemli olan select.value su ile div idleri aynı veriyor olmamız
    const selectedDiv = document.getElementById(selectedDivId);
        // Yeni bir liste öğesi oluşturma
    const newItem = document.createElement('li');
        //   newItem.textContent = inputValue;
          newItem.className = 'list-item';
          newItem.innerHTML = `
              ${inputValue}
              <button onclick="deleteItem(this)"><i class="fas fa-trash"></i></button>
              <button onclick="toggleDone(this)"><i class="fas fa-check"></i></button>
           `;
        if(!inputValue) return;
        // Liste öğesini div'e ekleme
    const ol = selectedDiv.querySelector('ol') || document.createElement('ol');
        ol.appendChild(newItem);
        selectedDiv.appendChild(ol);
        document.getElementById("inputValue").value= '';
        // Input'u temizleme
    }
    function toggleDone(button) {
        // Butona tıklanan liste öğesinin stilini değiştir
        const listItem = button.parentElement;
        listItem.classList.toggle('esnek');
    }
    function deleteItem(button) {
        // Butona tıklanan liste öğesini sil
        const listItem = button.parentElement;
        listItem.remove();
    }
    function removeItemAll(x) {
        const divDelete = document.getElementById(x);
        const delOl = divDelete.querySelector("ol");
        delOl.innerHTML="";
    }