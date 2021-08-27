// ----------------------------
// Activity 15.3.8 Reference
// ----------------------------

// TRACE ONE
// Use samples.json to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("samples.json").then((incomingData) => {
    // Function to filter the radius_mean data greater than 0
    function filterTumorRadius(tumor) {
        return tumor.radius_mean > 0;
    }

    // Use filter() to pass the function as its argument
    var filteredRadius = incomingData.filter(filterTumorRadius);

    // Check to make sure you are filtering the tumors by radius
    console.log(filteredRadius);

    // Use the map method with the arrow function to return all the filtered diagnosis for M or B
    var ids = filteredRadius.map(tumors => tumors.id);

    // Use the map method with the arrow function to return all the filtered diagnosis types for the y-axis
    var ratings = filteredRadius.map(tumors => tumors.diagnosis);

    // Check your filtered radius means
    console.log(ratings);

    // Create your trace
    var trace1 = {
        x: ids,
        y: ratings,
        text: ['Radius (Avg)'],
        mode: 'markers',
        marker: {
            color: ['red'],
            size: [200]
        }
    };

    // TRACE TWO
    function filterTumorTexture(tumor) {
        return tumor.radius_mean > 0;
    }
    var filteredTexture = incomingData.filter(filterTumorTexture);

    var ids = filteredTexture.map(tumors => tumors.id);
    var ratings = filteredTexture.map(tumors => tumors.diagnosis);

    var trace2 = {
        x: ids,
        y: ratings,
        text: ['Texture (Avg)'],
        mode: 'markers',
        marker: {
            color: ['pink'],
            size: [175]
        }
    };

    // TRACE THREE
    function filterTumorPerimeter(tumor) {
        return tumor.perimeter_mean > 0;
        }
    var filteredPerimeter = incomingData.filter(filterTumorPerimeter);

    var ids = filteredPerimeter.map(tumors => tumors.id);
    var ratings = filteredPerimeter.map(tumors => tumors.diagnosis);

    var trace3 = {
        x: ids,
        y: ratings,
        text: ['Perimeter (Avg)'],
        mode: 'markers',
        marker: {
            color: ['orange'],
            size: [150]
        }
    };

    // TRACE FOUR
    function filterTumorArea(tumor) {
        return tumor.area_mean > 0;
    }   
    var filteredArea = incomingData.filter(filterTumorArea);

    var ids = filteredArea.map(tumors => tumors.id);
    var ratings = filteredArea.map(tumors => tumors.diagnosis);

    var trace4 = {
        x: ids,
        y: ratings,
        text: ['Area (Avg)'],
        mode: 'markers',
        marker: {
            color: ['yellow'],
            size: [125]
        }
    };

    // TRACE FIVE
    function filterTumorSmoothness(tumor) {
        return tumor.smoothness_mean > 0;
    }
    var filteredSmoothness = incomingData.filter(filterTumorSmoothness);

    var ids = filteredSmoothness.map(tumors => tumors.id);
    var ratings = filteredSmoothness.map(tumors => tumors.diagnosis);

    var trace5 = {
        x: ids,
        y: ratings,
        text: ['Smoothness (Avg)'],
        mode: 'markers',
        marker: {
            color: ['green'],
            size: [100]
        }
    };

    // TRACE SIX
    function filterTumorCompactness(tumor) {
        return tumor.compactness_mean > 0;
    }
    var filteredCompactness = incomingData.filter(filterTumorCompactness);

    var ids = filteredCompactness.map(tumors => tumors.id);
    var ratings = filteredCompactness.map(tumors => tumors.diagnosis);

    var trace6 = {
        x: ids,
        y: ratings,
        text: ['Compactness (Avg)'],
        mode: 'markers',
        marker: {
            color: ['lightblue'],
            size: [75]
        }
    };

    // TRACE SEVEN
    function filterTumorConcavity(tumor) {
        return tumor.concavity_mean > 0;
    }
    var filteredConcavity = incomingData.filter(filterTumorConcavity);

    var ids = filteredConcavity.map(tumors => tumors.id);
    var ratings = filteredConcavity.map(tumors => tumors.diagnosis);

    var trace7 = {
        x: ids,
        y: ratings,
        text: ['Concavity (Avg)'],
        mode: 'markers',
        marker: {
            color: ['blue'],
            size: [50]
        }
    };

    // TRACE EIGHT
    function filterTumorConcavePoints(tumor) {
        return tumor.concave_points_mean > 0;
    }
    var filteredConcavePoints = incomingData.filter(filterTumorConcavePoints);

    var ids = filteredConcavePoints.map(tumors => tumors.id);
    var ratings = filteredConcavePoints.map(tumors => tumors.diagnosis);

    var trace8 = {
        x: ids,
        y: ratings,
        text: ['Concave Points (Avg)'],
        mode: 'markers',
        marker: {
            color: ['lavendar'],
            size: [25]
        }
    };

    // TRACE NINE
    function filterTumorSymmetry(tumor) {
        return tumor.symmetry_mean > 0;
    }
    var filteredSymmetry = incomingData.filter(filterTumorSymmetry);

    var ids = filteredSymmetry.map(tumors => tumors.id);
    var ratings = filteredSymmetry.map(tumors => tumors.diagnosis);

    var trace9 = {
        x: ids,
        y: ratings,
        text: ['Symmetry (Avg)'],
        mode: 'markers',
        marker: {
            color: ['purple'],
            size: [25]
        }
    };

    // TRACE TEN
    function filterTumorFractalDimension(tumor) {
        return tumor.fractal_dimension_mean > 0;
    }
    var filteredFractalDimension = incomingData.filter(filterTumorFractalDimension);

    var ids = filteredFractalDimension.map(tumors => tumors.id);
    var ratings = filteredFractalDimension.map(tumors => tumors.diagnosis);

    var trace10 = {
        x: ids,
        y: ratings,
        text: ['Fractal Dimensions (Avg)'],
        mode: 'markers',
        marker: {
            color: ['black'],
            size: [5]
        }
    };

    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

    var layout = {
        title: 'Benign vs Malignant',
        showlegend: true,
        height: 700,
        width: 700
    };

    Plotly.newPlot("bubble", data, layout);
});