import React, { memo } from "react";

import { launchYear } from "../../launchYearsStubData";
import { LAUNCH_YEAR, LAND_SUCCESS, LAUNCH_SUCCESS } from "../../constants";

import './filterComponent.css';

export const FilterComponent = memo(({ handleFilter }) => {

    return (<>
        <h2 className="filter-header-text">Filters</h2>

        <p className="filter-header">Launch Year</p>

        <div className="filter-button-container">
            {launchYear.map((item, index) => <button onClick={handleFilter}
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
        <button className="filter-button" name={name} onClick={handleFilter} value="true">True</button>
        <button className="filter-button" name={name} onClick={handleFilter} value="false">False</button>
    </>
    )
}
