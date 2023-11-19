import {useSelector} from "react-redux";
import {singleShowSelector} from "src/redux/selectors/singleShow";
import {ShowMainPure} from "./index";

const ShowMain = () => {
    const singleShow = useSelector(singleShowSelector)
    return <ShowMainPure
        singleShow={singleShow}
    />
};

export default ShowMain;