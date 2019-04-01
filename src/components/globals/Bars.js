import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"

export default class Bars extends Component {
  state = {
    bars: [
      {
        id: 1,
        color: "#592e85",
        height: "30%",
      },
      {
        id: 2,
        color: "#5f83f0",
        height: "48%",
      },
      {
        id: 3,
        color: "#ca0a0c",
        height: "28%",
      },
      {
        id: 4,
        color: "#ae2b73",
        height: "22%",
      },
      {
        id: 5,
        color: "#eb7f32",
        height: "78%",
      },
      {
        id: 6,
        color: "#35e2a3",
        height: "65%",
      },
      {
        id: 7,
        color: "#f52c29",
        height: "87%",
      },
      {
        id: 8,
        color: "#41a724",
        height: "38%",
      },
      {
        id: 9,
        color: "#007931",
        height: "78%",
      },
      {
        id: 10,
        color: "#ad184c",
        height: "50%",
      },
      {
        id: 11,
        color: "#3aaeb6",
        height: "52%",
      },
      {
        id: 12,
        color: "#b6363a",
        height: "30%",
      },
      {
        id: 13,
        color: "olive",
        height: "93%",
      },
      {
        id: 14,
        color: "#e16f4a",
        height: "39%",
      },
      {
        id: 15,
        color: "#958278",
        height: "62%",
      },
      {
        id: 16,
        color: "#116540",
        height: "91%",
      },
      {
        id: 17,
        color: "#585e31",
        height: "70%",
      },
      {
        id: 18,
        color: "#6ae358",
        height: "80%",
      },
      {
        id: 19,
        color: "#4bad5a",
        height: "26%",
      },
      {
        id: 20,
        color: "#562213",
        height: "61%",
      },
      {
        id: 21,
        color: "#bcac2d",
        height: "29%",
      },
      {
        id: 22,
        color: "#c3efbe",
        height: "94%",
      },
      {
        id: 23,
        color: "#c72f48",
        height: "67%",
      },
      {
        id: 24,
        color: "#d341cd",
        height: "28%",
      },
      {
        id: 25,
        color: "#23fa25",
        height: "82%",
      },
      {
        id: 26,
        color: "#cd086d",
        height: "98%",
      },
      {
        id: 27,
        color: "#c119a0",
        height: "50%",
      },
      {
        id: 28,
        color: "#694ef3",
        height: "27%",
      },
      {
        id: 29,
        color: "#1cb32f",
        height: "54%",
      },
      {
        id: 30,
        color: "#648cbd",
        height: "73%",
      },
      {
        id: 31,
        color: "#41a724",
        height: "38%",
      },
      {
        id: 32,
        color: "#007931",
        height: "78%",
      },
      {
        id: 33,
        color: "#ad184c",
        height: "50%",
      },
      {
        id: 34,
        color: "#3aaeb6",
        height: "52%",
      },
      {
        id: 35,
        color: "#b6363a",
        height: "30%",
      },
      {
        id: 36,
        color: "#b6363a",
        height: "24%",
      },
      {
        id: 37,
        color: "#b6363a",
        height: "93%",
      },
      {
        id: 38,
        color: "#e16f4a",
        height: "49%",
      },
      {
        id: 39,
        color: "#648cbd",
        height: "93%",
      },
      {
        id: 40,
        color: "#e16f4a",
        height: "49%",
      },
    ],
  }
  render() {
    return (
      <BarsWrapper>
        {this.state.bars.map(item => {
          return (
            <li
              className="bar"
              key={item.id}
              style={{
                background: item.color,
                height: item.height,
              }}
            />
          )
        })}
      </BarsWrapper>
    )
  }
}

const BarsWrapper = styled.ul`
  display: flex;
  height: 100px;
  width: 90vw;
  margin: 0 auto;
  .bar {
    list-style: none;
    width: 2vw;
    margin-right: 0.5%;
    opacity: 0.35;
    ${styles.transDefault};
    animation: bars 900ms ease-out;
    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    height: 200px;
    width: 80vw;
  }

  @keyframes bars {
    from {
      transform: scaleY(0);
      transform-origin: top;
    }
    to {
      transform: scaleY(1);
      transform-origin: top;
    }
  }
`
