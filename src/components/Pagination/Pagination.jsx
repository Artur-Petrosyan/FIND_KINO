import Button from "../Button/Button";
import toLeft from '../../assets/icons/toLeftArrow.svg'
import toRight from '../../assets/icons/toRightArrow.svg'

import { memo } from "react";
import { useNavigate } from "react-router-dom";

import '../../styles/pagination.scss'

const Pagination = memo(({ data, setPageNumber, pageNumber, pageName }) => {
    const navigate = useNavigate()
    let numOfPages = []

    let pages = Math.ceil(data.length / 25)
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }
    return (
        <div className='pagination' >
            <div onClick={() => {
                if (pageNumber >= 2) {
                    navigate(`/${pageName}/${Number(pageNumber - 1)}`);
                    setPageNumber(Number(pageNumber) - 1);
                }
            }}>
                <img className="pagination__arrow" src={toLeft} alt="left" />
            </div>
            {numOfPages.map((num) =>
                <div key={num} className={`pagination__number  ${pageNumber === num ? 'active' : ''}`} >

                    <Button
                        variant="pagination__button"
                        onClick={() => {
                            if (num === pageNumber) return
                            navigate(`/${pageName}/${Number(num)}`);
                            setPageNumber(num);
                        }}
                    >
                        {num}
                    </Button>

                </div>

            )}
            <div onClick={() => {
                if (pageNumber < numOfPages.length) {
                    console.log(pageNumber);
                    navigate(`/${pageName}/${Number(pageNumber + 1)}`);
                    setPageNumber(Number(pageNumber) + 1);
                }

            }}>
                <img className="pagination__arrow" src={toRight} alt="right" />
            </div>
        </div>
    );
});

export default Pagination;