const barChart2 = document.getElementById('barChart2');



const data_barchart2 = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 590, 80, 81, 56, 55, 400],
            backgroundColor: 'red',
        },
        {
            label: 'Dataset 2',
            data: [65, 59, 80, 81, 560, 55, 400],
            backgroundColor: 'blue',
        },
    ]
};


const barChart2_config = {
    type: 'bar',
    data: data_barchart2,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
};

