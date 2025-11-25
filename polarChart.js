const polarChart = document.getElementById('polarChart');


const labels_polar = ['Januar', 'Februar', 'March', 'April', 'May']
const data_polar = {
    labels: labels_polar,
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56],
            backgroundColor: ['#4BC0C0', '#36A2EB', '#FF6384', '#FF9F40', '#FFCD56'],
        },
    ]
};


const polarChart_config = {
    type: 'polarArea',
    data: data_polar,
    options: {
        responsive: true,
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    font: {
                        size: 18
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart With Centered Point Labels'
            }
        }
    },
};

//new Chart(polar, config_polar)


