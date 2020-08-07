$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click', ()=>{
      // toggle NaV
      nav.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index)=>{
          if(link.style.animation) {
              link.syle.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
  });

}

navSlide();


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['Opening Move', 'Percentage'],
    ["King's pawn (e4)", 44],
    ["Queen's pawn (d4)", 31],
    ["Knight to King 3 (Nf3)", 12],
    ["Queen's bishop pawn (c4)", 10],
    ['Other', 3]
  ]);

  var options = {
    title: 'Chess opening moves',
    width: 900,
    legend: { position: 'none' },
    chart: { title: 'Chess opening moves',
             subtitle: 'popularity by percentage' },
    bars: 'horizontal', // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: 'top', label: 'Percentage'} // Top x-axis.
      }
    },
    bar: { groupWidth: "90%" }
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  chart.draw(data, options);
};

drawStuff()

// const chart = () => {
//   anychart.onDocumentReady(function () {
//     var data = [
//       ['Eyebrow pencil', 5221],
//       ['Nail polish', 9256],
//       ['Lipstick', 3308],
//       ['Lip gloss', 5432],
//       ['Mascara', 13701],
//       ['Foundation', 4008],
//       ['Eyeshadows', 4229],
//       ['Rouge', 18712],
//       ['Powder', 10419],
//       ['Eyeliner', 3932]
//     ];

//     // sort data by alphabet order
//     data.sort(function (itemFirst, itemSecond) {
//       return itemSecond[1] - itemFirst[1];
//     });

//     // create bar chart
//     var chart = anychart.bar();

//     // turn on chart animation
//     chart
//       .animation(true)
//       .padding([10, 40, 5, 20])
//       // set chart title text settings
//       .title('Top 10 Cosmetic Products by Revenue');

//     // create area series with passed data
//     var series = chart.bar(data);
//     // set tooltip formatter
//     series
//       .tooltip()
//       .position('right')
//       .anchor('left-center')
//       .offsetX(5)
//       .offsetY(0)
//       .format('${%Value}{groupsSeparator: }');

//     // set titles for axises
//     chart.xAxis().title('Products by Revenue');
//     chart.yAxis().title('Revenue in Dollars');
//     chart.interactivity().hoverMode('by-x');
//     chart.tooltip().positionMode('point');
//     // set scale minimum
//     chart.yScale().minimum(0);

//     // set container id for the chart
//     chart.container('container');
//     // initiate chart drawing
//     chart.draw();
//   });
  
// };

// chart();