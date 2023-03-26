import React from "react";
import styled, { css } from "styled-components";

const DataCardCont = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    font-size: 2rem;

    ${({ color }) => {
        if (color === "blue") {
            return css`
                border: 2px solid var(--color-blue);

                .dataCard__ranking {
                    background-color: var(--color-blue);
                }
                .dataCard__targetShare {
                    background-color: var(--color-blue);
                }
            `;
        } else if (color === "red") {
            return css`
                border: 2px solid var(--color-red);

                .dataCard__ranking {
                    background-color: var(--color-red);
                }
                .dataCard__targetShare {
                    background-color: var(--color-red);
                }
            `;
        } else if (color === "green") {
            return css`
                border: 2px solid var(--color-green);

                .dataCard__ranking {
                    background-color: var(--color-green);
                }

                .dataCard__targetShare {
                    background-color: var(--color-green);
                }
            `;
        }
    }}

    .dataCard__textCol {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        gap: 4px;
        padding-bottom: 4px;
    }

    .dataCard__ranking {
        color: var(--color-gray);
        border-radius: 0 0 30px 0;
        min-width: 45px;
        width: fit-content;
        padding: 5px 0;
        display: flex;
        align-items: flex-start;
    }

    .dataCard__ranking--rank {
        padding-left: 8px;
        padding-right: 17px;
    }

    .dataCard__info {
        padding-left: 8px;
    }

    .dataCard__targetShare {
        color: var(--color-gray);
        padding: 0 4px;
        font-weight: 700;
    }

    .dataCard__targetShare--stat {
        font-size: 5.6rem;
    }
`;

const DataCard = ({
    name,
    team,
    playerPassAtt,
    teamPassAtt,
    targetShare,
    ranking,
    season,
}) => {
    const color =
        ranking % 3 === 0 ? "red" : ranking % 3 === 1 ? "blue" : "green";

    return (
        <DataCardCont color={color}>
            <div className={"dataCard__textCol"}>
                <div className={"dataCard__ranking"}>
                    <p className="dataCard__ranking--rank">#{ranking}</p>
                </div>
                <p className={"dataCard__info"}>Player Name: {name}</p>
                <p className={"dataCard__info"}>Team: {team}</p>
            </div>
            <div className={"dataCard__textCol"}>
                <p className={"dataCard__info"}>
                    Player Pass Attempt{season}: {playerPassAtt}
                </p>
                <p className={"dataCard__info"}>
                    Team Pass Attmept{season}: {teamPassAtt}
                </p>
            </div>
            <div className={"dataCard__targetShare"}>
                <div className="dataCard__targetShare--stat">
                    {targetShare}%
                </div>
                <p>Target Share</p>
            </div>
        </DataCardCont>
    );
};

export default DataCard;
