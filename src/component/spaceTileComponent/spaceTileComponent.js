import React from "react";
import './spaceTileComponent.scss';

function SpaceTileComponent({item}) {
    return (
        <div className="spacex_tile">
            <img alt={item.mission_name} src={item.links.mission_patch_small}/>
            <div className="tile_description">
            <span className="mission_name">{item.mission_name}</span> <span>#{item.flight_number}</span>
            <br/>
            <p className="title">Mission Ids:</p>
            {<ul>
                {item.mission_id.map((ids, index) => <li key={index}>{ids}</li>)}
            </ul>}

            <p className="title">Launch year:</p> <span>{item.launch_year}</span>
            <p className="title">Successful Launch:</p> <span>{item.launch_success ? "Success" : "Fail"}</span>
            <p className="title">Successful Landing:</p> <span>{item.rocket.first_stage.cores[0].land_success ? "Success" : "Fail"}</span>
            </div>
    </div>
    )
}

export default SpaceTileComponent;