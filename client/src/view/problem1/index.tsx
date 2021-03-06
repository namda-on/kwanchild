import { stringify } from "querystring";
import React, { useState, useCallback, useEffect, KeyboardEvent } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { isRegExp } from "util";
import { STATIC_URL } from "../../constant";
import PAGE_URL from "../../page-config";

import * as S from "./styles";

const Problem1: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState("");
  let history = useHistory();

  const checkAnswer = useCallback(async () => {
    const result = await fetch("api/problem/1", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: userAnswer,
      }),
    });
    if (!result.ok) {
      alert("틀렸습니다!");
      return;
    }
    history.push(PAGE_URL.prob2);
  }, [userAnswer]);
  return (
    <S.Problem1>
      <S.ProblemLayout>
        <S.Title>문제 1</S.Title>
        <S.Content>
          <div>It's not always what you see</div>
          <S.HintContainer>
            <S.AnswerBlack>여 부 정 눈 빛</S.AnswerBlack>
            <S.AnswerWhite>정답은 ...</S.AnswerWhite>
            <S.AnswerBlack>기 석 답 햇 쪽</S.AnswerBlack>
            <S.AnswerWhite>바로 바로 ...</S.AnswerWhite>
            <S.AnswerBlack>왼 비 은 오 른 </S.AnswerBlack>
            <S.AnswerWhite>임지수</S.AnswerWhite>
            <S.AnswerBlack></S.AnswerBlack>
          </S.HintContainer>
        </S.Content>
        <S.AnswerContainer>
          <S.InputBox
            placeholder="정답을 입력하세요."
            onChange={(e) => {
              setUserAnswer(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") checkAnswer();
            }}
          ></S.InputBox>
          <S.SubmitButton onClick={checkAnswer}>입력</S.SubmitButton>
        </S.AnswerContainer>
      </S.ProblemLayout>
    </S.Problem1>
  );
};

export default Problem1;
