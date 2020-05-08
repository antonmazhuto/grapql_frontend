// Core
import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useState } from 'react';

// Hooks
import { useForm } from "../useForm";

// Queries
const mutationLogin = loader('./gql/mutationLoginCustomer.graphql');

export const useLogin = () => {
    const {form, handleChange} = useForm({
        username: '',
        password: ""
    });
    const [_logIn, { loading, data, error }] = useMutation(mutationLogin, {
        onCompleted({logIn}) {
            if (logIn.token) {
                localStorage.setItem('Token', logIn.token)
            }
        }
    });

    const authorizedCustomer = data && data.logIn;

    const login = () => {
        const { username, password } = form;

        _logIn({
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
        customer: authorizedCustomer && authorizedCustomer.customer
    }
};
