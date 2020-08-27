import React from "react";
import './spaceTileComponent.css';

function SpaceTileComponent({ item }) {
    return (
        <div className="spacex_tile">
            <img alt={item.mission_name} src={item.links.mission_patch_small} />
            <div className="tile_description" tabIndex="0">
                <span className="mission_name">{item.mission_name}</span> <span>#{item.flight_number}</span>
                <br />
                <p className="title mission_id">Mission Ids:</p>
                {<ul>
                    {item.mission_id.map((ids, index) => <li key={index}>{ids}</li>)}
                </ul>}

                <div className="launch_description">
                    <label className="title">Launch year:</label> <p>{item.launch_year}</p>
                    <br/>
                    <br/>

                    <label className="title">Successful Launch:</label> <p>{item.launch_success ? "Success" : "Fail"}</p>
                    <br/>
                    <br/>
                    <br/>

                    <label className="title">Successful Landing:</label> <p>{item.rocket.first_stage.cores[0].land_success ? "Success" : "Fail"}</p>
                </div>
            </div>
        </div>
    )
}

export default SpaceTileComponent;