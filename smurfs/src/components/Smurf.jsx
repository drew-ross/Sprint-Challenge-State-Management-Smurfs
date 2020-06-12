import React from 'react';

const Smurf = ({ smurf }) => {

    const { name, age, height } = smurf;

    return (
        <div className="smurf">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    );
};

export default Smurf;