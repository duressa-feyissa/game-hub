import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

export interface PlatForm {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<PlatForm>('/platforms');

const usePlatForms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,

    });

export default usePlatForms;