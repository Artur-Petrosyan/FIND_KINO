import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import 'src/styles/pagination.scss'

const _Pagination = memo(({ data, setPageNumber, pageNumber, pageName }) => {
    const navigate = useNavigate()
    let numOfPages = []
    let pages = Math.ceil(data.length / 25)
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }


    return (
        <Pagination
            current={pageNumber}
            defaultCurrent={1}
            pageSize={40}
            size="large"
            className="pagination"
            total={data.length}
            showQuickJumper={true}
            onChange={(num) => {
                navigate(`/${pageName}/${Number(num)}`)
                setPageNumber(num)
            }}
            style={{itemActiveBg : 'black'}}
        />

    )
});

export default _Pagination;