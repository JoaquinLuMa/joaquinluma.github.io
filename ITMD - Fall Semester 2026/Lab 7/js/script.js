function init(){
    //add your javascript between these two lines of code
    document.getElementById("entrybutton").addEventListener("click", function(){
        let entry = document.getElementById("entryinput").value;
        alert("Joaquin Luengas-Martinez: " + entry);
        document.getElementById("textoutput").textContent = entry;
    })





}
window.addEventListener('load', init);