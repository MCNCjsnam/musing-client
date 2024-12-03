import styled from '@emotion/styled';
import image1 from 'app/styles/img/image1.png';
import btn_add from 'app/styles/img/btn-add.png';
import btn_more from 'app/styles/img/btn-more.png';

//영역
const ContentArea = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  margin-left: 120px;

  background-color: ${({ theme }) => theme.colors.black}; /* 배경색 */
  color: ${({ theme }) => theme.colors.white}; /* 글자색 */
`;

//텍스트
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary1};

  ${({ theme }) => theme.fonts.wantedSans.H1};
`;

//카드
const CardContainer = styled.div`
  display: flex;
  gap: 20px; /* 카드 사이의 간격 */
  justify-content: center; /* 카드를 중앙에 정렬 */
`;

const Card = styled.div`
  width: 256px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .main-image {
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    width: 256px;
    height: 256px;
    margin-bottom: 16px;
    transition: opacity 0.3s ease;
  }

  .btn_add, .btn_more {
    position: absolute;
    width: 44px;
    height: 44px;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
  }

  .btn_add {
    bottom: 88px;
    left: 12px;
  }

  .btn_more {
    bottom: 268px;
    right: 12px;
  }

  &:hover .main-image {
    opacity: 0.68;
  }

  &:hover .btn_add,
  &:hover .btn_more {
    opacity: 1;
  }

  span { 
    text-align: center;
  }
`;

const TextArea = styled.div`  
  gap: 16px;
`;

const TextB2 = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B2}; /* B2 폰트 스타일 적용 */
  text-align: center; /* 가운데 정렬 */
`;

const TextB5 = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B5}; /* B5 폰트 스타일 적용 */
  color: ${({ theme }) => theme.colors["200"]};
  text-align: center; /* 가운데 정렬 */
  margin-top: 3px; /* TextB2와 TextB5 사이의 간격을 3px로 설정 */
`;

const JSNAM = () => {
  return (
    <ContentArea>
      <Title>슈게이징</Title>
      <CardContainer>
        <Card>
          <img src={image1} alt="이미지" className="main-image"></img>
          <img src={btn_add} alt="추가" className="btn_add"></img>
          <img src={btn_more} alt="추가" className="btn_more"></img>
          <TextArea>
            <TextB2>Honey</TextB2>
            <TextB5>TRPP</TextB5>
          </TextArea>
        </Card>

        <Card>
          <img src={image1} alt="이미지" className="main-image"></img>
          <img src={btn_add} alt="추가" className="btn_add"></img>
          <img src={btn_more} alt="추가" className="btn_more"></img>
          <TextArea>
            <TextB2>Honey</TextB2>
            <TextB5>TRPP</TextB5>
          </TextArea>
        </Card>
      </CardContainer>
    </ContentArea>
  );
};

export default JSNAM;