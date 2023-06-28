import { weatherInfoType } from "@/store/types";

export const transformWeatherResponse = (data: { [key: string]: any } | null): weatherInfoType => {
    const weatherPart = data?.weather.map((w: any) => ({
        description: w.description,
        main: w.main
    }));
    return {
        name: data?.name,
        sys: {
            country: data?.sys.country,
            sunrise: data?.sys.sunrise * 1000,
            sunset: data?.sys.sunset * 1000,
        },
        main: {
            feels_like: data?.main.feels_like,
            humidity: data?.main.humidity,
            pressure: data?.main.pressure,
            temp: data?.main.temp,
            temp_max: data?.main.temp_max,
            temp_min: data?.main.temp_min,
        },
        weather: weatherPart,
        wind: {
            deg: data?.wind.deg,
            speed: data?.wind.speed
        }
    }
};

