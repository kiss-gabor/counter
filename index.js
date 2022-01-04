let people = 0

function increment() {
    people += 1
    document.getElementById("count-el").innerText = people
}


function save() {
   let savep = document.getElementById("savePeople")
   savep.textContent += people + " - "
   people = 0
   document.getElementById("count-el").innerText = people
}