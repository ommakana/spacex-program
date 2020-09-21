import React, { useEffect } from "react";
import './spaceTileComponent.css';

const SpaceTileComponent = ({ item }) => {
    const targetRef = React.createRef();
    const callback = entries => {
        entries.forEach(element => {
            if (element.isIntersecting) {
                const imageSrc = element.target.getAttribute("data-src");
                element.target.setAttribute("src", imageSrc);
                observer.unobserve(element.target);
            }
        });
      };
  
    const observer = new IntersectionObserver(callback, {
    threshold: 1
    });
    
    useEffect(() => {
        observer.observe(targetRef.current);
        return () => observer.disconnect();
    });

    return (
        <div tabIndex="0" className="spacex_tile">
            <img width="100" height="100" alt={item.mission_name} data-src={item.links.mission_patch_small} ref={targetRef} />
            <div className="tile_description">
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
};

export default SpaceTileComponent;