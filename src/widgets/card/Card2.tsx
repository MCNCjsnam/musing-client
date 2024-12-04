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
  width: 208px;
  height: 208px;
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
  width: 208px;
  height: 208px;
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

  &.btn_add {
    bottom: 152px;
    left: 12px;
  }

  &.btn_more {
    bottom: 152px;
    right: 12px;
  }
`;

// TextArea 스타일
const TextArea = styled.div`
  width: 208px;
  max-height: 140px;
  text-align: left;
  position: absolute;
  bottom: 0px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
  backdrop-filter: blur(4px);
`;

// background: linear-gradient(
//   to bottom,
//   rgba(0, 0, 0, 0) 0%,
//   rgba(0, 0, 0, 0.14) 12%,
//   rgba(0, 0, 0, 0.85) 72%,
//   rgba(0, 0, 0, 1) 100%
// );

const TextB6 = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  opacity: 0.8;
  margin-bottom: 4px;
`;

const TextB1 = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B1};
  color: ${({ theme }) => theme.colors.white};
`;

const Card = ({ image, title, subtitle }) => (
  <CardWrapper>
    <MainImageWrapper>
      <MainImage src={image} alt="이미지" className="main-image" />
      <ActionButton src={btn_add} alt="추가" className="btn_add" />
      <ActionButton src={btn_more} alt="더보기" className="btn_more" />
      <TextArea>
        <TextB6>{title}</TextB6>
        <TextB1>{subtitle}</TextB1>
      </TextArea>
    </MainImageWrapper>
  </CardWrapper>
);

export default Card;
