import {useState} from "react";

export function useFetch(callback) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    const fetch = async (...args) => {
        try {
            setIsLoaded(false);
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoaded(true);
        }
    };

    return [fetch, isLoaded, error];
}