
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <script src="https://maps.googleapis.com/maps/api/js?key=API_KEY"></script> -->
    <script
        src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
</head>
<body>
    <div id="map" style="height: 100vh; width: 100%;">

    </div>

    <script>
        const getCoordinates = async (placename) => {
            let coordinates = {}

            var endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + placename + '&key=API_KEY';

            try {
                let response = await fetch(endpoint)
                response = await response.json()

                if (response.status === 'OK') {
                    const location = response.results[0].geometry.location;
                    coordinates = {...coordinates, lat: location.lat, lng: location.lng, /*name: placename*/}
                }else{
                    throw response
                }

            } catch (error) {
                // console.error(error);
            }

            return coordinates;
        }

        const locationArr = [
                    "Basingstoke and North Hampshire Hospital Basingstoke Hampshire RG24 9NA Aldermaston Road UNITED KINGDOM",
                    "Sahlgrenska University Hospital S-413 45 Gothenburg  SWEDEN",
    ];

        // Initialize the map
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 46.9514, lng: 7.4371 },
            zoom: 3
        });
        
        // Define the function to group the locations based on the current map zoom level
        async function initMap() {
            try {

                let locations = [];
                let markerObjs = [];

                for (let i = 0; i < locationArr.length; i++) {
                    locations.push(await getCoordinates(locationArr[i]));
                }
                
                for (const location of locations) {
                    if (Object.keys(location).length === 0) continue;

                    const groupLatLng = new google.maps.LatLng(location.lat, location.lng);

                    const marker = new google.maps.Marker({
                        position: groupLatLng,
                        // map: map,
                        // label: group.count.toString(),
                        // title: location.name
                    });

                    markerObjs.push(marker);

                    // When you click a marker, it zooms in closer to the area of the marker
                    // so that you can see much more details
                    marker.addListener('click', function () {
                        map.setZoom(15); // set the zoom level to 15
                        map.setCenter(marker.getPosition()); // center the map to the marker location
                    });

                }

                const markerCluster = new MarkerClusterer(map, markerObjs, {
                    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                });
            } catch (error) {
                console.log(error)
            }
        }
        initMap();
    </script>
    
</body>
</html>
