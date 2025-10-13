import { useEffect, useState } from "react";

export function useFetch(fetchFunc, initialValue) {
    const [meals, setMeals] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchingData() {
            setIsLoading(true);

            const fetchedMeals = await fetchFunc();

            setMeals(fetchedMeals);
            setIsLoading(false);
        }

        setIsLoading(false)
        fetchingData()
    }, [fetchFunc]);

    return {
        meals,
        isLoading
    }
}