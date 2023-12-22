function fetchEarthquakeData() {
    const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv'; // Replace with the actual API endpoint or website URL

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayEarthquakeData(data))
        .catch(error => console.error('Error fetching earthquake data:', error));
}

function displayEarthquakeData(data) {
    const earthquakeDataContainer = document.getElementById('earthquakeData');
    earthquakeDataContainer.innerHTML = '';

    if (data && data.features) {
        data.features.forEach(feature => {
            const earthquakeInfo = `
                <p>Magnitude: ${feature.properties.mag}</p>
                <p>Location: ${feature.properties.place}</p>
                <p>Date and Time: ${new Date(feature.properties.time).toLocaleString()}</p>
                <hr>
            `;
            earthquakeDataContainer.innerHTML += earthquakeInfo;
        });
    } else {
        earthquakeDataContainer.innerHTML = '<p>No earthquake data available.</p>';
    }
}
