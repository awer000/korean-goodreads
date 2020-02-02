import * as React from "react";
import { NextPage } from "next";
import DefaultSwiper from "../components/DefaultSwiper";

const IndexPage: NextPage = () => {
  return (
    <>
      <DefaultSwiper title={"이달의 신간"} />
      <DefaultSwiper title={"베스트 셀러"} />
      <DefaultSwiper title={"편집자 추천 리스트"} />
    </>
  );
};

export default IndexPage;
