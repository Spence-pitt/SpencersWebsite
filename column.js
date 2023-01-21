Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Blackberries', 'Mangos', 'Strawberries', 'Grapefruits', 'Limes']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Spencer',
        data: [10, 4, -3, 7, 5]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});