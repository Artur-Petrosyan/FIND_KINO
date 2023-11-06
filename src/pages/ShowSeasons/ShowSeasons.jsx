import { useSelector } from "react-redux";

import { singleShowInfoSelector } from "../../redux/selectors/singleShowInfo";
import { useParams } from "react-router-dom";

const ShowSeasons = () => {
    const showInfo = useSelector(singleShowInfoSelector)
    const { info } = useParams()
    return (
        <div>
            {showInfo[info].map(({ id, image, number }) => <div key={id} style={{ display: 'flex' }}>
                <div>
                    <img src={image?.medium} alt="" />
                </div>
                <div>
                    <h1>
                        Season {number}
                    </h1>
                </div>
            </div>)}
        </div>
    );
};

export default ShowSeasons;