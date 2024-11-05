import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { storeCatImage } from "@/app/api/cat/store-cat";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { queryClient } from "@/lib/react-query";

export function UploadComponent() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { handleSubmit } = useForm();

    const { mutateAsync: createCatImage } = useMutation({
        mutationFn: storeCatImage,
        mutationKey: ['create-cat-image'],
        async onSuccess(data) {
            toast.success(data.message);
            queryClient.invalidateQueries({ queryKey: ['get-cats'] });
            setIsSubmitting(false);
        },
        async onError(data){
            toast.error(data.message);
            setIsSubmitting(false);
        }
    });

    const onSubmit = async() => {
        setIsSubmitting(true);
        await createCatImage();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center gap-4 items-start md:items-center py-6 flex-col md:flex-row">
                <h2 className="text-primary text-lg font-bold w-64">Inserir nova imagem</h2>
                <Button variant="outline" className="flex items-center gap-2 bg-muted text-secondary hover:bg-accent px-0 md:px-2 py-2 rounded-lg border-dashed border-secondary mx-auto md:mx-0 w-full" disabled={isSubmitting} isLoading={isSubmitting}>
                    <div className="rotate-[315deg]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4A4A4A" viewBox="0 0 256 256">
                            <path d="M56,76a60,60,0,0,1,120,0,8,8,0,0,1-16,0,44,44,0,0,0-88,0,8,8,0,1,1-16,0Zm140,44a27.9,27.9,0,0,0-13.36,3.39A28,28,0,0,0,144,106.7V76a28,28,0,0,0-56,0v80l-3.82-6.13a28,28,0,0,0-48.41,28.17l29.32,50A8,8,0,1,0,78.89,220L49.6,170a12,12,0,1,1,20.78-12l.14.23,18.68,30A8,8,0,0,0,104,184V76a12,12,0,0,1,24,0v68a8,8,0,1,0,16,0V132a12,12,0,0,1,24,0v20a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0v36c0,21.61-7.1,36.3-7.16,36.42a8,8,0,0,0,3.58,10.73A7.9,7.9,0,0,0,208,232a8,8,0,0,0,7.16-4.42c.37-.73,8.85-18,8.85-43.58V148A28,28,0,0,0,196,120Z"></path>
                        </svg>
                    </div>
                    <span className="hidden md:inline">clique aqui para adicionar uma nova imagem</span>
                    <span className="inline md:hidden">para adicionar uma nova imagem</span>
                </Button>
            </div>
        </form>
    );
}
