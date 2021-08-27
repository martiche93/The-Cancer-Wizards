// ----------------------------
// Activity 15.3.8 Reference
// ----------------------------

// Use samples.json to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("samples.json").then((incomingData) => {
    function filterTumorRating(tumor) {
        return tumor.radius_mean > 0;
    }

    // Use filter() to pass the function as its argument
    var filteredTumors = incomingData.filter(filterTumorRating);

    // Check to make sure you are filtering the tumors
    console.log(filteredTumors);

    // Use the map method with the arrow function to return all the filtered tumor radius means for the x-axis
    var radiusMeans = filteredTumors.map(tumors => tumors.radius_mean);

    // Use the map method with the arrow function to return all the filtered tumor texture means for the x-axis
    var textureMeans = filteredTumors.map(tumors => tumors.texture_mean);

    // Use the map method with the arrow function to return all the filtered tumor texture means for the x-axis
    var perimeterMeans = filteredTumors.map(tumors => tumors.perimeter_mean);

    // Use the map method with the arrow function to return all the filtered tumor texture means for the x-axis
    var areaMeans = filteredTumors.map(tumors => tumors.area_mean);

    // Use the map method with the arrow function to return all the filtered tumor smoothness means for the x-axis
    var smoothnessMeans = filteredTumors.map(tumors => tumors.smoothness_mean);

    // Use the map method with the arrow function to return all the filtered tumor compactness means for the x-axis
    var compactnessMeans = filteredTumors.map(tumors => tumors.compactness_mean);

    // Use the map method with the arrow function to return all the filtered tumor texture means for the x-axis
    var concavityMeans = filteredTumors.map(tumors => tumors.concavity_mean);

    // Use the map method with the arrow function to return all the filtered tumor texture means for the x-axis
    var concavePointsMeans = filteredTumors.map(tumors => tumors.concave_points_mean);

    // Use the map method with the arrow function to return all the filtered tumor texture means for the x-axis
    var symmetryMeans = filteredTumors.map(tumors => tumors.symmetry_mean);

    // Use the map method with the arrow function to return all the filtered tumor texture means for the x-axis
    var fractalDimensionMeans = filteredTumors.map(tumors => tumors.fractal_dimension_mean);

    // Use the map method with the arrow function to return all the filtered diagnosis types for the y-axis
    var types = filteredTumors.map(tumors => tumors.diagnosis);

    // Check your filtered radius means
    console.log(types);

    // Create your trace
    var trace1 = {
        x: {radiusMeans,
            textureMeans,
            perimeterMeans,
            areaMeans,
            smoothnessMeans,
            compactnessMeans,
            concavityMeans,
            concavePointsMeans,
            symmetryMeans,
            fractalDimensionMeans},
        y: types,
        text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        mode: 'markers',
        marker: {
            color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
            opacity: [1, 0.8, 0.6, 0.4],
            size: [40, 60, 80, 100]
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
    };

    Plotly.newPlot("bubble", data, layout);
});