import styled from "@emotion/styled";
import image1 from "app/styles/img/image1.png";
import btn_add from "app/styles/img/btn-add.png";
import btn_more from "app/styles/img/btn-more.png";

// 전체 컨테이너 스타일
const ContentArea = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  margin-left: 120px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

// 타이틀 스타일
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary1};
  ${({ theme }) => theme.fonts.wantedSans.H1};
`;

// 카드 컨테이너 스타일
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

// 카드 스타일
const CardWrapper = styled.div`
  width: 256px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover .main-image {
    opacity: 0.68;
  }

  &:hover .btn_add,
  &:hover .btn_more {
    opacity: 1;
  }
`;

// 메인 이미지 스타일
const MainImage = styled.img`
  width: 256px;
  height: 256px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
  transition: opacity 0.3s ease;
`;

// 버튼 스타일
const ActionButton = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &.btn_add {
    bottom: 88px;
    left: 12px;
  }

  &.btn_more {
    bottom: 268px;
    right: 12px;
  }
`;

// 텍스트 컨테이너 스타일
const TextArea = styled.div`
  text-align: center;
`;

// B2 텍스트 스타일
const TextB2 = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;

// B5 텍스트 스타일
const TextB5 = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors["200"]};
  margin-top: 3px;
`;

// 카드 컴포넌트
const Card = ({ image, title, subtitle }) => (
  <CardWrapper>
    <MainImage src={image} alt="이미지" className="main-image" />
    <ActionButton src={btn_add} alt="추가" className="btn_add" />
    <ActionButton src={btn_more} alt="더보기" className="btn_more" />
    <TextArea>
      <TextB2>{title}</TextB2>
      <TextB5>{subtitle}</TextB5>
    </TextArea>
  </CardWrapper>
);

// 메인 컴포넌트
const JSNAM = () => {
  return (
    <ContentArea>
      <Title>슈게이징</Title>
      <CardContainer>
        <Card image={image1} title="Honey" subtitle="TRPP" />
        <Card image={image1} title="Honey" subtitle="TRPP" />
      </CardContainer>
    </ContentArea>
  );
};

export default JSNAM;
