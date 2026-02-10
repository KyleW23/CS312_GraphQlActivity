import gql from 'graphql-tag';

export const typeDefs = gql`
    type FriendsType {
        zip: String!
        weather: String!
    }

    type LocationWeatherType {
        zip: String!
        weather: String!
        tempC: String!
        tempF: String!
        friends: [FriendsType]!
        wind: String
    }

    input LocationWeatherInput {
        zip: String!
        weather: String
        tempC: String
        tempF: String
        friends: [String]
        wind: String
    }

    type Query {
        weather(zip: String): [LocationWeatherType]!
    }

    type Mutation {
        weather(data: LocationWeatherInput): [LocationWeatherType]!
    }
`;
