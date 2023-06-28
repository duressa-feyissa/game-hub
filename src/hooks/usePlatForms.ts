import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import ms from "ms";
import { PlatForm } from "../entities/PlatForm";

const apiClient = new APIClient<PlatForm>('/platforms');

const usePlatForms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
    });

export default usePlatForms;