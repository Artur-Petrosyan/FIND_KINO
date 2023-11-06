import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { singleShowInfoSelector } from "../../redux/selectors/singleShowInfo";

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