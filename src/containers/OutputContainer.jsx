import { connect } from 'react-redux';

const Output =props => (
    <div>
        <h1>
            The cat is {props.activity}!
        </h1>
    </div>
);
//The provider we wrapped our app around makes the state available. 
function mapStateToProps(state) {
    return {
        activity: state.activity
    }
}
// Wrapping our dumb component with a connection to the redux store. Making this a 'connected component'.
// Now you can have access to all the cool stuff in the store!!
export default connect(mapStateToProps)(Output);