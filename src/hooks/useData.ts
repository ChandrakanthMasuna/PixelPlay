import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoints: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoints, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results)
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false);
            });

        return () => controller.abort();

    }, deps ? [...deps] : []);

    return { error, data, isLoading };
};
export default useData;