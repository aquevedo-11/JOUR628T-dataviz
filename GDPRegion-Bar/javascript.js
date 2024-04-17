var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Average GDP per capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#058E3F'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Global GDP per capita by region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Europe & Central Asia and America lead the world in regional GDP per capita with over $15,000 per person.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});