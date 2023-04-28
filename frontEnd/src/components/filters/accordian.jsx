import React, { useState } from 'react';
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
                        {isActive ? (
                            <img
                                src="https://img.icons8.com/?size=512&id=3220&format=png"
                                alt=""
                                className="h-5 -rotate-45"
                            />
                        ) : (
                            <img
                                src="https://img.icons8.com/?size=512&id=3220&format=png"
                                alt=""
                                className="h-5 "
                            />
                        )}
                    </span>
                </div>
            </div>
            {isActive && (
                <div className="transition duration-300 ease-in-out">
                    {children}
                </div>
            )}
        </div>
    );
}
export default Accordion;
