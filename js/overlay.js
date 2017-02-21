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

  function toggleSymptom(sym){
    var x = document.getElementById(sym);
    if (x.style.backgroundColor === "white") {
      if (sym == "sym1") {
        x.style.backgroundColor = '#7d1010';
      }
      if (sym == "sym2") {
        x.style.backgroundColor = '#061e8c';
      }
      if (sym == "sym3") {
        x.style.backgroundColor = '#fae528';
      }

    }
    else {
      x.style.backgroundColor = "white";
    }
  }

  function toggleDay() {
    document.getElementById("day").className = "col-xs-3 time-interval active";
    document.getElementById("week").className = "col-xs-3 time-interval inactive";
    document.getElementById("month").className = "col-xs-3 time-interval inactive";
    document.getElementById("year").className = "col-xs-3 time-interval inactive";
    document.getElementById('graph').src="graph1.png";
    var date = document.getElementById("date");
    date.innerHTML="February 20";
    var x = document.getElementById('checkboxes');
    var y = x.getElementsByClassName('hide');
    var i;
    for (i=0; i<3;i++) {
      y[0].className="show";
    }
  }

  function toggleWeek() {
    document.getElementById("week").className = "col-xs-3 time-interval active";
    document.getElementById("day").className = "col-xs-3 time-interval inactive";
    document.getElementById("month").className = "col-xs-3 time-interval inactive";
    document.getElementById("year").className = "col-xs-3 time-interval inactive";
    document.getElementById('graph').src="graph2.png";
    var date = document.getElementById("date");
    date.innerHTML="February 14 - 20";
    var x = document.getElementById('checkboxes');
    var y = x.getElementsByClassName('show');
    var i;
    for (i=0; i<3;i++) {
      y[0].className="hide";
    }
  }

  function toggleMonth() {
    document.getElementById("month").className = "col-xs-3 time-interval active";
    document.getElementById("day").className = "col-xs-3 time-interval inactive";
    document.getElementById("week").className = "col-xs-3 time-interval inactive";
    document.getElementById("year").className = "col-xs-3 time-interval inactive";
    document.getElementById('graph').src="graph3.png";
    var date = document.getElementById("date");
    date.innerHTML="January 24 - February 20";
    var x = document.getElementById('checkboxes');
    var y = x.getElementsByClassName('show');
    var i;
    for (i=0; i<3;i++) {
      y[0].className="hide";
    }
  }

  function toggleYear() {
    document.getElementById("year").className = "col-xs-3 time-interval active";
    document.getElementById("day").className = "col-xs-3 time-interval inactive";
    document.getElementById("week").className = "col-xs-3 time-interval inactive";
    document.getElementById("month").className = "col-xs-3 time-interval inactive";
    document.getElementById('graph').src="graph4.png";
    var date = document.getElementById("date");
    date.innerHTML="February 2016 - 2017";
    var x = document.getElementById('checkboxes');
    var y = x.getElementsByClassName('show');
    var i;
    for (i=0; i<3;i++) {
      y[0].className="hide";
    }
  }
  var input = document.getElementById("searchlist");
  A = new Awesomplete(input, {
  	list: ["Cough","Headache","Sore Throat"],
    minChars: 1
  });
  window.addEventListener("awesomplete-selectcomplete",function(e){
    openNav(e.text);
  },false);
