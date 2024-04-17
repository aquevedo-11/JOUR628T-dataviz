var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
            label: '# of studios with releases',
            data: [16, 6, 3, 1, 0, 2, 0, 1, 3, 0, 0, 0],
            fill: true,
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0, 0.1)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'One-hit wonders? ',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The majority of studios had between one and three top 100 grossing film last year. '
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});