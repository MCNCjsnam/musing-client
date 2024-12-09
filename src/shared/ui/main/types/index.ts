// 장르의 음악 - Single item type
export type GenreMusicListItem = {
  id: string;
  title: string;
  name: string;
  img: string;
};

// 좋아요한 음악 - Single item type
export type LikeMusicListItem = {
  id: string;
  title: string;
  name: string;
  img: string;
};

// 핫한 음악 - Single item type
export type HotMusicListItem = {
  id: string;
  title: string;
  name: string;
  img: string;
};

// 음악 추천 게시판 리스트
export type CommunityList = {
  id: string;
  date: string;
  img: string;
  title: string;
  description: string;
  comment: string;
  recommend: string;
  views: string;
  user: string;
};

// 음악 추천 게시판 정보
export type CommunityMusicInfo = {
  id: string;
  img: string;
  title: string;
  description: string;
  communityList: CommunityList[];
};

// 추천 음악 리스트 - Single item type
export type RecommendedMusicListItem = {
  id: string;
  name: string;
  img: string;
};

export type MainItem = {
  GenreMusicList: GenreMusicListItem[];
  LikeMusicList: LikeMusicListItem[];
  HotMusicList: HotMusicListItem[];
  CommunityMusicInfo: CommunityMusicInfo;
  RecommendedMusicList: RecommendedMusicListItem[];
};
