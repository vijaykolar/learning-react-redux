import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'a', duration: '3:20' },
        { title: 'b', duration: '3:40' },
        { title: 'a', duration: '4:12' },
        { title: 'a', duration: '2:54' }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type === "SELECTED_SONG") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    song: songReducer,
    selectedSong: selectedSongReducer
})