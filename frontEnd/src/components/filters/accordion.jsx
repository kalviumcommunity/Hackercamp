import React, { useState } from 'react';
import plusIcon from '../../assets/plusIcon.png';
function Accordion({ title, children }) {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="pt-3 flex flex-col gap-4 w-8/12">
            <div
                className={`flex  justify-between items-center`}
                onClick={() => setIsActive(!isActive)}
            >
                <p className="font-semibold text-title text-lg">{title}</p>
                <div className="cursor-pointer">
                    <img
                        src={plusIcon}
                        alt=""
                        className={`h-5 ${
                            isActive ? 'rotate-45 ' : ''
                        } hover:scale-110 transition duration-500 ease-in-out`}
                    />
                </div>
            </div>
            <div
                className={`${
                    isActive ? '' : 'hidden'
                }`}
            >
                {children}
            </div>
        </div>
    );
}
export default Accordion;
