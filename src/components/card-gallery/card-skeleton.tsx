export function CardSkeleton(){
    return(
        <div className="bg-gray-300 animate-pulse rounded-lg p-6 aspect-[16/6] md:aspect-square flex items-center justify-center">
            <div className="h-full w-full bg-gray-200 rounded-lg"></div>
        </div>
    );
}