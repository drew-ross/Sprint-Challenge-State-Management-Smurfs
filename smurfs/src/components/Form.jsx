import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postData } from '../actions/apiActions';

const initialFormValues = {
    name: '',
    age: 0,
    height: 0,
};

const Form = ({ postData }) => {

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const post = {
            ...formValues,
            height: `${formValues.height}cm`
        }
        postData(post);
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Age:
                    <input
                        name='age'
                        type='number'
                        value={formValues.age}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Height
                    <input
                        name='height'
                        type='number'
                        value={formValues.height}
                        onChange={handleChange}
                    />cm
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default connect(null, { postData })(Form);