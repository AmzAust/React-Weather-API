import React from "react";
import styled from "@emotion/styled";

import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";

const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, red, pink);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;