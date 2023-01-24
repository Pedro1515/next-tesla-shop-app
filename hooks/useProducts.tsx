import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces/product";

export const useProducts = (endPoint: string, config?: SWRConfiguration) => {
    const { data, error, isLoading } = useSWR<IProduct[]>(
        `/api${endPoint}`,
        config
    );

    return {
        products: data || [],
        isLoading,
        isError: error,
    };
};
