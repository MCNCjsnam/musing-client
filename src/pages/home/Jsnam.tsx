import styled from '@emotion/styled';

import Card from 'widgets/card/Card';
import Card2 from 'widgets/card/Card2';

import image1 from "app/styles/img/image1.png";

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

// 메인 컴포넌트
const JSNAM = () => {
  return (
    <ContentArea>
      <Title>슈게이징</Title>
      <CardContainer>
        <Card image={image1} title="Honey" subtitle="TRPP" />
        <Card2 image={image1} title="Noel gallagher’s high flying birds" subtitle="The Dying Of The Light" />
      </CardContainer>
    </ContentArea>
  );
};

export default JSNAM;