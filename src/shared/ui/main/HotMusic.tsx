import styled from '@emotion/styled';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import btn_add from 'shared/assets/image/main/btn-add.png';
import btn_more from 'shared/assets/image/main/btn-more.png';
import { HotMusicList } from 'shared/ui/Main/types';

// 핫 음악 전체영역
const HotContainer = styled.div`
  width: 1280px;
  height: 364px;
  position: relative;
`;

// 장르의 음악 리스트 영역
// const HotMusingBlock = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   display: flex;
//   gap: 16px;
//   width: 1024px;
//   height: 336px;
//   border-radius: 8px;
//   padding: 12px 16px 12px 24px;
//   background-color: ${({ theme }) => theme.colors[700]};
// `;

// 장르의 음악 리스트 타이틀 영역
const HotMusingTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 336px;
  height: 336px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors[600]};
  z-index: 1;
`;

const PageTitle = styled.div`
  position: absolute;
  left: 32px;
  bottom: 62px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.H1};
`;

const SubTitle = styled.div`
  position: absolute;
  left: 32px;
  bottom: 28px;
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.T2};
`;

// 이미지 래퍼 스타일
const HotMusingImageWrapper = styled.div`
  position: relative;
  width: 296px;
  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover .main-image {
    opacity: 0.68;
  }

  &:hover .btn_add,
  &:hover .btn_more,
  &:hover .hot_text {
    opacity: 1;
  }
`;

// 이미지
const HotMusingImage = styled.img`
  width: 296px;
  height: 296px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const Border = styled.div`
  border-radius: 50%;
  border: 2px solid #101012;
  position: absolute;
  width: 96px;
  height: 96px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HotButton = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &.btn_add {
    bottom: 86px;
    left: 93px;
  }

  &.btn_more {
    bottom: 86px;
    right: 93px;
  }
`;

const HotTextBlock = styled.div`
  width: 110px;
  height: auto;
  position: absolute;
  bottom: 0px;
  top: 93px;
  right: 93px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const HotTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.H1};
  color: ${({ theme }) => theme.colors.white};
`;

const HotSubTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.T2};
  color: ${({ theme }) => theme.colors[100]};
`;

// 슬라이더 래퍼 스타일
const SliderWrapper = styled(Slider)`
  position: absolute;
  top: 0;
  right: 0;
  width: 1024px;
  height: 336px;
  border-radius: 8px;
  padding: 12px 16px 12px 24px;
  background-color: ${({ theme }) => theme.colors[700]};

  .slick-track {
    display: flex;
    gap: 16px;
  }

  .slick-slide {
    width: 296px !important;
  }

  //페이지 스타일 수정
  .slick-dots li button:before {
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 12px;
  }

  //이전 다음버튼 hide
  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

interface HotMusicListProps {
  HotMusicList: HotMusicList;
}

const HotMusic = ({ HotMusicList }: HotMusicListProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <HotContainer>
      <HotMusingTitle>
        <PageTitle>
          지금 뮤징에서
          <br />
          가장 핫🔥한 음악 모음
        </PageTitle>
        <SubTitle>POP • 얼터너티브</SubTitle>
      </HotMusingTitle>

      {/* <HotMusingBlock> */}
      <SliderWrapper {...settings}>
        {HotMusicList.map((item, index) => (
          <HotMusingImageWrapper key={index}>
            <HotMusingImage src={item.img} alt="이미지" className="main-image" />
            <Border></Border>
            <HotTextBlock className="hot_text">
              <HotTitle>{item.title}</HotTitle>
              <HotSubTitle>{item.name}</HotSubTitle>
            </HotTextBlock>
            <HotButton src={btn_add} alt="추가" className="btn_add" />
            <HotButton src={btn_more} alt="더보기" className="btn_more" />
          </HotMusingImageWrapper>
        ))}
      </SliderWrapper>
      {/* </HotMusingBlock> */}
    </HotContainer>
  );
};

export default HotMusic;
