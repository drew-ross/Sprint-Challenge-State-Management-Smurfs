import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/apiActions';


const SmurfList = ({ smurfs, getData }) => {

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {smurfs.length > 0 &&
                smurfs.map(smurf => (
                    <p>{smurf.name}</p>
                ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, { getData })(SmurfList);