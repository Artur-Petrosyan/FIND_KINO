import { useParams } from "react-router-dom";
import '../../styles/table.scss'
import { useSelector } from "react-redux";
import { useMemo } from "react";
const Table = ({ showInfo }) => {
    const seasons = useSelector((state) => state.showInfo.seasons)
    const { info } = useParams()
    const showInfoToSeasons = useMemo(() => {
        let showToSesons = [];
        showToSesons = seasons.map((season) => {
            return showInfo[info].filter((item) => item.season === season.number)
        })
        return showToSesons
    }, [info, seasons, showInfo])

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
};

export default Table;