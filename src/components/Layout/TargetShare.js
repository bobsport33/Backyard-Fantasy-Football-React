import React, { useEffect, useState } from "react";

import TargetShareData from "../../store/TargetShareData";
import DataCard from "../UI/DataCard";
import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";
import styled from "styled-components";
import InfoCard from "../UI/InfoCard";
import { media } from "../../styles/variables";

const TargerShareCont = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6rem;
    color: var(--color-light);

    .targetShareHeading {
        color: var(--color-dark);
        text-transform: uppercase;
        margin-top: 3rem;
        text-transform: uppercase;
        font-weight: 600;
    }

    .targetShareSubheading {
        color: var(--color-dark);
        font-size: 2.5rem;
        padding-bottom: 3rem;
    }

    .targetShareDescription {
        margin: 0 auto 2rem auto;
        width: 70%;
        color: var(--color-light);
        padding-bottom: 3rem;
        list-style: none;
        text-align: left;
        line-height: 1.4;
    }

    .target-share__container {
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;

        @media ${media.tablet} {
            flex-direction: column;
        }
    }

    .targetShareDescriptionText {
        padding-bottom: 2rem;
    }

    .targetShareDescriptionLi {
        padding-top: 1rem;
    }

    .selectors {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        margin-bottom: 40px;
        max-width: 90%;
        margin: 80px auto;
    }

    .selectors__dropdown {
        margin-bottom: 20px;
        display: flex;
        gap: 20px;
    }

    .selectors__label {
        font-size: 2.5rem;
    }

    .data {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 90%;
        margin: 0 auto;
    }
`;

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
        <TargerShareCont>
            <Card>
                <h2 className={"targetShareHeading"}>
                    Using Data to get an edge
                </h2>
                <p className={"targetShareSubheading"}>
                    Take a look at these different metrics and learn how they
                    can give you an edge in selecting players.
                </p>
                <div className={"target-share__container"}>
                    <InfoCard
                        title="Target Share Percentage"
                        description="Measurement of the percentage
                        of all passing attempts directed at a particular player.
                         "
                    />
                    <InfoCard
                        title="Team Pass Attempts"
                        description="Number of total pass attempts for a team. A player
                        that has a slightly lower target share may be more
                        vaulable if their offense makes a significantly larger
                        number of pass attempts per game."
                    />
                    <InfoCard
                        title="Player Pass Attempts"
                        description="Total number of pass attempts targeting the selected player. Target share percentage is great for comparing players, but this is the best for predicting expected fantasy points.
                         "
                    />
                </div>
            </Card>
            <form className="selectors">
                <h2 className="selectors__heading">
                    Check out this historical Target Share data.
                </h2>
                <div className="selectors__dropdown">
                    <label className="selectors__label" htmlFor="season">
                        Season:
                    </label>
                    <select
                        name="season"
                        id="season"
                        onChange={selectYearHandler}
                    >
                        <option value="">--Please Select a Year--</option>
                        {seasons.map((season, i) => {
                            return (
                                <option key={i} value={season}>
                                    {season}
                                </option>
                            );
                        })}
                    </select>
                </div>
                {year && (
                    <div className="selectors__dropdown">
                        <label className="selectors__label" htmlFor="week">
                            Week:
                        </label>
                        <select
                            name="week"
                            id="week"
                            onChange={selectWeekHandler}
                        >
                            <option value="">--Please Select a Week--</option>
                            {weeks.map((week, i) => {
                                return (
                                    <option key={i} value={week}>
                                        Week {week}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                )}
            </form>

            {}
            {year && !targetShareData && <LoadingSpinner />}
            {!week && year && targetShareData && (
                <div className={"data"}>
                    {targetShareData.map((data, index) => {
                        return (
                            <DataCard
                                key={index}
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
                <div className={"data"}>
                    {targetShareData.map((data, index) => {
                        return (
                            <DataCard
                                key={index}
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
        </TargerShareCont>
    );
}
