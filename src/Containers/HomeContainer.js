import { connect } from 'react-redux';
import HomeView from './View/HomeView';
import { AppCreators } from '../Redux/AppRedux'
const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        putNotify: () => dispatch(AppCreators.putNotify('title')),
        showDialog: () => dispatch(AppCreators.showDialog('title', 'message')),
        hideDialog: () => dispatch(AppCreators.hideDialog())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
