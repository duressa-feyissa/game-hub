import { useQuery } from "@tanstack/react-query";
import apiClient from "../service/api-client";
import { FetchResponse } from '../service/api-client'

export interface PlatForm {
    id: number;
    name: string;
    slug: string;
}

const usePlatForms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<PlatForm>>('/platforms/lists/parents').then(response => response.data)

    });

export default usePlatForms;