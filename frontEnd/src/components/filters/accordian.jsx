import React, { useState } from 'react';
import plusIcon from '../../assets/plusIcon.png'
function Accordion({ title, children }) {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="pt-3 flex flex-col gap-4">
            <div
                className="flex w-80 justify-between items-center"
                onClick={() => setIsActive(!isActive)}
            >
                <p className="font-[500] text-[#5B5D60] text-md">{title}</p>
                <div className="cursor-pointer">
                    <span className="text-2xl">
                        <img
                            src={plusIcon}
                            alt=""
                            className={`h-5 ${
                                isActive ? '-rotate-45' : ''
                            } transition duration-300 ease-in-out`}
                        />
                    </span>
                </div>
            </div>
            {isActive && <div className="">{children}</div>}
        </div>
    );
}
export default Accordion;
