import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function HackathonCardSkeleton() {
    return (
        <>
            <div className="bg-slate-100 my-6 flex items-center justify-around font-roboto rounded z-0">
                <div>
                    <Skeleton height={160} width={120} />
                </div>
                <div className="flex flex-col w-2/5 gap-3 px-3.5 py-2 rounded">
                    <div className="relative">
                        <Skeleton height={30} width={200} />
                    </div>

                    <div className="flex gap-1 items-center text-15 font-medium text-primary">
                        <Skeleton height={15} width={50} />
                        <Skeleton height={15} width={70} />
                        <Skeleton height={15} width={70} />
                    </div>
                    <div className="flex gap-1 items-center text-15 font-roboto text-blackish">
                        <Skeleton height={15} width={100} />
                        <Skeleton height={15} width={120} />
                    </div>
                    <div className="flex gap-2">
                        <Skeleton height={20} width={60} />
                        <Skeleton height={20} width={80} />
                        <Skeleton height={20} width={50} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HackathonCardSkeleton;
