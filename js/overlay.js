/* Open */
  function openNav(e) {
    document.getElementById("severity").style.height = "100%";
    document.getElementById("symptom").innerHTML = e;
  }
  /* Close */
  function closeNav() {
    document.getElementById("severity").style.height = "0%";
    document.getElementById("add").className = "add hide";
  }
  function toggleButton(){
    document.getElementById("add").className = "add show";
  }

// var searchbar = document.getElementById("searchbar");
// searchbar.addEventListener("keyup", function(event){
//     if (event.keyCode == 13) {
//         event.preventDefault();
//
//         if (searchbar.value.length != 0) {
//             console.log(searchbar.value);
//             openNav(searchbar)
//             // Run my specific process with my_field.value
//             my_field.value = '';
//         }
//     }
// }, false);
