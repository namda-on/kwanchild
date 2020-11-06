import React, { useState, useCallback, useEffect, KeyboardEvent } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { STATIC_URL } from "../../constant";

import RankItem from "../../component/rank-item";

import * as S from "./styles";

const Rank: React.FC = () => {
  let history = useHistory();
  const toMain = () => {
    history.push("/");
  };

  return (
    <S.Rank>
      <S.Title>
        랭크
        <img src={STATIC_URL.CROWN} alt="crown" />
      </S.Title>
      <S.RankBox>
        <S.Header>
          <S.Ranking>순위</S.Ranking>
          <S.Username>닉네임</S.Username>
          <S.TotalTime>걸린 시간</S.TotalTime>
        </S.Header>
        <RankItem id={1} name="홍은수" time="80초" />
        <RankItem id={2} name="홍은수" time="90초" />
        <RankItem id={3} name="홍은수" time="100초" />
      </S.RankBox>
      <S.Button onClick={toMain}>처음으로</S.Button>
    </S.Rank>
  );
};

export default Rank;
