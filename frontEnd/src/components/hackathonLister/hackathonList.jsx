import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import HackathonCardSkeleton from './hackathonSkeleton';
import HackathonCard from '../hackathonLister/hackathonCard';

const HackathonList = ({ data, isLoading }) => {
    return (
        <div className="ml-10 w-4/5 pl-9">
            {isLoading ? (
                <>
                    <HackathonCardSkeleton  />
                    <HackathonCardSkeleton />
                </>
            ) : (
                data.map((hackathonData) => (
                    <HackathonCard
                        key={hackathonData._id}
                        hackathon={hackathonData}
                    />
                ))
            )}
        </div>
    );
};
export default HackathonList;
