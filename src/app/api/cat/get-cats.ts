import api from "@/app/services/api";
import { ISearchParamsRoot } from "@/interfaces/Api";
import { IGetCats } from "@/interfaces/cat";
import { toast } from "sonner";

export async function getCats({
    page,
    per_page
}: ISearchParamsRoot){
    try{
        const response = await api.get<IGetCats>('/images/index', {
            params: {
                page,
                per_page
            },
        });

        return response.data;
    }catch(error: any){
        console.error(
            'Error fetching data:',
            error.response?.data || error.message || error
        );

        toast.error(error.response.data.message);

        throw new Error(error.response?.data.message || 'Error fetching data');
    }
}