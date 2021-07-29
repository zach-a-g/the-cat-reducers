
import { connect } from "react-redux";
import { actionSetName } from "../actions";
import { useState } from 'react';

const NameForm = (props) => {
    const [catName, setCatName] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleClick(catName)
        setCatName('')
    }

    return (
    <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                <input
                    type="text"
                    value={catName}
                    placeholder='Enter a new name'
                    onChange={(e)=> setCatName(e.target.value)}
                    />
            </label>
            <button type="submit">
                Add name
            </button>
        </form>
    </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (catName) => {
            dispatch(actionSetName(catName));
        }
    }
}

export default connect(null, mapDispatchToProps)(NameForm);