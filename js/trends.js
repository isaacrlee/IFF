$(function () {
  // CHART STUFF
  setDate();
  buildChart();
  // when time is clicked
  $('.time-interval').click(function () {
    detectTime($(this));
  });
});

// handles clicks on time intervals
function detectTime(clicked) {
  // loop through time intervals
  $('.time-interval').each(function () {
    // for the clicked element, set className to active
    if ($(this).attr('id') === clicked.attr('id')) {
      $(this).removeClass('inactive').addClass('active');
    } else { // for other elements, set className to inactive
      $(this).removeClass('active').addClass('inactive');
    }
  });
}
// sets data at top of page
function setDate() {
  var d = new Date();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = months[d.getMonth()];
  var date = d.getDate();
  $('#date').text(month + ' ' + date); 
}

function buildChart() {
  var myChart = Highcharts.chart('container', {
    chart: {
      type: 'area'
    },

    title: {
      text: ''
    },

    legend: {
      enabled: false
    },

    colors: ['#7d1010', '#061e8c', '#fae528', '#f7a35c', '#8085e9',
      '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],

    xAxis: [{
      allowDecimals: false,
      ceiling: 7,
      title: {
        text: 'Day Of Week',
        style: {
          fontSize: '5em'
        }
      }
    }],

    yAxis: [{
      allowDecimals: false,
      ceiling: 3,
      title: {
        text: 'Intensity',
        style: {
          fontSize: '5em'
        }
      }
    }],

    legend: {
        layout: 'vertical',
        align: 'center',
        itemStyle: {
              fontSize: '2em'
        },
        verticalAlign: 'top',
        floating: false,
        x: '-1'
    },

    plotOptions: {
      series: {
        pointStart: 0,
        lineWidth: 15,
      },
    },

    series: [{
      name: 'Cough',
      data: [1, 0, 1, 0, 2, 3, 3, 3]
    }, {
      name: 'Headache',
      data: [1, 0, 0, 3, 2, 3, 2, 0]
    }, {
      name: 'Sore Throat',
      data: [1, 0, 1, 0, 2, 3, 3, 2]
    }],
  });
}

// var data = {
//   'Cough': [1, 0, 1, 0, 2, 3, 3, 3],
//   'Headache': [1, 0, 0, 3, 2, 3, 2, 0],
//   'Sore Throat': [1, 0, 1, 0, 2, 3, 3, 2]
// }

function toggleSymptom(sym) {
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

// function toggleDay() {
//   document.getElementById("day").className = "col-xs-3 time-interval active";
//   document.getElementById("week").className = "col-xs-3 time-interval inactive";
//   document.getElementById("month").className = "col-xs-3 time-interval inactive";
//   document.getElementById("year").className = "col-xs-3 time-interval inactive";
//   document.getElementById('graph').src = "graph1.png";
//   var date = document.getElementById("date");
//   date.innerHTML = "February 20";
//   var x = document.getElementById('checkboxes');
//   var y = x.getElementsByClassName('hide');
//   var i;
//   for (i = 0; i < 3; i++) {
//     y[0].className = "show";
//   }
// }

// function toggleWeek() {
//   document.getElementById("week").className = "col-xs-3 time-interval active";
//   document.getElementById("day").className = "col-xs-3 time-interval inactive";
//   document.getElementById("month").className = "col-xs-3 time-interval inactive";
//   document.getElementById("year").className = "col-xs-3 time-interval inactive";
//   document.getElementById('graph').src = "graph2.png";
//   var date = document.getElementById("date");
//   date.innerHTML = "February 14 - 20";
//   var x = document.getElementById('checkboxes');
//   var y = x.getElementsByClassName('show');
//   var i;
//   for (i = 0; i < 3; i++) {
//     y[0].className = "hide";
//   }
// }

// function toggleMonth() {
//   document.getElementById("month").className = "col-xs-3 time-interval active";
//   document.getElementById("day").className = "col-xs-3 time-interval inactive";
//   document.getElementById("week").className = "col-xs-3 time-interval inactive";
//   document.getElementById("year").className = "col-xs-3 time-interval inactive";
//   document.getElementById('graph').src = "graph3.png";
//   var date = document.getElementById("date");
//   date.innerHTML = "January 24 - February 20";
//   var x = document.getElementById('checkboxes');
//   var y = x.getElementsByClassName('show');
//   var i;
//   for (i = 0; i < 3; i++) {
//     y[0].className = "hide";
//   }
// }

// function toggleYear() {
//   document.getElementById("year").className = "col-xs-3 time-interval active";
//   document.getElementById("day").className = "col-xs-3 time-interval inactive";
//   document.getElementById("week").className = "col-xs-3 time-interval inactive";
//   document.getElementById("month").className = "col-xs-3 time-interval inactive";
//   document.getElementById('graph').src = "graph4.png";
//   var date = document.getElementById("date");
//   date.innerHTML = "February 2016 - 2017";
//   var x = document.getElementById('checkboxes');
//   var y = x.getElementsByClassName('show');
//   var i;
//   for (i = 0; i < 3; i++) {
//     y[0].className = "hide";
//   }
// }