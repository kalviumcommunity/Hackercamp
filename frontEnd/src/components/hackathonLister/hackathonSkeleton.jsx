import React from 'react';
import Skeleton from 'react-loading-skeleton';
import dotIcon from '../../assets/fullStop.png';
function HackathonCardSkeleton() {
    return (
        <div className="bg-slate-100 my-6 p-6 flex items-center justify-around font-roboto rounded z-0 hover:drop-shadow-lg hover:bg-slate-200 hover:scale-1.009 transition-transform ease-out duration-500">
            <div>
                <Skeleton height={160} width={288} />
            </div>
            <div className="flex flex-col w-2/5 gap-3 px-3.5 py-2 rounded">
                <div className="relative">
                    <Skeleton height={24} width={260} />
                </div>

                <div className="flex gap-1 items-center text-15 font-medium text-primary">
                    <Skeleton height={18} width={80} />
                    <img src={dotIcon} alt="" className="h-3 " />
                    <Skeleton height={18} width={100} />
                    <img src={dotIcon} alt="" className="h-3 " />
                    <Skeleton height={18} width={60} />
                </div>
                <div className="flex gap-1 items-center text-15 font-roboto text-blackish">
                    <Skeleton height={18} width={100} />
                    <img src={dotIcon} alt="" className="h-3 " />
                    <Skeleton height={18} width={100} />
                </div>
                <div className="flex gap-2">
                    <Skeleton height={18} width={80} />
                    <Skeleton height={18} width={80} />
                    <Skeleton height={18} width={80} />
                </div>
            </div>
        </div>
    );
}

export default HackathonCardSkeleton;
