import styled from '@emotion/styled';
import btn_add from "app/styles/img/btn-add.png";
import btn_more from "app/styles/img/btn-more.png";

// 카드 래퍼 스타일
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

/**
 * 재사용 가능한 카드 컴포넌트
 * @param {Object} props - 카드 컴포넌트 props
 * @param {string} props.image - 카드 이미지 경로
 * @param {string} props.title - 카드 타이틀
 * @param {string} props.subtitle - 카드 서브타이틀
 */
const Card = ({ 
  image, 
  title, 
  subtitle, 
}) => (
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

export default Card;