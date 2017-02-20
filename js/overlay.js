/* Open */
  function openNav(e) {
    document.getElementById("severity").style.height = "100%";
    document.getElementById("symptom").innerHTML = e;
  }
  /* Close */
  function closeNav() {
    document.getElementById("severity").style.height = "0%";
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
    for (i=0; i<y.length;i++) {
      y[i].className="show";
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
    for (i=0; i<y.length;i++) {
      y[i].className="hide";
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
    for (i=0; i<y.length;i++) {
      y[i].className="hide";
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
    for (i=0; i<y.length;i++) {
      y[i].className="hide";
    }
  }
