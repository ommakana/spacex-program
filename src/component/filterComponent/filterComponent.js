import React, { memo } from "react";

import { launchYear } from "../../launchYearsStubData";
import { LAUNCH_YEAR, LAND_SUCCESS, LAUNCH_SUCCESS } from "../../constants";

import './filterComponent.css';

export const FilterComponent = memo(({ handleFilter }) => {

    // const [yearLaunch, setYearLaunch] = useState(0);
    console.log("hi");
    function activateFilter(event, index) {
        console.log(index);
        // setYearLaunch(index);
        handleFilter(event);
    }
    return (<>

<p className="filter-header">Launch Year</p>

        <div className="filter-button-container">
            {launchYear.map((item, index) => <button onClick={(event, index) => activateFilter(event, index)}
                className="filter-button" value={item}
                name={LAUNCH_YEAR} key={index}>{item}
            </button>)}
        </div>

        <p className="filter-header">Successful Launch</p>

        <div className="filter-button-container">
            {booleanButton(LAUNCH_SUCCESS, handleFilter)}
        </div>

        <p className="filter-header">Successful Landing</p>
        
        <div className="filter-button-container">
            {booleanButton(LAND_SUCCESS, handleFilter)}
        </div>
    </>
    )
});

function booleanButton(name, handleFilter) {
    return (<>
        <button name={name} onClick={handleFilter} value="true">True</button>
        <button name={name} onClick={handleFilter} value="false">False</button>
    </>
    )
}
