export const ShowSeasonsPure = ({showInfo, info}) => (
    <div>
        {showInfo[info].map(({id, image, number}) => <div key={id} style={{display: 'flex'}}>
            <div>
                <img src={image?.medium} alt=""/>
            </div>
            <div>
                <h1>
                    Season {number}
                </h1>
            </div>
        </div>)}
    </div>
);