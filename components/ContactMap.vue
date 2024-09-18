<template>
  <div id="map" class="h-[800px] w-screen mx-auto relative mb-8"></div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

export default {
  name: "MapComponent",
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGJ1aHJlciIsImEiOiJjbHgzZmQ5M3gwdmdhMmtvZXBiMGR2bm10In0.8Ekjyl45hjC1Pgu5rk-tEg";

    const bounds = [
      [-170.0 - 0.0185, 15.0 - 0.025],
      [-50.0 + 0.0185, 75.0 + 0.025],
    ];

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/hbuhrer/clx3kesvb01se01rdgmlp6gbw",
      center: [-98.35, 49.0],
      zoom: 3,
      maxBounds: bounds,
      cooperativeGestures: true,
    });

    map.on("load", () => {
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  '<img class="max-w-96 p-8 pb-4" src="/images/cyntech-tanks-logo.svg" alt="Cyntech Tanks Calgary Office"><p class="font-medium">Calgary Office</p><p class="text-[#1b3664] hover:scale-105 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/27Q4EewKRgamBSfe7" target="_blank">View On Google Maps</p>',
                icon: "cyntech-group-logo-short",
              },
              geometry: {
                type: "Point",
                coordinates: [-113.90379759558124, 50.96798256983769],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<img class="max-w-96 p-8 pb-4" src="/images/cyntech-tanks-logo.svg" alt="Cyntech Tanks Bonnyville Office"><p class="font-medium">Bonnyville Office</p><p class="text-[#1b3664] hover:scale-105 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/4EMS3Q2cQoqiQ7wX7" target="_blank">View On Google Maps</p>',
                icon: "cyntech-group-logo-short",
              },
              geometry: {
                type: "Point",
                coordinates: [-110.77450484767444, 54.26613569479278],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<img class="max-w-96 p-8 pb-4" src="/images/cyntech-group.svg" alt="Cyntech Group Plantersville Office"><p class="font-medium">Plantersville Office</p><p class="text-[#1b3664] hover:scale-105 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/Q5LezcBRgBbxHVCT9" target="_blank">View On Google Maps</p>',
                icon: "cyntech-group-logo-short",
              },
              geometry: {
                type: "Point",
                coordinates: [-95.82376889426205, 30.351170760900935],
              },
            },
          ],
        },
      });

      map.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": ["get", "icon"],
          "icon-size": 0.3,
          "icon-allow-overlap": true,
        },
      });

      map.on("click", "places", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on("mouseenter", "places", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "places", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    map.addControl(new mapboxgl.FullscreenControl());
  },
};
</script>
