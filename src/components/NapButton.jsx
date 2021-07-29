import { connect } from "react-redux";
import { actionSetActivity } from "../actions";

const NapButton = props => (
    <>
        <button onClick={props.handleClick}>
            Napping
        </button>
    </>
)

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionSetActivity('napping'));
        }
    }
}

export default connect(null, mapDispatchToProps)(NapButton);