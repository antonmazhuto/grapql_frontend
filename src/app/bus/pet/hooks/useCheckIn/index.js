// Core
import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { loader } from 'graphql.macro';

//Mutations
const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export const useCheckIn = () => {
    const [_checkIn, { data }] = useMutation(mutationCheckIn);

    const [Error, setError] = useState(false);

    const checkIn = (id) => {
        (async () => {
            try {
                await _checkIn({
                    variables: {
                        id
                    }
                })
            } catch (e) {
                setError(e.message)
            }
        })();

    };

    const pet = data && data.checkIn.pet;

    return { checkIn, pet, Error }
};
