import { TrackItem } from '../TrackItem';
import { NavBarSizeProps } from '../type';
import { Track, TrackListContainer, TrackListScrollableContainer } from './styled';

export interface TrackListProps extends NavBarSizeProps {
  open: boolean;
}

export const TrackList = ({ size, open }: TrackListProps) => {
  return (
    <TrackListContainer size={size} open={open}>
      <TrackListScrollableContainer>
        {Array.from({ length: 19 }).map((_, idx) => (
          <Track key={idx} size={size}>
            <TrackItem size={size} />
          </Track>
        ))}
      </TrackListScrollableContainer>
    </TrackListContainer>
  );
};
