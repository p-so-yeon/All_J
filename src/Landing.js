import React from "react";
import "./Landing.css";
import planner from "./planner.png";
import write from "./write.png";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  const Usepage = () => {
    ReactGA.event({
      category: "Event",
      action: "Use button",
      label: "Use button",
    });
    navigate("/use");
  };
  return (
    <div>
      <head></head>
      <body>
        <div className="landingpage">
          <div className="left">
            <div className="title">
              성공적인 취업준비를 위한 <br />
              채용 일정 관리를 도와드릴게요😊
            </div>
            <div className="content">
              수백 개의 채용일정과 자기소개서 때문에 마감일을 놓칠까봐
              <br /> 걱정한적 있으시죠? <br />
              채용일정, 자기소개서, 지원현황이 한눈에 보이는
              <br /> 나만의 채용플래너를 이용해보세요
              <br /> 힘들게만 느껴지는 취업준비 All-J 위젯과 함께해요
            </div>

            <div className="button">
              <button className="btn1">자세히 알아보기</button>
              <button className="btn2" onClick={Usepage}>
                사용 하기
              </button>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src={planner} alt="img" className="planner" />{" "}
              <img src={write} className="write" alt="img" />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};
export default Landing;
