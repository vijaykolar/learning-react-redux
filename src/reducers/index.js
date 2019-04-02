import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'a', duration: '3:20' },
    { title: 'b', duration: '3:40' },
    { title: 'a', duration: '4:12' },
    { title: 'a', duration: '2:54' }
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
