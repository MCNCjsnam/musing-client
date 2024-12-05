import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Card from "widgets/card/Card";
import Card2 from "widgets/card/Card2";
import Card3 from "widgets/card/Card3";
import Card4 from "widgets/card/Card4";

import List from "widgets/list/List";

import image1 from "app/styles/img/image1.png";
import image2 from "app/styles/img/roundimg.png";

// 전체 컨테이너 스타일
const ContentArea = styled.div`
  width: 100%;
  height: 2000px;
  margin: 0 auto;
  margin-left: 120px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

// 카드 컨테이너 스타일
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

// 타이틀 스타일
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary1};
  ${({ theme }) => theme.fonts.wantedSans.H1};
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

const JSNAM = () => {
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
    <ContentArea>
      <Title>슈게이징</Title>
      <CardContainer>
      <Card image={image1} title="Honey" subtitle="TRPP" />
      <Card2 image={image1} title="Honey" subtitle="TRPP" />
      <Card2 
        image={image1}
        title="Noel Gallagher's High Flying Birds"
        subtitle="The Dying Of The Light" />
      <Card3 image={image1}/>
      </CardContainer>

      <SliderWrapper>
        <Slider {...settings}>
          <div>
            <Card4 image={image2} title="그린내" subtitle="실리카겔" />
          </div>

          <div>
            <Card4 image={image2} title="그린내" subtitle="실리카겔" />
          </div>

          <div>
            <Card4 image={image2} title="그린내" subtitle="실리카겔" />
          </div>

          <div>
            <Card4 image={image2} title="그린내" subtitle="실리카겔" />
          </div>

          <div>
            <Card4 image={image2} title="그린내" subtitle="실리카겔" />
          </div>
        </Slider>
      </SliderWrapper>

    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <ListArea>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
        <List image={image1} title="Highway Tune · Greta Van Fleet" subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"></List>
      </ListArea>
    </ContentArea>
  );
};

export default JSNAM;
