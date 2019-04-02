import React from 'react';
import { connect } from "react-redux";
 
class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="ui items">

                    <div className="items" key={song.title}>
                        <div className="right floated content">
                            <button className="ui button primary">Select</button>
                        </div>

                        <div className="content"> { song.title } </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        // console.log("dsf", this.props)
        return  <div> { this.renderList() } </div>
        // return  <div> works </div>
       
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);