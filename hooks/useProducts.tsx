import useSWR, { SWRConfiguration } from "swr";

export const useProducts = (endPoint: string, config?: SWRConfiguration) => {
    const { data, error, isLoading } = useSWR(`/api${endPoint}`, config);

    return {
        products: data,
        isLoading,
        isError: error,
    };
};
