import { connect } from 'react-redux';
import { actionSetActivity } from '../actions';

const PlayButton = props => (
    <>
        <button onClick={props.handleClick}>
            Playing
        </button>
    </>
)

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionSetActivity('playing'));
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayButton);