import React, { useState } from 'react';
import Accordion from './accordian';
function Filters() {
   
    return (
        <div className="w-90rem border-r-2 pt-2 h-full">
            <h1 className="font-medium text-[22.5px]">Refine By</h1>
            <Accordion
                title="By Theme/ Technology"
                children={
                    <input
                        type="text"
                        placeholder="Artificial Intelligence, Machine learning"
                        className="border h-10 w-85rem rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300 "
                    />
                }
            />
            <hr className="w-85rem mt-6 border-hrLineHeight" />
            <Accordion
                title="By Date"
                children={
                    <div className="flex flex gap-3 w-3/12 items-center ">
                        <div className="flex flex-col width-full">
                            <label className="text-gray-500" htmlFor="">
                                From
                            </label>
                            <input
                                type="date"
                                className="border h-10 width-full rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300 "
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-500" htmlFor="">
                                To
                            </label>
                            <input
                                type="date"
                                className="border h-10 width-full rounded pl-4 text-sm border-2 ::placeholder focus:outline-blue-300"
                            />
                        </div>
                    </div>
                }
            />
            <hr className="w-85rem mt-6 border-hrLineHeight" />
            <Accordion
                title="By Price"
                children={
                    <div className="flex flex-col text-gray-500">
                        <div className="flex w-14 justify-between">
                            <input
                                type="checkbox"
                                onChange={(e) => handleCheckBox(e)}
                            />
                            <span>Paid</span>
                        </div>
                        <div className="flex w-14 justify-between">
                            <input type="checkbox" />
                            <span>Free</span>
                        </div>
                    </div>
                }
            />
            <hr className="w-85rem mt-6 border-hrLineHeight" />
        </div>
    );
}

export default Filters;
