import { memo, useEffect, useMemo } from 'react';
import 'src/styles/table.scss'
import groupBySeasons from "src/utils/filteredTheShowsSeason";
import { useDispatch } from 'react-redux';
import { setFiltredBySeason } from 'src/redux/actions/setFIltredBySeason';

const Table = memo(({ showInfo }) => {
    const dispatch = useDispatch()
    const showInfoToSeasons = useMemo(() => groupBySeasons(showInfo.episodes), [showInfo.episodes])
    useEffect(() => {
        dispatch(setFiltredBySeason(showInfoToSeasons))
    }, [showInfoToSeasons,dispatch])
    return (
        showInfoToSeasons.map((item, index) => {
            return (
                <table className="table" key={index}>

                    <thead className="table__thead">
                        <tr>
                            <th>Number</th>
                            <th>Data</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody className="table__tbody" >
                        {item.map(({ id, name, number, rating, airdate }) => (
                            <tr key={number}>
                                <th>{number}</th>
                                <th>{airdate}</th>
                                <th>{name}</th>
                                <th>{rating.average}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        })

    );
});

export default Table;