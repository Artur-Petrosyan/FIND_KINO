import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from 'antd'
const { Search } = Input


const InputSearch = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    return (
        <div className='header__search'>
            <Search
                placeholder="Find show"
                allowClear
                enterButton="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={() => navigate(`search?q=${searchQuery}`)}
                size="large"

            />
        </div>
    )
}

export default InputSearch