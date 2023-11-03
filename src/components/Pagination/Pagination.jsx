import { useNavigate } from "react-router-dom";

const Pagination = ({ shows,setPageNumber }) => {
    const navigate = useNavigate()
    let numOfPages = []
    let pages = Math.ceil(shows.length / 10)
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }
    return (
        <div className='pagination' style={{ display: 'flex', fontSize: 30 }}>
            {numOfPages.map((num) =>
                <div key={num} className='pagination__number' style={{ margin: 5, cursor: 'pointer' }}>
                    <span onClick={() => {
                        navigate(`/shows/${Number(num)}`)
                        setPageNumber(num)
                    }}>
                        {num}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Pagination;