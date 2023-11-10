import { useSelector } from "react-redux";
import { singleShowInfoSelector } from "../../redux/selectors/singleShowInfo";
import { useParams } from "react-router-dom";

const ShowCast = () => {
    const showInfo = useSelector(singleShowInfoSelector)
    const { info } = useParams()
    return (
        <div>
            {showInfo[info].map(({ person, character }) => (
                <div key={character.id} style={{ display: 'flex' }}>
                    <div>
                        <img src={person.image?.medium} alt="" />
                    </div>
                    <div>
                        <h1 >
                            {person.name} as {character.name}
                        </h1>
                    </div>
                </div>
            )
            )}
        </div>
    );
};

export default ShowCast;