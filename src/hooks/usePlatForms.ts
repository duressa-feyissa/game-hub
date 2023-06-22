import useData from "./useData";

export interface PlatForm {
    id: number;
    name: string;
    slug: string;
}

const usePlatForms = () => useData<PlatForm>("/platforms/lists/parents");

export default usePlatForms;