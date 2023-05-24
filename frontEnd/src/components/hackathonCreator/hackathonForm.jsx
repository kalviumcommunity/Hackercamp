import React from 'react';
import { TextField, Autocomplete,InputLabel, Input, Button } from '@mui/material';
import SidebarForForms from './sidebarForForms';
import {
    FormGroup,
    FormControl,
    FormControlLabel,
    Checkbox,
} from '@mui/material';

function HackathonForm() {
    const options = [
        { label: 'Artificial Intelligence' },
        { label: 'Machine Learning' },
        { label: 'Blockchain' },
        { label: 'quantum computing' },
        { label: 'AR/VR' },
    ];
    return (
        <>
            <SidebarForForms />
            <main className="ml-33% pt-4">
                <h1 className="text-center text-22.5 font-semibold mb-4">
                    Hackathon Registration Form
                </h1>
                <form className=" flex flex-col w-6/12 p-4 ml-72 gap-4 border-whitegray border-2">
                    <TextField
                        id="Hackathon-Name"
                        label="Hackathon Name"
                        variant="outlined"
                        InputProps={{
                            className: 'border-whitegray',
                        }}
                    />
                    <Autocomplete
                        multiple
                        freeSolo
                        id="Hackathon-Themes"
                        options={options}
                        renderInput={(params) => (
                            <TextField {...params} label="Hackathon Themes" />
                        )}
                    />
                    <TextField
                        id="date"
                        label="Hackathon Date"
                        type="date"
                        // className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="Hackathon-Address"
                        label="Hackathon Address"
                        variant="outlined"
                        InputProps={{
                            className: 'border-whitegray',
                        }}
                    />
                    <TextField
                        id="Organiser-Name"
                        label="Organiser Name"
                        variant="outlined"
                        InputProps={{
                            className: 'border-whitegray',
                        }}
                    />
                    <div className="flex gap-8">
                        <FormGroup>
                            <label
                                htmlFor="Hackathon Mode"
                                className="font-semibold text-basis"
                            >
                                Hackathon Mode
                            </label>
                            <div>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="online"
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="offline"
                                />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <label
                                htmlFor="Hackathon Price"
                                className="font-semibold text-basis"
                            >
                                Hackathon Price
                            </label>
                            <div>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Free"
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Paid"
                                />
                            </div>
                        </FormGroup>
                    </div>
                    <FormControl>
                        <InputLabel htmlFor="Hackathon-Poster">
                            Hackathon Poster
                        </InputLabel>
                        <Input
                            id="file-upload"
                            type="file"
                            // onChange={handleFileChange}
                            inputProps={{ accept: 'image/*' }} // Specify accepted file types (optional)
                        />
                    </FormControl>
                </form>
            </main>
        </>
    );
}

export default HackathonForm;
