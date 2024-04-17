var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [{
            label: 'Walt Disney Studios',
            data: [0, 0, 0, 0, 1, 2, 3, 1, 0, 0, 0, 0],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Universal Pictures',
            data: [1, 2, 0, 2, 1, 0, 1, 2, 0, 0, 1, 2],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        },
        {
            label: 'Warner Bros.',
            data: [1, 2, 1, 1, 0, 1, 1, 2, 0, 0, 0, 0],
            fill: true,
            backgroundColor: 'rgba(34, 139, 34, 0.2)',
            borderColor: 'rgb(34, 139, 34)',
            pointBackgroundColor: 'rgb(34, 139, 34)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(34, 139, 34)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Movie releases by month'
            },
            subtitle: {
                display: true,
                text: 'The three top grossing film studios spread their releases throughout the year, most notably shunning back-to-school months of September and October. Disney favored summer releases.'
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    }
});