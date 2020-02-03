import * as React from "react";
import { NextPage } from "next";
import DefaultSwiper from "../components/DefaultSwiper";
import { imageMapList } from "../mock/swiperMock";

const IndexPage: NextPage = () => {
  return (
    <div className="Index">
      <DefaultSwiper title={"주목할만한 신간"} imageMapList={imageMapList} />
      <DefaultSwiper title={"베스트 셀러"} imageMapList={imageMapList} />
      <DefaultSwiper title={"편집자 추천 리스트"} imageMapList={imageMapList} />
    </div>
  );
};

export default IndexPage;
