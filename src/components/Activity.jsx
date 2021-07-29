import EatButton from "./EatButton";
import PlayButton from "./PlayButton";
import NapButton from "./NapButton";
import Output from "./Output";
import NameForm from "./NameForm";

const Activity = (props) => {
    return (
        <>
            <h1>Version 2</h1>
            <Output/>
            <NameForm/>
            <EatButton/>
            <PlayButton/>
            <NapButton/>
        </>
    )

}

export default Activity;