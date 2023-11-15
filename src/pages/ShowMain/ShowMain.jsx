import { useSelector } from "react-redux";
import { singleShowSelector } from "src/redux/selectors/singleShow";
import Card from "components/Card/Card";

const ShowMain = () => {
    const singleShow = useSelector(singleShowSelector)  
    return (
        <div>
            {singleShow.map(({ id, name, image, summary }) => (
                <div key={id} className='content'>
                    <div className='signle-show__name'>
                        <h1>{name}</h1>
                    </div>
                    <div className='single-show' >

                        <div className='single-show__card'>
                            <Card
                                key={id}
                                name={name}
                                image={image?.original}
                            />
                        </div>
                        <div className='single-show__text'><p>
                            {summary}
                        </p></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowMain;