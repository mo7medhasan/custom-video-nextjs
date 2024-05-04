import { memo } from 'react';

import Btn from './Btn';
// import { ReactComponent as PlayIcon } from 'icons/play.svg';
// import { ReactComponent as PauseIcon } from 'icons/pause.svg';
import * as Icon from "react-feather";
interface PlaybackProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const Playback: React.FC<PlaybackProps> = ({ isPlaying, onToggle }) => (
  <Btn label={isPlaying ? 'Pause' : 'Play'} onClick={onToggle}>
    {isPlaying ? <Icon.PauseCircle /> : <Icon.PlayCircle />}
  </Btn>
);

export default memo(Playback);
