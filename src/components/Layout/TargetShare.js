import React, { useEffect, useState } from "react";

import TargetShareData from "../../store/TargetShareData";
import LoadingSpinner from "../UI/LoadingSpinner";

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
        <section className="target-share-data">
            <h2 className="target_share_heading">
                Analytics lead to Champships
            </h2>
            <h4 className="target_share_heading__4">
                Top 40 Players by Target Share
            </h4>
            <ul className="target-share-description">
                <li className="target-share-description__text">
                    What is Target Share? How does it help you determine which
                    players to draft? Or what player is the best to target in a
                    trade? At Backyard Fantasy-Football we do not just crunch
                    the numbers, but also explain the purpose of the data. Data
                    without understanding will not help you succeed, and that is
                    what a lot of other sites do. They give you tons of data
                    without any explation. Here is an example of what Backyard
                    Fantasy-Football can do for you!
                </li>
                <li className="target-share-description__li">
                    <strong>Target Share- </strong>measures the percentage of
                    all passing attempts directed at a particular player. This
                    is a key piece of data for fantasy owners, as it shows the
                    expected usage of a player. Players with a higher target
                    share will generally produce more points that those with a
                    lower percentage.
                </li>
                <li className="target-share-description__li">
                    <strong>Team Pass Attmept- Season- </strong> Number of pass
                    attempts from a team. Having a player with a high target
                    share is definetly a benefit, however, a player that has a
                    slightly lower target share may be more vaulable if their
                    offense makes a significantly larger number of pass attempts
                    per game.
                </li>
                <li className="target-share-description__li">
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
                <table>
                    <tr className="odd">
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Player Pass Attempt- Season</th>
                        <th>Team Pass Attmept- Season</th>
                        <th>Target Share</th>
                    </tr>
                    {targetShareData.map((data, index) => {
                        let style;
                        if (index % 2 === 0) {
                            style = "even";
                        } else {
                            style = "odd";
                        }

                        return (
                            <tr className={style}>
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
                <table>
                    <tr className="odd">
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Player Pass Attempt- Week {week}</th>
                        <th>Team Pass Attmept- Week {week}</th>
                        <th>Target Share</th>
                    </tr>
                    {targetShareData.map((data, index) => {
                        let style;
                        if (index % 2 === 0) {
                            style = "even";
                        } else {
                            style = "odd";
                        }

                        return (
                            <tr className={style}>
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
