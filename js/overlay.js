/* Open */
  function openNav(e) {
    document.getElementById("severity").style.height = "100%";
    document.getElementById("symptom").innerHTML = e;
  }
  /* Close */
  function closeNav() {
    document.getElementById("severity").style.height = "0%";
    document.getElementById("searchbar").value = '';
  }

  function toggleButton(){
    document.getElementById("add").className = "add show";
  }

  function closeNavAdded() {
    document.getElementById("severity").style.height = "0%";
    document.getElementById("add").className = "add hide";
    $(document).ready(function(){
            $('#feedback').fadeIn('slow', function(){
               $('#feedback').delay(1500).fadeOut();
            });
        });
    document.getElementById("searchbar").value = '';
  }


  // $("#searchbar").on('input', function () {
  //     var val = this.value;
  //     if($('#searchitems option').filter(function(){
  //         return this.value.toUpperCase() === val.toUpperCase();
  //     }).length) {
  //       openNav(this.value.capitalizedFirstletter());
  //     }});
  //
  //     String.prototype.capitalizedFirstletter = function(){
  //       return this.charAt(0).toUpperCase() + this.slice(1);
  //     }
