import React, { useEffect, useState } from "react";

import TargetShareData from "../../store/TargetShareData";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./TargetShare.module.css";

const seasons = [];
let weeks = [];
const curYear = new Date().getFullYear();

for (let i = 2000; i < curYear; i++) {
    seasons.push(i);
}

export default function TargetShare() {
    const [targetShareData, setTargetShareData] = useState();
    const [year, setYear] = useState();
    const [week, setWeek] = useState();

    const selectYearHandler = (e) => {
        setTargetShareData(null);
        setWeek(null);

        weeks = [];
        let selectedWeeks = 17;

        if (e.target.value > 2020) {
            selectedWeeks = 18;
        }

        for (let i = 1; i <= selectedWeeks; i++) {
            weeks.push(i);
        }

        setYear(e.target.value);
    };

    const selectWeekHandler = (e) => {
        setTargetShareData(null);
        setWeek(e.target.value);
    };

    useEffect(() => {
        async function getData() {
            if (isNaN(year)) {
                return;
            }
            const data = await TargetShareData(year, week);
            setTargetShareData(data);
        }
        getData();
    }, [year, week]);

    return (
        <section className={classes.targetShareData}>
            <h2 className={classes.targetShareHeading}>
                Analytics lead to Champships
            </h2>
            <h4 className={classes.targetShareSubheading}>
                Top 40 Players by Target Share
            </h4>
            <ul className={classes.targetShareDescription}>
                <li className={classes.targetShareDescriptionText}>
                    What is Target Share? How does it help you determine which
                    players to draft? Or what player is the best to target in a
                    trade? At Backyard Fantasy-Football we do not just crunch
                    the numbers, but also explain the purpose of the data. Data
                    without understanding will not help you succeed, and that is
                    what a lot of other sites do. They give you tons of data
                    without any explation. Here is an example of what Backyard
                    Fantasy-Football can do for you!
                </li>
                <li className={classes.targetShareDescriptionText}>
                    <strong>Target Share- </strong>measures the percentage of
                    all passing attempts directed at a particular player. This
                    is a key piece of data for fantasy owners, as it shows the
                    expected usage of a player. Players with a higher target
                    share will generally produce more points that those with a
                    lower percentage.
                </li>
                <li className={classes.targetShareDescriptionLi}>
                    <strong>Team Pass Attmept- Season- </strong> Number of pass
                    attempts from a team. Having a player with a high target
                    share is definetly a benefit, however, a player that has a
                    slightly lower target share may be more vaulable if their
                    offense makes a significantly larger number of pass attempts
                    per game.
                </li>
                <li className={classes.targetShareDescriptionLi}>
                    <strong>Player Pass Attmept- Season- </strong> Number of
                    pass attempts that target the listed players
                </li>
            </ul>
            <form className="selectors">
                <div className="selectors__dropdown">
                    <label htmlFor="season">Season:</label>
                    <select
                        name="season"
                        id="season"
                        onChange={selectYearHandler}
                    >
                        <option value="">--Please Select a Year--</option>
                        {seasons.map((season) => {
                            return <option value={season}>{season}</option>;
                        })}
                    </select>
                </div>
                {year && (
                    <div className="selectors__dropdown">
                        <label htmlFor="week">Week:</label>
                        <select
                            name="week"
                            id="week"
                            onChange={selectWeekHandler}
                        >
                            <option value="">--Please Select a Week--</option>
                            {weeks.map((week) => {
                                return (
                                    <option value={week}>Week {week}</option>
                                );
                            })}
                        </select>
                    </div>
                )}
            </form>

            {}
            {year && !targetShareData && <LoadingSpinner />}
            {!week && year && targetShareData && (
                <table className={classes.table}>
                    <tr className={classes.odd}>
                        <th className={classes.th}>Player Name</th>
                        <th className={classes.th}>Team</th>
                        <th className={classes.th}>
                            Player Pass Attempt- Season
                        </th>
                        <th className={classes.th}>
                            Team Pass Attmept- Season
                        </th>
                        <th className={classes.th}>Target Share</th>
                    </tr>
                    {targetShareData.map((data, index) => {
                        return (
                            <tr
                                className={
                                    index % 2 === 0 ? classes.even : classes.odd
                                }
                            >
                                <td>{data["Player Name"]}</td>
                                <td>{data["Team"]}</td>
                                <td>{data["Player Pass Attempt- Season"]}</td>
                                <td>{data["Team Pass Attmept- Season"]}</td>
                                <td>{data["Target Share"]}%</td>
                            </tr>
                        );
                    })}
                </table>
            )}
            {week && year && targetShareData && (
                <table className={classes.table}>
                    <tr className={classes.odd}>
                        <th className={classes.th}>Player Name</th>
                        <th className={classes.th}>Team</th>
                        <th className={classes.th}>
                            Player Pass Attempt- Week {week}
                        </th>
                        <th className={classes.th}>
                            Team Pass Attmept- Week {week}
                        </th>
                        <th className={classes.th}>Target Share</th>
                    </tr>
                    {targetShareData.map((data, index) => {
                        return (
                            <tr
                                className={
                                    index % 2 === 0 ? classes.even : classes.odd
                                }
                            >
                                <td>{data["Player Name"]}</td>
                                <td>{data["Team"]}</td>
                                <td>{data["Player-Pass Attempt"]}</td>
                                <td>{data["Team-Pass Attmept"]}</td>
                                <td>{data["Target Share"]}%</td>
                            </tr>
                        );
                    })}
                </table>
            )}
        </section>
    );
}
