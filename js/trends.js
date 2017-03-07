$(function () {
  // CHART STUFF
  // when time is clicked
  buildChartWeek();
  setDate('Week');
  $('.time-interval').click(function () {
    detectTime($(this));
    if ($(this).html() === 'Week') {
      buildChartWeek();
      setDate('Week');
    }
    else if ($(this).html() === 'Month') {
      buildChartMonth();
      setDate('Month');
    }
    else if ($(this).html() === 'Year') {
      buildChartYear();
      setDate('Year');
    }
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
function setDate(section) {
  var d = new Date();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var year = d.getFullYear();
  var date = d.getDate();
  var day = d.getDay();
  if (section === "Week") {
    var first = date - day;
    var last = first + 6;
    var lastDay = new Date(d.setDate(last));
    var firstDay = new Date(d.setDate(first));
    var lastMonth = lastDay.getUTCMonth();
    var firstMonth = firstDay.getUTCMonth();
    $('#date').text(months[firstMonth] + ' ' + firstDay.getUTCDate() + ' - ' + months[lastMonth] + ' ' + lastDay.getUTCDate());
  }
  else if (section === "Month") {
    var firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    var lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    var lastMonth = lastDay.getUTCMonth();
    var firstMonth = firstDay.getUTCMonth();
    $('#date').text(months[firstMonth] + ' ' + firstDay.getUTCDate() + ' - ' + months[lastMonth] + ' ' + lastDay.getUTCDate());
  }
  else if (section === "Year") {
    $('#date').text(year);
  }
}

var title = {
  text: '',
};

var colors = ['#7d1010', '#061e8c', '#fae528', '#f7a35c', '#8085e9',
  '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];

var legend = {
  layout: 'vertical',
  align: 'center',
  itemStyle: {
    fontSize: '3em'
  },
  itemMarginTop: 20,
  itemMarginBottom: 20,
  symbolPadding: 20,
  symbolWidth: 50,
  verticalAlign: 'top',
  floating: false,
  x: -302
};

var plotOptions = {
  series: {
    pointStart: 0,
    lineWidth: 15,
  },
};
var yAxisWM = [{
  allowDecimals: false,
  ceiling: 3,
  title: {
    text: 'Severity',
    style: {
      fontSize: '5em'
    }
  },
  labels: {
    formatter: function () {
      var severities = ['','Mild','Moderate','Severe'];
      return severities[this.value];
    },
    style: {
      "fontSize": "2em"
    }
  }
}];

function buildChartWeek() {
  var myChart = Highcharts.chart('container', {
    chart: {
      type: 'area'
    },

    title: title,

    colors: colors,

    xAxis: [{
      allowDecimals: false,
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      title: {
        text: 'Day Of Week',
        style: {
          fontSize: '5em'
        }
      },
      labels: {
        style: {
          "fontSize": "2em"
        }
      }
    }],

    yAxis: yAxisWM,

    legend: legend,

    plotOptions: plotOptions,

    series: [{
      name: 'Cough',
      data: [1, 1, 2, 0, 0, 0, 0]
    }, {
      name: 'Headache',
      data: [0, 0, 0, 1, 2, 3, 2]
    }, {
      name: 'Sore Throat',
      data: [3, 2, 0, 0, 0, 0, 0]
    }],
  });
}

function buildChartMonth() {
  var myChart = Highcharts.chart('container', {
    chart: {
      type: 'area'
    },

    title: title,

    colors: colors,

    xAxis: [{
      allowDecimals: false,
      min: 1,
      minRange: 31,
      title: {
        text: 'Day Of Month',
        style: {
          fontSize: '5em'
        }
      },
      labels: {
        style: {
          "fontSize": "2em"
        }
      }
    }],

    yAxis: yAxisWM,

    legend: legend,

    plotOptions: plotOptions,

    series: [{
      name: 'Cough',
      data: [0, 0, 0, 0, 1, 1, 2, 3, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0]
    }, {
      name: 'Headache',
      data: [0, 0, 0, 1, 2, 3, 2, 2, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0]
    }, {
      name: 'Sore Throat',
      data: [3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 2, 0, 0, 0, 0]
    }],
  });
}

function buildChartYear() {
  var myChart = Highcharts.chart('container', {
    chart: {
      type: 'column'
    },

    title: title,

    colors: colors,

    xAxis: [{
      allowDecimals: false,
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
        text: 'Month',
        style: {
          fontSize: '5em'
        }
      },
      labels: {
        style: {
          "fontSize": "2em"
        }
      }
    }],

    yAxis: [{
      allowDecimals: false,
      max: 31,
      title: {
        text: 'Occurrences',
        style: {
          fontSize: '5em'
        }
      },
      labels: {
        style: {
          "fontSize": "2em"
        }
      }
    }],

    legend: legend,

    plotOptions: plotOptions,

    series: [{
      name: 'Cough',
      data: [7, 14, 0, 3, 2, 2, 1, 10]
    }, {
      name: 'Headache',
      data: [1, 0, 0, 3, 2, 3, 2]
    }, {
      name: 'Sore Throat',
      data: [1, 0, 1, 0, 2, 3, 3]
    }],
  });
}