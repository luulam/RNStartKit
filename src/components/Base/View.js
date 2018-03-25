import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const ViewApp = (props) => {
    return <View {...props} />
}

ViewApp.propTypes = {
    disable: PropTypes.bool,
    disTouch: PropTypes.bool
};

ViewApp.defaultProps = {
    disable: false,
    disTouch: true,
};

export default ViewApp;
