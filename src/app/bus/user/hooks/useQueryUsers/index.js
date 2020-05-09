// Core
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

// Queries
const queryUsers = loader('./gql/queryUsers.graphql');

export const useQueryUsers = () => {
    const { loading, error, data } = useQuery(queryUsers);

    const users = data ? data.users : null;
    return { loading, error, users }
};
