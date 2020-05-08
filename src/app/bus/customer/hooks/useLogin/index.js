// Core
import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {useState} from "react";

// Queries

const mutationLogin = loader('./gql/mutationLoginCustomer.graphql');

export const useLogin = () => {
    const [logIn, { loading, data, error }] = useMutation(mutationLogin, {
        onCompleted({logIn}) {
            if (logIn.token) {
                localStorage.setItem('Token', logIn.token)
            }
        }
    });

    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        event.persist();
        setValues(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    };


    const login = () => {
        const { username, password } = values;

        logIn({
            variables: {
                username: username,
                password: password
            }
        })
    };



    return {
        handleChange,
        login,
        loading,
        error,
        customer: data && data.logIn && data.logIn.customer
    }
};
