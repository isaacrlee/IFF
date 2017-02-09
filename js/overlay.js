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
