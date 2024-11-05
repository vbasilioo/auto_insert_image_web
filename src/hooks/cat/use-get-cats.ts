import { getCats } from "@/app/api/cat/get-cats";
import { ISearchParamsRoot } from "@/interfaces/Api";
import { IGetCats } from "@/interfaces/cat";
import { useQuery } from "@tanstack/react-query";

export const useGetCats = ({
    page,
    per_page
}: ISearchParamsRoot) => {
    const { data: cats } = useQuery<IGetCats>({
        queryKey: ['get-cats', page, per_page],
        queryFn: () => getCats({ page, per_page }),
    });

    return { cats };
}