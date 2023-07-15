const pengunjung = document.getElementsByClassName("pengunjung")[0]
const button = document.querySelector("button")
const kotak = document.getElementsByClassName("kotak")[0]
const jumlah = document.getElementsByClassName("jumlah")[0]

let kosong = 0;
button.addEventListener("click", function(){
const list = document.createElement("div")
list.classList.add("list")
list.innerHTML = pengunjung.value
kotak.appendChild (list)
kosong = kosong + 1
jumlah.innerHTML = kosong
} )
