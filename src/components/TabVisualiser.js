import React from 'react';
import PropTypes from 'prop-types';
import MonospacedPreformattedText from './MonospacedPreformattedText';

const TabVisualiser = ({ tab, progress }) => {
    return (
        <div style={{ position: 'relative', left: '50px' }}>
            <MonospacedPreformattedText>{tab}</MonospacedPreformattedText>
        </div>
    );
};

TabVisualiser.propTypes = {
    tabContent: PropTypes.string,
    progress: PropTypes.number
};

export default TabVisualiser;