import styled from '@emotion/styled';
import btn_add from "app/styles/img/btn-add.png";
import btn_more from "app/styles/img/btn-more.png";

const MainImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 208px;
  height: 208px;
`;

const CardWrapper = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover .main-image {
    opacity: 0.68;
  }

  &:hover .btn_add,
  &:hover .btn_more,
  &:hover .text-t2,
  &:hover .text-b5 {
    opacity: 1;
  }
`;

const MainImage = styled.div`
  position: relative;
  width: 208px;
  height: 208px;
  border-radius: 12px;
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

const TextButtonArea = styled.div`
  position: absolute;
  width: 110px;
  height: 121px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 20px;
`;

const ActionButton = styled.img`
  width: 44px;
  height: 44px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`;

const TextArea = styled.div`
  text-align: center;
`;

const TextT2 = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.T2};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const TextB5 = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors[100]};
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Card = ({ image, title, subtitle }) => (
  <CardWrapper>
    <MainImageWrapper>
      <MainImage src={image} alt="이미지" className="main-image" />
      <Border />
      <TextButtonArea>
        <TextArea>
          <TextT2 className='text-t2'>{title}</TextT2>
          <TextB5 className='text-b5'>{subtitle}</TextB5>
        </TextArea>
        <ActionButtonWrapper>
          <ActionButton src={btn_add} alt="추가" className="btn_add" />
          <ActionButton src={btn_more} alt="더보기" className="btn_more" />
        </ActionButtonWrapper>
      </TextButtonArea>
    </MainImageWrapper>
  </CardWrapper>
);

export default Card;