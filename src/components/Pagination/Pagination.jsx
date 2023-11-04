import { memo } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/pagination.scss'
import Button from "../Button/Button";
const Pagination = memo(({ shows, setPageNumber, pageNumber }) => {
    const navigate = useNavigate()
    let numOfPages = []
    let pages = Math.ceil(shows.length / 18)
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }
    return (
        <div className='pagination' >
            {numOfPages.map((num) =>
                <div key={num} className={`pagination__number  ${pageNumber === num ? 'active' : ''}`} >
                    <Button
                        variant="pagination__button"
                        onClick={() => {
                            if (num === pageNumber) return
                            navigate(`/shows/${Number(num)}`);
                            setPageNumber(num);
                        }}
                    >
                        {num}
                    </Button>
                </div>
            )}
        </div>
    );
});

export default Pagination;