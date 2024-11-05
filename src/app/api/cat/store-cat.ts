import api from "@/app/services/api";
import { IStoreCatImage } from "@/interfaces/cat";

export async function storeCatImage() {
    try {
        const response = await api.post<IStoreCatImage>('/cats/add-photo');

        return response.data;
    } catch (error: any) {
        console.error(
            'Error fetching data:',
            error.response?.data || error.message || error
        );

        throw new Error(error.response?.data.message || 'Error fetching data');
    }
}
