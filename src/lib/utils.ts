import { clsx, type ClassValue } from "clsx"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handlePaginate(
  pageIndex: number,
  searchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance,
  paramName?: string
) {
  const params = new URLSearchParams(
    searchParams as unknown as URLSearchParams
  );

  if (pageIndex !== null) {
    params.set(paramName ?? "page", pageIndex.toString());
  } else {
    params.delete(paramName ?? "page");
  }

  router.push(`?${params.toString()}`);
}