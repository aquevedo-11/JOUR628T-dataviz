var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 9, y: 195567880},
                ],
                label: "Walt Disney Studios",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 12, y: 126328273},
                ],
                label: "Universal Pictures",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 9, y: 109730951},
                ],
                label: "Warner Bros.",
                borderColor: "#FF0000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 8, y: 87039642},
                ],
                label: "Paramount Pictures",
                borderColor: "#A020F0",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 1, y: 684075767},
                ],
                label: "20th Century Studios",
                borderColor: "#FFA500",
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
                   text: 'Average box office sales per movie by distributor (2023)',
                   font: {
                       size: 18
                   }
               },
               //Chart subtitle
               subtitle: {
                   display: true,
                   text: 'These five film studios were the top box office earners in 2023. \nIn all, they released 39 blockbusters. Not all investments, however, were equal. \n20th Century Studios released just one film - Avatar: The Way of Water - and grossed nearly $685 million in box office sales while Walt Disney Studios grossed roughly $1.76 billion across nine film releases.'
               }
           },    
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Gross box office sales per film'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: '# of films released'
                  }
              }
            }
          }
        });
