import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
      <div className="h-screen w-full flex flex-col justify-start items-center px-4 gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className={"w-full rounded-md h-[16px]"} />
          <Skeleton className={"w-full rounded-md h-[48px]"} />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 w-full"> 
          <Skeleton className={"w-full rounded-md h-[200x]"} />
          <Skeleton className={"w-full rounded-md h-[200px]"} />
          <Skeleton className={"w-full rounded-md h-[200px]"} />
        </div> 
      </div>
    )
  }