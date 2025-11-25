const lineChart = document.getElementById('lineChart');


const labels_line = ['Januar', 'Februar', 'March', 'April', 'May', 'June', 'July',]
const data_line = {
    labels: labels_line,
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 590, 80, 81, 56, 55, 400],
            borderColor: '#FF6989',
            backgroundColor: '#FFB1C1',
            yAxisID: 'y',
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 10,
        },
        {
            label: 'Dataset 2',
            data: [65, 59, 800, 400, 560, 55, 400],
            borderColor: '#36A2EB',
            backgroundColor: '#9AD0F5',
            yAxisID: 'y1',
        }
    ]
};


const lineChart_config = {
    type: 'line',
    data: data_line,
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',

                // grid line settings
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
        }
    },
};




