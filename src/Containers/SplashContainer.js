import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styles from './Styles/SplashContainerStyles'
import { View } from '../Components';

class Splash extends Component {
    static defaultProps = { }
    static propTypes = { }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('TabMain');
        }, 1000);
    }

    render() {
        return (
            <View
                style={styles.containers}
            />
        );
    }
}

const mapStateToProps = (state) => { return {} };

const mapDispatchToProps = (dispatch) => { return {} };

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
