import { memo, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setFiltredBySeason } from 'src/redux/actions/setFIltredBySeason';
import 'src/styles/table.scss'
import {groupByKey} from "src/core/lib/groupByKey";

const Table = memo(({ showInfo }) => {
    const dispatch = useDispatch()
    const showInfoToSeasons = useMemo(() => groupByKey(showInfo.episodes), [showInfo.episodes])
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
                        {item.map(({ name, number, rating, airdate }) => (
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