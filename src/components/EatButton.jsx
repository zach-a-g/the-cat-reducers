import { connect } from 'react-redux';
import { actionSetActivity } from '../actions';

const EatButton = props => (
    <>
        <button onClick={props.handleClick}>
            Eating
        </button>
    </>
)

function mapDispatchToProps(dispatch) {
    return {
        //Translate redux dispatch into a React prop
        handleClick: () => {
            dispatch(actionSetActivity('eating'));
        }
    }
}

export default connect(null, mapDispatchToProps)(EatButton)