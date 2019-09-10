import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'
import './ArtistList.css'
import '../../fonts/stylesheet.css'
import { Link } from 'react-router-dom';
import './AlbumList.css'

const getAlbumsQuery = gql`
{
    allAlbums{
        id
        albumName
        albumImage
        artist {
            id
            artistName
        }
    }
}
`

export class AlbumList extends Component {

    displayAlbums() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading...</div>);
        } else {
            return (
                <div class="flex-container-albumList" >
                    {data.allAlbums.map(album => {
                        const artistId = this.props.location.state.id;
                        if (album.artist.id == artistId && artistId <= 4)
                            return (
                                    <div >
                                        <div key={album.id} class="container">
                                            <img class="image" src={require('./' + album.albumImage)} width="250px"
                                                style={{ margin: "5px", border: "solid", borderWidth: "1px", borderColor: "#ffffff", marginBottom: "-10px" }} />
                                        </div>
                                    </div>
                            );
                    })}
                </div>
            );
        }
    }



    render() {
        return (
            <div class="flex-container-albumContent" >
                <div style={{ marginLeft: "40px", marginTop: "200px", marginBottom:"100px" }} >
                    <p style={{
                        paddingLeft: "30px", color: "#ffffff", fontFamily: "bebas_neuebold",
                        fontSize: "55px", lineHeight: "50px"
                    }} >ALBUMS
                    </p>
                    <p style={{
                        fontSize: "25px", paddingLeft: "30px", fontFamily: "bebas_neuelight",
                        color: "#ffffff"
                    }} >SELECT YOUR FAVOURITE.</p>
                </div>
                <div style={{ marginLeft: "100px", marginTop: "100px", marginBottom:"100px" }}>
                    {this.displayAlbums()}
                </div>
            </div>
        )
    }
}

export default graphql(getAlbumsQuery)(AlbumList);