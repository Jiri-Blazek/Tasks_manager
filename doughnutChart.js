const doughnutChart = document.getElementById('doughnutChart');


const labels_doughnut = ['Januar', 'Februar', 'March', 'April', 'May']
const data_doughnut = {
    labels: labels_doughnut,
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 590, 80, 81, 56],
            backgroundColor: ['#4BC0C0', '#36A2EB', '#FF6384', '#FF9F40', '#FFCD56'],
        },
    ]
};


const doughnutChart_config = {
    type: 'doughnut',
    data: data_doughnut,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            }
        }
    },
};

//new Chart(doughnut, config_doughnut)


