import { Header } from 'shared/ui';
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GenreMusic from "shared/ui/card/GenreMusic";
import LikeMusic from "shared/ui/card/LikeMusic";
import HotMusic from "shared/ui/card/HotMusic";

import List from "shared/ui/list/List";

import image1 from "shared/ui/card/img/image1.png";
import image2 from "shared/ui/card/img/roundimg.png";

// 전체 컨테이너 스타일
const ContentArea = styled.div`
  width: 100%;
  height: 2000px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

// 카드 컨테이너 스타일
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

// 슬라이더 래퍼 스타일
const SliderWrapper = styled.div`
  .slick-slide > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }

  .slick-dots li button:before {
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 12px;
  }
`;


const ListArea = styled.div`
  width: 832px;
  height: 512px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  background-color: ${({ theme }) => theme.colors[500]};
  padding: 24px;
`;

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Demo = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <ContentArea>
    <Header isLoggedIn />
      <CardContainer>
        {/* <GenreMusic image={image1} title="Honey" subtitle="TRPP" />
        <LikeMusic image={image1} title="인디고" subtitle="여름아! 부탁해" /> */}

        <SliderWrapper>
          <Slider {...settings}>
            <div>
              <HotMusic image={image2} title="그린내" subtitle="실리카겔" />
            </div>
          </Slider>
      </SliderWrapper>

      </CardContainer>
      {/* <ListArea>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
      </ListArea> */}
    </ContentArea>
    </>
  );
};
export default Demo;
