import { db } from './data';

type FriendsType = {
    zip: string;
    weather: string;
};
interface WeatherInterface {
    zip: string;
    weather: string;
    tempC: string;
    tempF: string;
    friends: FriendsType[];
    wind: string;
}

export const resolvers = {
    Query: {
        weather: async (_: unknown, param: WeatherInterface) => {
            return [db.find((item) => item.zip === param.zip)];
        },
    },
    Mutation: {
        weather: async (_: unknown, param: { data: WeatherInterface }) => {
            return [db.find((item) => item.zip === param.data.zip)];
        },
    },
};
