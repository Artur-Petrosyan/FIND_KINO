const Table = ({ showInfo }) => {
    return (
        <table className="table">
            <thead className="table__thead">
                <tr>
                    <th>Number</th>
                    <th>Data</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody className="table__tbody">
                {
                    showInfo.map(({ id, name,number, rating }) => (
                        <tr key={id}>
                            <th>{number}</th>
                            <th>Data</th>
                            <th>{name}</th>
                            <th>{rating.average}</th>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    );
};

export default Table;