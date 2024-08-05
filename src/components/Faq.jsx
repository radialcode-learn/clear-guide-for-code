import React from 'react'
import { useState } from "react";
import { DownArrow } from './common/Icons';
import { FAQ_LIST } from '../utils/Helper';

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Function to toggle accordion items
    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='py-6'>
            <h2 className='text-3xl text-center my-6 font-bold'>FAQ</h2>
            <div className='max-w-[600px] mx-auto'>
                {FAQ_LIST.map((obj, index) => (
                    <div key={index} className="pb-6 lg:pb-5 xl:me-9">
                        <div
                            className={`border-black border-solid border rounded-[10px] max-[374px]:p-3 p-5 sm:p-4 xl:p-5 bg-white ${expandedIndex === index ? "shadow-faq-card" : ""}`} >
                            {/* Accordion button */}
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full text-left font-medium text-[20px] leading-[150%] text-black font-inter ${expandedIndex === index ? "" : ""
                                    }`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={expandedIndex === index}
                                aria-controls={`faqs-text-${index}`}
                            >
                                {obj.title}
                                <span
                                    className={`duration-300 ${expandedIndex === index ? "" : "rotate-180"
                                        }`}
                                >
                                    <DownArrow />
                                </span>
                            </button>
                            {/* Accordion content */}
                            <div
                                id={`faqs-text-${index}`}
                                role="region"
                                aria-labelledby={`faqs-title-${index}`}
                                className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    {/* Description of the accordion item */}
                                    <p className="text-black opacity-70 font-inter font-normal max-[374px]:text-sm text-base sm:text-sm xl:text-base leading-6 max-w-[572px] max-[374px]:pe-0 pe-8 mt-1 sm:mt-[6px]">
                                        {obj.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq