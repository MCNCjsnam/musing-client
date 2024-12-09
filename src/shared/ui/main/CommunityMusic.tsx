import styled from '@emotion/styled';

import { commonStyles } from 'shared/styles/common';
import { CommunityMusicInfo } from 'shared/ui/Main/types';

// 게시판 전체영역
const CommunityContainer = styled.div`
  width: 1280px;
  height: 616px;
`;

//게시판 음악 타이틀
const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.H1};
  margin-right: 16px;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  margin-top: 12px;
`;

// 장르의 음악 리스트 영역
const CommunityBlock = styled.div`
  display: flex;
  gap: 24px;
  border-radius: 12px;
  padding: 24px;
  width: 1280px;
  height: 560px;
  background-color: ${({ theme }) => theme.colors[600]};
`;

// 이미지 래퍼 스타일
const PlayListBlock = styled.div`
  width: 376px;
  height: 512px;
  border-radius: 8px;
`;

const PlayListImage = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  filter: blur(20px);
`;

const CommunityListBlock = styled.div`
  width: 832px;
  height: 512px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors[500]};
  padding: 24px;
  border-radius: 1px;
`;

const CommunityListWrapper = styled.div`
  width: 800px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors[400]};
  }
`;

const CommunityList = styled.div`
  width: 784px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListDate = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.fonts.wantedSans.B4};
  color: ${({ theme }) => theme.colors.primary2};
`;

const ListImg = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 20px;
`;

const ListContent = styled.div`
  width: 612px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentInfo = styled.div`
  width: 396px;
  height: 52px;
`;

const ContentsTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
`;

const ContentsDescription = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors.white};
  max-width: 396px;
  ${commonStyles.limitText};
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
`;

const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  height: 52px;
  margin-left: 16px;
`;

const ActivityStatus = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  max-width: 192px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
`;

const ActivityName = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  max-width: 192px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
`;

const StyledHr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors[400]};
  margin: 0; /* 필요에 따라 여백 조정 */
  width: 784px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface CommunityMusicProps {
  CommunityMusicInfo: CommunityMusicInfo;
}

const CommunityMusic = ({ CommunityMusicInfo }: CommunityMusicProps) => {
  return (
    <CommunityContainer>
      <TitleBlock>
        <PageTitle>음악 추천 게시판</PageTitle>
        <SubTitle>취향을 발견하는 또다른 방법</SubTitle>
      </TitleBlock>

      <CommunityBlock>
        <PlayListBlock>
          <PlayListImage src={CommunityMusicInfo.img} />
        </PlayListBlock>

        <CommunityListBlock>
          {CommunityMusicInfo.communityList.map((item) => (
            <div key={item.id}>
              <CommunityListWrapper>
                <CommunityList>
                  <ListDate>{item.date}</ListDate>
                  <ListImg src={item.img} alt={item.title} />
                  <ListContent>
                    <ContentInfo>
                      <ContentsTitle>{item.title}</ContentsTitle>
                      <ContentsDescription>{item.description}</ContentsDescription>
                    </ContentInfo>

                    <ActivityInfo>
                      <ActivityStatus>
                        댓글 {item.comment} · 추천 {item.recommend} · 조회 {item.views}
                      </ActivityStatus>
                      <ActivityName>{item.user}</ActivityName>
                    </ActivityInfo>
                  </ListContent>
                </CommunityList>
              </CommunityListWrapper>
              <StyledHr />
            </div>
          ))}
        </CommunityListBlock>
      </CommunityBlock>
    </CommunityContainer>
  );
};

export default CommunityMusic;
