import React, { useState, useEffect } from 'react';

const initialFormValues = {
    name: '',
    age: 0,
    height: 0,
};

const Form = () => {

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form>
                <label>Name: 
                    <input
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>Age: 
                    <input
                        name='age'
                        type='number'
                        value={formValues.age}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>Height
                    <input
                        name='height'
                        type='number'
                        value={formValues.height}
                        onChange={handleChange}
                    />cm
                </label>
            </form>
        </div>
    );
};

export default Form;