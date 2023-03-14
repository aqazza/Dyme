import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
    query allProfiles {
        # match testing queries in apollo
        profiles {
            _id
            name
            skills
        }
    }
`;

// initialize a query that works in GraphQL
// GET ALL USERS AND THEIR INFO
export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            firstName
            lastName
            username
            email
            password
            budget
            availableBalance
            categories {
                _id
                name
                amountAllocated
                description
            }
        }
    }
`;

// GET ONE USERS AND THEIR INFO
export const QUERY_ONE_USER = gql`
    query retrieveOneUser($id: ID!) {
        user(_id: $id) {
            _id
            firstName
            lastName
            username
            password
            email
            budget
            availableBalance
            categories {
                _id
                name
                amountAllocated
                description
            }
        }
    }
`;

