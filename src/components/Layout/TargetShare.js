import React, { useEffect, useState } from "react";

import TargetShareData from "../../store/TargetShareData";
import DataCard from "../UI/DataCard";
import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";
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
            <Card>
                <h2 className={classes.targetShareHeading}>
                    Using Data to get an edge
                </h2>
                <p className={classes.targetShareSubheading}>
                    Take a look at how anaylzing target share can help you
                    compare players
                </p>
                <div className={classes.targetShareDescription}>
                    <li className={classes.targetShareDescriptionText}>
                        <strong>Target Share- </strong>measures the percentage
                        of all passing attempts directed at a particular player.
                        This is a key piece of data for fantasy owners, as it
                        shows the expected usage of a player. Players with a
                        higher target share will generally produce more points
                        that those with a lower percentage.
                    </li>
                    <li className={classes.targetShareDescriptionLi}>
                        <strong>Team Pass Attmept- Season- </strong> Number of
                        pass attempts from a team. Having a player with a high
                        target share is definetly a benefit, however, a player
                        that has a slightly lower target share may be more
                        vaulable if their offense makes a significantly larger
                        number of pass attempts per game.
                    </li>
                    <li className={classes.targetShareDescriptionLi}>
                        <strong>Player Pass Attmept- Season- </strong> Number of
                        pass attempts that target the listed players
                    </li>
                </div>
            </Card>
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
                <div className={classes.data}>
                    {targetShareData.map((data, index) => {
                        console.log(data);
                        return (
                            <DataCard
                                name={data["Player Name"]}
                                team={data["Team"]}
                                playerPassAtt={
                                    data["Player Pass Attempt- Season"]
                                }
                                teamPassAtt={data["Team Pass Attmept- Season"]}
                                targetShare={data["Target Share"]}
                                ranking={index + 1}
                                season=" - Season"
                            />
                        );
                    })}
                </div>
            )}
            {week && year && targetShareData && (
                <div className={classes.data}>
                    {targetShareData.map((data, index) => {
                        console.log(data);
                        return (
                            <DataCard
                                name={data["Player Name"]}
                                team={data["Team"]}
                                playerPassAtt={data["Player-Pass Attempt"]}
                                teamPassAtt={data["Team-Pass Attmept"]}
                                targetShare={data["Target Share"]}
                                ranking={index + 1}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
}
