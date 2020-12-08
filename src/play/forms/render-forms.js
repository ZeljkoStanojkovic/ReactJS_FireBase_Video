import React from "react";
// import "../../scss/intro.scss";

//wrote function because this container is stateless.
function RenderForm(props) {
  a = [
    { id: 0, a: "대여금" },
    { id: 10, a: "대여해 준 사람" },
    { id: 11, a: [] },
  ];

  q = [
    {
      id: 0,
      q: [
        {
          t: "어떤 문제입니까?",
          req: "c",
          a: ["대여금", "매매대금", "손해배상", "용역대금"],
        },
      ],
    },
    {
      prev: { id: 0, a: "대여금" },
      id: 10,
      q: [
        {
          t: "당신은 누구입니까?",
          req: "c",
          a: ["대여해 준 사람", "대여 받은 사람"],
        },
      ],
    },
    {
      prev: { id: 10, a: "대여해 준 사람" },
      id: 11,
      q: [
        {
          t: "대여계약 내용을 입력해주세요.",
          req: "i",
          a: ["대여금", "대여일", "이자율"],
        },
      ],
    },
    {
      prev: {
        id: 11,
        a: true,
      },
      id: 12,
      q: [
        {
          t: "그런데 원금을 전혀 받지 못했습니까?",
          req: "c",
          a: ["예", "아니오, 일부는 받았습니다"],
          q: [
            {
              _a: 1,
              t: "일부 받은 원금은 얼마입니까?",
              req: "i",
              a: ["일부 받은 원금"],
            },
          ],
        },
      ],
    },
  ];

  //form-frame

  //form-page

  return <div></div>;
}

export default RenderForm;
