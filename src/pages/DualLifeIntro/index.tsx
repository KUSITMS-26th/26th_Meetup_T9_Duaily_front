import * as S from "./styles";
import { MenuItemType } from "@types";
import { opacityVariants } from "@utils/variants";
import React, { useEffect, useRef, useState } from "react";
import Footer from "@components/Footer";
import { dummy_session_data, dummy_trend_data } from "@utils/dummy";
import TrendCard from "@components/TrendCard";
import SessionCard from "@components/SessionCard";

interface DualLifeIntroProps {
  setClickedMenu: React.Dispatch<React.SetStateAction<MenuItemType>>;
}

const DUMMY_TREND_DATA = dummy_trend_data;
const DUMMY_SESSION_DATA = dummy_session_data;

function DualLifIntro({ setClickedMenu }: DualLifeIntroProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const [cardCount, setCardCount] = useState(0);
  const [cardCount2, setCardCount2] = useState(0);
  const onCardNext = () => {
    if (window.innerWidth < 500) {
      if (cardCount < dummy_trend_data.length - 1)
        setCardCount((prev) => prev + 1);
    } else {
      if (cardCount < dummy_trend_data.length - 3)
        setCardCount((prev) => prev + 1);
    }
  };
  const onCardNext2 = () => {
    if (window.innerWidth < 500) {
      if (cardCount2 < dummy_session_data.length - 1)
        setCardCount2((prev) => prev + 1);
    } else {
      if (cardCount2 < dummy_session_data.length - 2)
        setCardCount2((prev) => prev + 1);
    }
  };
  const onCardPrev = () => {
    if (cardCount > 0) setCardCount((prev) => prev - 1);
  };
  const onCardPrev2 = () => {
    if (cardCount2 > 0) setCardCount2((prev) => prev - 1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setClickedMenu("duallife intro");
  }, [setClickedMenu]);
  useEffect(() => {
    if (window.innerWidth < 500) {
      cardRef.current!.style.transform = `translate(${-280 * cardCount}px)`;
    } else {
      cardRef.current!.style.transform = `translate(${-400 * cardCount}px)`;
    }
  }, [cardCount]);
  useEffect(() => {
    if (window.innerWidth < 500) {
      cardRef2.current!.style.transform = `translate(${-300 * cardCount2}px)`;
    } else {
      cardRef2.current!.style.transform = `translate(${-480 * cardCount2}px)`;
    }
  }, [cardCount2]);
  return (
    <S.Container variants={opacityVariants} initial="initial" animate="mount">
      <S.JumbotronSection>
        <h1>?????? ????????? ?????????</h1>
        <p>?????? ???????????? ?????? ?????? ????????? ???????????? ???????????????!</p>
      </S.JumbotronSection>
      <S.ContentConatiner>
        <S.Section1>
          <S.TextBox>
            <p>????????? ???????????? ???????????? ????????? ???????????? ?????????????</p>
            <p>
              ?????? ???????????? ?????? ???????????? ??????????????? ????????? ????????? ??? ????????????.
            </p>
            <p style={{ fontWeight: "700" }}>
              ?????? ????????? ????????? ?????? No.1 ????????? ????????????
            </p>
            <p style={{ fontWeight: "700", marginBottom: "20px" }}>
              ??? ????????? ???????????? ???????????? ????????????????????? :)
            </p>
            <p>?????? ?????? ???????????? ??????????????? ???????????????</p>
            <p style={{ fontWeight: "700" }}>
              ???????????? ???????????? ?????? ????????? ???????????? ?????? ????????????!
            </p>
          </S.TextBox>
          <S.Section1Img />
        </S.Section1>
        <S.Section2>
          <S.Section2Img />
          <S.TextBox>
            <p>???????????? ?????? ???????????? ????????? ??? ????????????????</p>
            <p>
              ???????????? ?????? ???????????? ????????? ?????? ???????????? ?????? ????????? ????????????
              ????????? ??????????????????!
            </p>
            <p>
              ?????? ????????? ???????????? ????????? ???????????? ????????? ?????? ????????????
              ????????????????
            </p>
          </S.TextBox>
        </S.Section2>
        <S.Section3>
          <h1>?????? ????????? ?????????</h1>
          <S.CardBox>
            <S.CardContainer ref={cardRef}>
              {DUMMY_TREND_DATA.map((trend) => (
                <TrendCard
                  key={trend.id}
                  title={trend.title}
                  previewText={trend.previewText}
                  imageUrl={trend.imageUrl}
                />
              ))}
            </S.CardContainer>
            <S.CardPrevButton onClick={onCardPrev}>&lt;</S.CardPrevButton>
            <S.CardNextButton onClick={onCardNext}>&gt;</S.CardNextButton>
          </S.CardBox>
        </S.Section3>
        <S.Section3>
          <h1>?????? ????????? ??????</h1>
          <S.CardBox>
            <S.CardContainer2 ref={cardRef2}>
              {DUMMY_SESSION_DATA.map((session) => (
                <SessionCard
                  key={session.id}
                  title={session.title}
                  imageUrl={session.imageUrl}
                />
              ))}
            </S.CardContainer2>
            <S.CardPrevButton onClick={onCardPrev2}>&lt;</S.CardPrevButton>
            <S.CardNextButton onClick={onCardNext2}>&gt;</S.CardNextButton>
          </S.CardBox>
        </S.Section3>
      </S.ContentConatiner>
      <div style={{ marginBottom: "110px" }} />
      <Footer />
    </S.Container>
  );
}

export default DualLifIntro;
