import { connect } from 'react-redux';
import { actionEat } from '../actions';

const EatButton = (props) => (
    <button onClick={props.handleClick}>Eat</button>
)
//translation function: this one will translate Redux dispatch() into React props.
//Returns an object whose keys will be prop names that you can use in React. 
function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionEat());
        }
    }
}
// null is passed since we don't have mapStateToProps()
export default connect(null, mapDispatchToProps)(EatButton);