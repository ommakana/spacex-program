import React from 'react';
import { render } from '@testing-library/react';
import SpaceTileComponent from "./spaceTileComponent";

test('renders spacex tile component with data', () => {
const item =  {
    "flight_number":18,
    "mission_name":"CRS-4",
    "mission_id":[
       "EE86F74"
    ],
    "launch_year":"2014",
    "launch_date_unix":1411278720,
    "launch_date_utc":"2014-09-21T05:52:00.000Z",
    "launch_date_local":"2014-09-21T01:52:00-04:00",
    "is_tentative":false,
    "tentative_max_precision":"hour",
    "tbd":false,
    "launch_window":0,
    "rocket":{
       "rocket_id":"falcon9",
       "rocket_name":"Falcon 9",
       "rocket_type":"v1.1",
       "first_stage":{
          "cores":[
             {
                "core_serial":"B1010",
                "flight":1,
                "block":1,
                "gridfins":false,
                "legs":false,
                "reused":false,
                "land_success":false,
                "landing_intent":true,
                "landing_type":"Ocean",
                "landing_vehicle":null
             }
          ]
       },
       "second_stage":{
          "block":1,
          "payloads":[
             {
                "payload_id":"CRS-4",
                "norad_id":[
                   40210
                ],
                "cap_serial":"C106",
                "reused":false,
                "customers":[
                   "NASA (CRS)"
                ],
                "nationality":"United States",
                "manufacturer":"SpaceX",
                "payload_type":"Dragon 1.1",
                "payload_mass_kg":2216,
                "payload_mass_lbs":4885,
                "orbit":"ISS",
                "orbit_params":{
                   "reference_system":"geocentric",
                   "regime":"low-earth",
                   "longitude":null,
                   "semi_major_axis_km":6657.288,
                   "eccentricity":0.0113888,
                   "periapsis_km":203.334,
                   "apoapsis_km":354.971,
                   "inclination_deg":51.6518,
                   "period_min":90.095,
                   "lifespan_years":null,
                   "epoch":"2014-09-21T05:48:51.000Z",
                   "mean_motion":15.98295763,
                   "raan":344.0345,
                   "arg_of_pericenter":46.2662,
                   "mean_anomaly":314.7708
                },
                "mass_returned_kg":1486,
                "mass_returned_lbs":3276,
                "flight_time_sec":2987160,
                "cargo_manifest":"https://www.nasa.gov/sites/default/files/files/SpaceX_CRS-4_Mission_Overview-1.pdf"
             }
          ]
       },
       "fairings":null
    },
    "ships":[
       "AMERICANISLANDER"
    ],
    "telemetry":{
       "flight_club":null
    },
    "launch_site":{
       "site_id":"ccafs_slc_40",
       "site_name":"CCAFS SLC 40",
       "site_name_long":"Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success":true,
    "links":{
       "mission_patch":"https://images2.imgbox.com/0d/e8/tfdeNslS_o.png",
       "mission_patch_small":"https://images2.imgbox.com/b4/28/cQwcs8qz_o.png",
       "reddit_campaign":null,
       "reddit_launch":"http://www.reddit.com/r/spacex/comments/2grxer",
       "reddit_recovery":null,
       "reddit_media":null,
       "presskit":"https://www.nasa.gov/sites/default/files/files/SpaceX_NASA_CRS-4_PressKit.pdf",
       "article_link":"https://www.nasa.gov/press/2014/september/nasa-cargo-launches-to-space-station-aboard-spacex-resupply-mission-0",
       "wikipedia":"https://en.wikipedia.org/wiki/SpaceX_CRS-4",
       "video_link":"https://www.youtube.com/watch?v=7YkCh7uOw1Y",
       "youtube_id":"7YkCh7uOw1Y",
       "flickr_images":[
          "https://farm8.staticflickr.com/7608/16661753958_9f61f777e7_o.jpg",
          "https://farm9.staticflickr.com/8593/16763199166_38ba2cafc8_o.jpg",
          "https://farm9.staticflickr.com/8655/16789074175_ba03989359_o.png",
          "https://farm9.staticflickr.com/8659/16166761954_ebc2a72b2a_o.jpg",
          "https://farm9.staticflickr.com/8620/16642025217_a6852b9499_o.jpg"
       ]
    },
    "details":null,
    "upcoming":false,
    "static_fire_date_utc":"2014-09-17T00:00:00.000Z",
    "static_fire_date_unix":1410912000,
    "timeline":{
       "webcast_liftoff":875,
       "go_for_prop_loading":-2280,
       "rp1_loading":-2100,
       "stage1_lox_loading":-2100,
       "stage2_lox_loading":-960,
       "engine_chill":-420,
       "prelaunch_checks":-60,
       "propellant_pressurization":-60,
       "go_for_launch":-45,
       "ignition":-3,
       "liftoff":0,
       "maxq":60,
       "meco":180,
       "stage_sep":180,
       "second_stage_ignition":180,
       "seco-1":540,
       "dragon_separation":600,
       "dragon_solar_deploy":720,
       "dragon_bay_door_deploy":8400
    },
    "crew":null
 };
  const { getByText } = render( <SpaceTileComponent item={item} />);
  const mission_name = getByText(/CRS-4/i);
  expect(mission_name).toBeInTheDocument();
});
