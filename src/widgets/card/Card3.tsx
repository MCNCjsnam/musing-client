import styled from '@emotion/styled';
import btn_add from "app/styles/img/btn-add.png";
import btn_more from "app/styles/img/btn-more.png";

// MainImageWrapper 스타일 추가
const MainImageWrapper = styled.div`
  position: relative; /* 자식 요소를 위한 기준 컨테이너 */
  display: inline-block;
  width: 100%;
  height: 100%;
`;

// CardWrapper 스타일
const CardWrapper = styled.div`
  width: 92px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover .btn_add,
  &:hover .btn_more {
    opacity: 1;
  }
`;

// MainImage 스타일
const MainImage = styled.div`
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 12px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
`;

// ActionButton 스타일
const ActionButton = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &.btn_more {
    bottom: 22px;
    right: 22px;
  }
`;

const Card = ({ image}) => (
  <CardWrapper>
    <MainImageWrapper>
      <MainImage src={image} alt="이미지" className="main-image" /> 
      <ActionButton src={btn_more} alt="더보기" className="btn_more" />
    </MainImageWrapper>
  </CardWrapper>
);

export default Card;
