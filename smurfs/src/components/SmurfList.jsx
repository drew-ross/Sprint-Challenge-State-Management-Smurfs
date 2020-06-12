import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/apiActions';
import Smurf from './Smurf';

const SmurfList = ({ smurfs, message, getData }) => {

    useEffect(() => {
        getData();
    }, []);

    return (
        <section>
            <div className="smurf-list">
                {smurfs.length > 0 &&
                    smurfs.map(smurf => (
                        <Smurf smurf={smurf} />
                    ))}
            </div>
            <div className="api-message">
                <p>{message}</p>
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        message: state.message
    };
};

export default connect(mapStateToProps, { getData })(SmurfList);