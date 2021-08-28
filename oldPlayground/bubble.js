const file = 'samples.json';

const generateChart = data => { ... };

(async () => {
    data = await d3.json(file).then(data => data);
    generateChart(data);
})();