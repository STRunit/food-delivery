"use client"

import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

export const useCategoriesWithFoods = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axiosInstance.get("/category/foods");
                setResponse(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetch();
    }, []);

    return { response, loading, error };
};