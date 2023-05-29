import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import SidebarForForms from './sidebarForForms';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function HackathonCreation() {
    const navigate = useNavigate();
    const validateRequired = (fieldName, value) => {
        if (value === '') {
            return `Required*`;
        } else if (
            fieldName === 'HackathonName' &&
            (value.length > 45 || value.length < 5)
        ) {
            return `Hackathon name character length should be between 5 and 25`;
        } else if (fieldName === 'HackathonAddress' && value.length > 30) {
            return `${fieldName} should not be more than 230 charcters`;
        }
    };

    const validationSchema = yup.object({
        HackathonPrice: yup
            .string()
            .min(1, 'At least one option must be selected'),
        ThemeOption: yup.array().required('An option must be selected'),
        HackathonMode: yup.string().required('An option must be selected'),
    });
    const handleFileChange = (event) => {
        formik.setFieldValue('HackathonPoster', event.target.files[0]);
    };
    const formik = useFormik({
        initialValues: {
            HackathonName: '',
            HackathonMode: '',
            HackathonAddress: '',
            OrganisationName: '',
            Date: '',
            HackathonTimings: '',
            HackathonDescription: '',
            HackathonDetails: '',
            HackathonPrice: '',
            ThemeOption: [],
            HackathonPoster: '',
        },
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                formData.append('Name', values.HackathonName);
                formData.append('Mode', values.HackathonMode);
                formData.append('Address', values.HackathonAddress);
                formData.append('Themes', values.ThemeOption);
                formData.append('Price', values.HackathonPrice);
                formData.append('Date', values.Date);
                formData.append('Timings', values.HackathonTimings);
                formData.append('Organiser', values.OrganisationName);
                formData.append('Description', values.HackathonDescription);
                formData.append('Details', values.HackathonDetails);
                formData.append('Poster', values.HackathonPoster);
                const response = await fetch(
                    'https://hacker-camp.onrender.com/api/hackathons',
                    {
                        method: 'POST',
                        body: formData,
                    }
                );

                if (!response.ok) {
                    throw new Error('Error saving hackathon');
                }

                const savedHackathon = await response.json();
                toast.success('Form submitted successfully!');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } catch (error) {
                console.error(error);
            }
        },
        validateOnChange: false,
        validateOnBlur: false,
        validate: (values) => {
            const errors = {};
            // This is to validate fields which were created using createFields function
            for (let i in values) {
                let err = validateRequired(i, values[i]);
                if (err) errors[i] = err;
            }
            return errors;
        },
        // This is to validate field which are radio buttons and checkboxes
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
                        <span
                            className="text-red-500 font-medium
                        "
                        >
                            {formik.errors[field.name]}
                        </span>
                    )}
            </div>
        ));

    return (
        <div>
            <ToastContainer />
            <div className="h-screen ml-33% w-4/6  mt-1 flex flex-col items-center">
                <div className="h-2 w-594 bg-primary">&nbsp;</div>
                <SidebarForForms />
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
                        <div className="flex font-roboto justify-between   w-11/12 mb-4">
                            <div>
                                <label
                                    htmlFor="HackathonPrice"
                                    className="font-semibold text-base mb-4"
                                >
                                    Hackathon Price
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="radio"
                                        name="HackathonPrice"
                                        value="Free"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="Free">Free</label>
                                </div>
                                <div className="flex gap-2 font-roboto">
                                    <input
                                        type="radio"
                                        name="HackathonPrice"
                                        value="Paid"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="Paid">Paid</label>
                                </div>
                                {formik.errors.HackathonPrice ? (
                                    <span className="text-red-500">
                                        {formik.errors.HackathonPrice}
                                    </span>
                                ) : null}
                            </div>

                            <div className="flex flex-col pr-16 relative">
                                <label
                                    htmlFor="HackathonPoster"
                                    className="font-semibold text-base mb-2"
                                >
                                    Hackathon Poster
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    name="HackathonPoster"
                                    className="bg-blue-200 w-72 px-2 py-1 rounded border-2 border-whitegray"
                                />
                                {formik.errors.HackathonPoster ? (
                                    <span className="text-red-500">
                                        {formik.errors.HackathonPoster}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex gap-8 font-roboto w-11/12 mb-4">
                            <div>
                                <label
                                    htmlFor="ThemeOption"
                                    className="font-semibold text-base font-roboto flex"
                                >
                                    Hackathon Themes
                                </label>
                                <div className="flex gap-4">
                                    <div>
                                        <div className="flex gap-2">
                                            <input
                                                type="checkbox"
                                                id="ml"
                                                name="ThemeOption"
                                                value="ai"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <label htmlFor="ml">ML</label>
                                        </div>
                                        <div className="flex gap-2 font-roboto">
                                            <input
                                                type="checkbox"
                                                id="ai"
                                                name="ThemeOption"
                                                value="ai"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <label htmlFor="ai">AI</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-2 font-roboto">
                                            <input
                                                type="checkbox"
                                                id="blockchain"
                                                name="ThemeOption"
                                                value="blockchain"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <label htmlFor="blockchain">
                                                Blockchain
                                            </label>
                                        </div>
                                        <div className="flex gap-2 font-roboto">
                                            <input
                                                type="checkbox"
                                                id="web3.0"
                                                name="ThemeOption"
                                                value="web3.0"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <label htmlFor="web3.0">
                                                Web3.0
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {formik.errors.ThemeOption ? (
                                    <span className="text-red-500">
                                        {formik.errors.ThemeOption}
                                    </span>
                                ) : null}
                            </div>
                            <div>
                                <label
                                    htmlFor="hackathonPrice"
                                    className="font-semibold text-base mb-4"
                                >
                                    Hackathon Entry
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="radio"
                                        name="HackathonMode"
                                        value="Offline"
                                        onChange={(e) => {
                                            formik.handleChange(e);
                                            formik.setFieldValue(
                                                'HackathonAddress',
                                                ''
                                            );
                                        }}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="Offline">Offline</label>
                                </div>
                                <div className="flex gap-2 font-roboto">
                                    <input
                                        type="radio"
                                        name="HackathonMode"
                                        value="Online"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="Online">Online</label>
                                </div>
                                {formik.errors.HackathonMode ? (
                                    <span className="text-red-500">
                                        {formik.errors.HackathonMode}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex w-11/12 flex-col mb-4 justify-center">
                            <label
                                htmlFor="Hackathon Address"
                                className="font-semibold text-base mb-2"
                            >
                                Hackathon Address
                            </label>
                            <input
                                type="text"
                                name="HackathonAddress"
                                placeholder="Enter you address"
                                value={
                                    formik.values.HackathonMode === 'Online'
                                        ? (formik.values.HackathonAddress =
                                              'Online Event')
                                        : formik.values.HackathonAddress
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled={
                                    formik.values.HackathonMode == 'Online'
                                }
                                className="h-12 border border-whitegray pl-6 rounded placeholder:text-sm bg-graywhite focus:outline-blue-300"
                            ></input>
                            {formik.errors.HackathonAddress ? (
                                <span className="text-red-500">
                                    {formik.errors.HackathonAddress}
                                </span>
                            ) : null}
                        </div>
                        <div className="flex w-11/12 justify-center">
                            <div className="font-roboto w-3/6 flex flex-col  mb-4">
                                <label
                                    htmlFor="Hackathon Date"
                                    className="font-semibold text-base mb-2"
                                >
                                    Hackathon date
                                </label>
                                <DatePicker
                                    name="Date"
                                    selected={formik.values.Date}
                                    onChange={(value) => {
                                        formik.setFieldValue('Date', value);
                                    }}
                                    onSelect={(value) => {
                                        formik.setFieldValue('Date', value);
                                    }}
                                    placeholderText="Enter the date"
                                    className="h-12 border border-whitegray w-9/12 pl-6 rounded placeholder:text-sm bg-graywhite focus:outline-blue-300"
                                />
                                {formik.errors.Date ? (
                                    <span className="text-red-500">
                                        {formik.errors.Date}
                                    </span>
                                ) : null}
                            </div>
                            <div className="font-roboto flex flex-col w-3/6 mb-4">
                                <label
                                    htmlFor="Hackathon Date"
                                    className="font-semibold text-base mb-2"
                                >
                                    Hackathon Timings
                                </label>
                                <DatePicker
                                    selected={formik.values.HackathonTimings}
                                    onChange={(value) => {
                                        formik.setFieldValue(
                                            'HackathonTimings',
                                            value
                                        );
                                    }}
                                    placeholderText="Enter the time"
                                    onSelect={(value) => {
                                        formik.setFieldValue(
                                            'HackathonTimings',
                                            value
                                        );
                                    }}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    className="h-12 border border-whitegray w-9/12 pl-6 rounded placeholder:text-sm bg-graywhite focus:outline-blue-300"
                                />
                                {formik.errors.HackathonTimings ? (
                                    <span className="text-red-500">
                                        {formik.errors.HackathonTimings}
                                    </span>
                                ) : null}
                            </div>
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
                                    {formik.errors.HackathonDescription}
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
