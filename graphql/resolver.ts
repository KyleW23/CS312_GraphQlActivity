import { db } from './data';

interface WeatherInterface {
    zip: string;
    weather: string;
    tempC: string;
    tempF: string;
    friends: string[];
    wind: string;
}

export const resolvers = {
    Query: {
        weather: async (_: unknown, param: WeatherInterface) => {
            const localWeatherData = db.find((data) => data.zip === param.zip);

            if (!localWeatherData) return [];

            const friendsWeatherData = localWeatherData.friends.map(
                (friendZip) => db.find((data) => data.zip === friendZip),
            );

            return [localWeatherData, ...friendsWeatherData];
            // return [db.find((item) => item.zip === param.zip)];
        },
    },
    Mutation: {
        weather: async (_: unknown, param: { data: WeatherInterface }) => {
            return [db.find((item) => item.zip === param.data.zip)];
        },
    },
};
