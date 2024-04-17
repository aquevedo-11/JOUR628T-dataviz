var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#FF8360",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#E8E288",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#7DCE82",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#3CDBDE",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#BBC7CE",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#DA3E52",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#5B4B49",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#2667FF",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#414288",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 55.8, y: 2836},
                ],
                label: "Nigeria",
                borderColor: "#822E81",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            plugins: {       
                //Chart title
               title: {
                   display: true,
                   text: 'Higher national GDP associated with higher life expectancy',
                   font: {
                       size: 18
                   }
               },
               //Chart subtitle
               subtitle: {
                   display: true,
                   text: 'Countries with a higher GDP per capita saw an increase in life expectancy rates.'
               }
           },
    
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life expectancy'
                  }
              }
            }
          }
        });

