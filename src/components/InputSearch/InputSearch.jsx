import { createGetRequestSearch } from '../../api/http-api'
import { useState } from 'react'
import { Input } from 'antd'
const { Search } = Input


const InputSearch = () => {

    const [searchQuery, setSearchQuery] = useState('')


    return (
        <div className='header__search'>
            <Search
                placeholder="Find show"
                allowClear
                enterButton="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                size="large"

            />
        </div>
    )
}

export default InputSearch