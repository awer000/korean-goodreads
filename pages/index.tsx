import * as React from "react";
import { NextPage } from "next";
import DefaultSwiper from "../components/DefaultSwiper";

const IndexPage: NextPage = () => {
  return (
    <div className="Index">
      <DefaultSwiper title={"주목할만한 신간"} />
      <DefaultSwiper title={"베스트 셀러"} />
      <DefaultSwiper title={"편집자 추천 리스트"} />
    </div>
  );
};

export default IndexPage;
