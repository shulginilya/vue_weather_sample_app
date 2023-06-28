interface CommonConfigType {
    geoApiEndpoint: string;
    apiEndpoint: string;
    apiKey: string;
}

export const commonConfig: CommonConfigType = {
    apiEndpoint: 'https://api.openweathermap.org/data/2.5/weather',
    geoApiEndpoint: 'http://api.openweathermap.org/geo/1.0',
    apiKey: 'feb871655ef06e13c6e3befea2bf535b',
}
