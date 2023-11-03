const Pagination = ({ showes, setPage }) => {

    let numOfPages = []
    let pages = Math.ceil(showes.length / 10)
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }

    return (
        <div className='pagination'>
            {numOfPages.map((num) =>
                <div key={num} className='pagination__number'>
                    <span onClick={() => setPage(num)}>
                        {num}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Pagination;