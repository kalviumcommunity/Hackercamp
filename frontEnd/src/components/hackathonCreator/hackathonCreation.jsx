import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import * as yup from 'yup';

import 'react-datepicker/dist/react-datepicker.css';

function HackathonCreation() {
    const validateRequired = (fieldName, value) => {
        const validTechnologies = [
            'AI',
            'ML',
            'Blockchain',
            'IoT',
            'AR/VR',
            'Cloud Computing',
        ];
        if (!value) {
            return `Required*`;
        } else if (
            fieldName === 'HackathonName' &&
            (value.length > 25 || value.length < 5)
        ) {
            return `Hackathon name character length should be between 5 and 25`;
        } else if (
            fieldName === 'HackathonTheme' &&
            !validTechnologies.includes(value.toUpperCase())
        ) {
            return `${value} is not a valid technology`;
        } else if (
            fieldName === 'HackathonTimings' &&
            !value.includes('am') &&
            !value.includes('pm')
        ) {
            return `${value} is not valid time. Please include am or pm`;
        } else if (fieldName === 'HackathonAddress' && value.length > 30) {
            return `${fieldName} should not be more than 230 charcters`;
        }
    };

    const validationSchema = yup.object({
        checkBoxOption: yup
            .array()
            .min(1, 'At least one option must be selected'),
    });

    const formik = useFormik({
        initialValues: {
            HackathonName: '',
            HackathonTheme: '',
            HackathonTimings: '',
            HackathonMode: '',
            HackathonAddress: '',
            OrganisationName: '',
            date: '',
            HackathonDescription: '',
            HackathonDetails: '',
            checkBoxOption: [],
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },

        validate: (values) => {
            const errors = {};
            // This is to validate fields which were created using createFields function
            for (let i in values) {
                let err = validateRequired(i, values[i]);
                if (err) errors[i] = err;
            }
            return errors;
        },
        validationSchema,
    });

    const fields = [
        {
            label: 'Hackathon Name',
            name: 'HackathonName',
            type: 'text',
            placeholder: 'Enter hackathon name',
        },
        {
            label: 'Hackathon Theme',
            name: 'HackathonTheme',
            type: 'text',
            placeholder: 'Eg., ai, ml',
        },
        {
            label: 'Hackathon Timings',
            name: 'HackathonTimings',
            type: 'text',
            placeholder: 'Eg., 6pm',
        },
        {
            label: 'Hackathon Mode',
            name: 'HackathonMode',
            type: 'text',
            placeholder: 'Eg., online or offline',
        },
        {
            label: 'Hackathon Address',
            name: 'HackathonAddress',
            type: 'text',
            placeholder: 'Enter hackathon address',
        },
        {
            label: 'Organisation Name',
            name: 'OrganisationName',
            type: 'text',
            placeholder: 'Enter organisation name',
        },
    ];
    const createFields = () =>
        fields.map((field) => (
            <div
                key={field.name}
                className="font-roboto flex flex-col w-11/12 mb-4"
            >
                <label
                    htmlFor={field.name}
                    className="font-semibold text-base mb-2"
                >
                    {field.label}
                </label>
                <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} // Add this line
                    className="h-12 border border-whitegray pl-6 rounded placeholder:text-sm bg-graywhite focus:outline-blue-300"
                />
                {formik.touched[field.name] &&
                    formik.errors[field.name] && ( // conditionally render error message
                        <span className="text-red-500 font-medium text-sm
                        ">
                            {formik.errors[field.name]}
                        </span>
                    )}
            </div>
        ));

    return (
        <div>
            <div className="h-screen w-2/6 bg-primary font-roboto fixed z-50 top-0 left-0">
                <Link to={'/'}>
                    <div className="flex gap-1 text-3xl mt-10 ml-10">
                        <div className="bg-blue-600 text-white w-10 h-8  grid justify-center items-center rounded drop-shadow-lg">
                            <span className="text-xl font-bold">{'H'}</span>
                        </div>
                        <p className="text-white font-bold">HackerCamp</p>
                    </div>
                </Link>
                <div className="absolute top-72 ml-10">
                    <p className="text-white text-2xl mb-4">
                        Empower your ideas. Transform tommorrow.
                    </p>
                    <p className="text-white">
                        Unleash your creativity. Empower your ideas. Collaborate
                        to transform tommorrow at our hackathon. Join us now!
                    </p>
                </div>
            </div>
            <div className="h-screen ml-33% w-4/6  mt-1 flex flex-col items-center">
                <div className="h-2 w-594 bg-primary">&nbsp;</div>
                <div className="w-594 border-slate-200 border-2">
                    <div className="py-3">
                        <h1 className="text-center text-22.5 font-semibold">
                            Register your hackathon
                        </h1>
                    </div>
                    <form
                        className="flex flex-col items-center"
                        onSubmit={formik.handleSubmit}
                    >
                        {createFields()}
                        <div className="flex font-roboto justify-between w-11/12 mb-4">
                            <div>
                                <label
                                    htmlFor="checkBoxOption"
                                    className="font-semibold text-base mb-4"
                                >
                                    Hackathon Entry
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        id="Free"
                                        name="checkBoxOption"
                                        value="Free"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="Free">Free</label>
                                </div>
                                <div className="flex gap-2 font-roboto">
                                    <input
                                        type="checkbox"
                                        id="Paid"
                                        name="checkBoxOption"
                                        value="Paid"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="Paid">Paid</label>
                                </div>
                                {formik.errors.checkBoxOption ? (
                                    <span className="text-red-500">
                                        {formik.errors.checkBoxOption}
                                    </span>
                                ) : null}
                            </div>
                            <div className="flex flex-col pr-16 relative">
                                <label
                                    htmlFor="Hackathon Poster"
                                    className="font-semibold text-base mb-2"
                                >
                                    Hackathon Poster
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="Hackathon Poster"
                                    className="bg-blue-200 w-72 px-2 py-1 rounded border-2 border-whitegray"
                                />
                            </div>
                        </div>
                        <div className="font-roboto flex flex-col w-11/12 mb-4">
                            <label
                                htmlFor="Hackathon Date"
                                className="font-semibold text-base mb-2"
                            >
                                Hackathon date
                            </label>
                            <DatePicker
                                name="date"
                                selected={formik.values.date}
                                onChange={(value) => {
                                    formik.setFieldValue('date', value);
                                }}
                                onSelect={(value) => {
                                    formik.setFieldValue('date', value);
                                }}
                                isClearable
                                placeholderText="Enter the date"
                                className="h-12 border border-whitegray w-11/12 pl-6 rounded placeholder:text-sm bg-graywhite focus:outline-blue-300"
                            />
                            {formik.errors.date ? (
                                <span className="text-red-500">
                                    {formik.errors.date}
                                </span>
                            ) : null}
                        </div>
                        <div className="font-roboto flex flex-col w-11/12 mb-4">
                            <label
                                htmlFor="Hackathon Description"
                                className="font-semibold text-base mb-2"
                            >
                                Hackathon Description
                            </label>
                            <textarea
                                name="HackathonDescription"
                                placeholder="Be clear and descriptive"
                                value={formik.values.HackathonDescription}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="bg-graywhite  w-12/12 border-whitegray pt-2 border focus:focus:outline-blue-300 pl-4 "
                            ></textarea>
                            {formik.errors.HackathonDescription ? (
                                <span className="text-red-500">
                                    {formik.errors[fields.fin]}
                                </span>
                            ) : null}
                        </div>
                        <div className="font-roboto flex flex-col w-11/12 mb-4">
                            <label
                                htmlFor="Hackathon Details"
                                className="font-semibold text-base mb-2"
                            >
                                Hackathon Details
                            </label>
                            <textarea
                                name="HackathonDetails"
                                value={formik.values.HackathonDetails}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="use this space to provide additional details"
                                className="bg-graywhite  w-12/12 border-whitegray border pt-2 focus: outline-blue-300 pl-4 "
                            ></textarea>
                            {formik.errors.HackathonDetails ? (
                                <span className="text-red-500">
                                    {formik.errors.HackathonDetails}
                                </span>
                            ) : null}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-seablue m-auto block h-10 w-56 rounded text-white my-4    hover:bg-blue-600"
                            >
                                Register Hackathon
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HackathonCreation;
