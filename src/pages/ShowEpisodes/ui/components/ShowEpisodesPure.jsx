import Table from "src/components/Table/Table";

export const ShowEpisodesPure = ({showInfo, singleShowInfoSeasons}) => {
   return (
       <div>
           <Table showInfo={showInfo} seasons={singleShowInfoSeasons}/>
       </div>
   )
}

