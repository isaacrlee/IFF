/* Open */
  function openNav(e) {
    document.getElementById("severity").style.height = "100%";
    document.getElementById("symptom").innerHTML = e;
  }
  /* Close */
  function closeNav() {
    document.getElementById("severity").style.height = "0%";
    document.getElementById("searchlist").value = '';
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
    document.getElementById("searchlist").value = '';
  }

  var input = document.getElementById("searchlist");
  A = new Awesomplete(input, {
  	list: ["Cough","Headache","Sore Throat"],
    minChars: 1
  });
  window.addEventListener("awesomplete-selectcomplete",function(e){
    openNav(e.text);
  },false);

  // function awesomplete-selectcomplete(e){
  //   openNav(e.text);
  // }
  // A.$.bind(input,{
  //   "awesomplete-selectcomplete": openNav(e)
  // });

  // var input = document.getElementById("search");
  // new Awesomplete(input, {list: document.querySelector("#searchlist")});
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
