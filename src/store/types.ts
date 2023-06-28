interface WeatherItemType {
    description: string;
    main: string;
}

export interface StateKeyValuePairType {
    data: weatherInfoType | null;
    error: string;
}

export interface weatherInfoType {
    name: string;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    },
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    },
    weather: WeatherItemType[],
    wind: {
        deg: number;
        speed: number;
    }
}


interface StateInterface {
	weather_info: StateKeyValuePairType;
}

export interface StoreInterface {
	state: StateInterface;
	getters?: any;
	mutations?: any;
	actions?: any;
}

export enum StateKeys {
	weather_info = 'weather_info'
}