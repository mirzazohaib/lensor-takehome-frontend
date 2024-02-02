const mapData = {
  center: [60.23, 24.94],

  markers: [
    { geocode: [60.188312, 24.905563], popUp: 'Meilahti Hospital' },
    { geocode: [60.22203, 24.68516], popUp: 'Espoo Hospital' },
    { geocode: [60.253937, 24.997937], popUp: 'Malmi Hospital' },
    { geocode: [60.188812, 24.904562], popUp: 'Slita Hospital' },
    { geocode: [60.186813, 24.907938], popUp: 'Puisto Hospital' },
    { geocode: [60.162188, 24.948563], popUp: 'Surgical Hospital' },
    { geocode: [60.187687, 24.910063], popUp: "New Children's Hospital" },
    { geocode: [60.191688, 24.894687], popUp: 'Skin And Allergy Hospital' },
  ],

  layers: [
    {
      title: 'OpenTopoMap',
      attribute:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      link: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    },
    {
      title: 'Stadia.StamenWatercolor',
      attribute:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      link: 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg',
    },
  ],
}
export default mapData
