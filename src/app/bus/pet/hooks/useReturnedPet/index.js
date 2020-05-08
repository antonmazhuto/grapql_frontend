// Core
import { useSubscription } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

// Subscriptions
const subscriptionReturnedPet = loader('./gql/subscriptionReturnedPet.graphql');

export const useReturnedPet = () => {
    const {data, loading, error} = useSubscription(subscriptionReturnedPet);
    const pet = data ? data.petReturned.pet : null;
    return {
        pet
    }
};
