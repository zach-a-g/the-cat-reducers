import Output from '../containers/OutputContainer';
import PlayButton from '../containers/PlayContainer';
import NapButton from '../containers/NapContainer';
import EatButton from '../containers/EatContainer'

const CatActivities = () => {
    return (
        <div>
            <Output />
            <NapButton />
            <EatButton />
            <PlayButton />
        </div>
    );
}

export default CatActivities;