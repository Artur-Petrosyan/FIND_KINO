import { useSelector } from "react-redux";
import Table from "src/components//Table/Table";
import { singleShowInfoSelector } from "src/redux/selectors/singleShowInfo";

const ShowEpisodes = () => {
    const showInfo = useSelector(singleShowInfoSelector)
    const singleShowInfoSeasons = useSelector(state => state.singleShowInfoSeasons)

    return (
        <div>
            <Table showInfo={showInfo} seasons={singleShowInfoSeasons} />
        </div>
    );
};

export default ShowEpisodes;