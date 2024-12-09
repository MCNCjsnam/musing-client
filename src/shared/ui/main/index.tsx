import CommunityMusic from './CommunityMusic';
import { MAIN_ITEM } from './constants';
import GenreMusic from './GenreMusic';
import HotMusic from './HotMusic';
import LikeMusic from './LikeMusic';
import RecommendedMusic from './RecommendedMusic';

export const Main = () => {
  return (
    <>
      <GenreMusic GenreMusicList={MAIN_ITEM.GenreMusicList} />

      <LikeMusic LikeMusicList={MAIN_ITEM.LikeMusicList} />

      <HotMusic HotMusicList={MAIN_ITEM.HotMusicList} />

      <CommunityMusic CommunityMusicInfo={MAIN_ITEM.CommunityMusicInfo} />

      <RecommendedMusic RecommendedMusicList={MAIN_ITEM.RecommendedMusicList} />
    </>
  );
};
// 104 144 124 120
