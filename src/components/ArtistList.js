import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'

const getArtistsQuery = gql`
{
    allArtists{
        id
        artistName
        albumSet {
          id
          albumName
        songSet{
          id
          songName
        }
        }
      }
}
`

export class ArtistList extends Component {
    displayArtists() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading...</div>);
        } else {
            return data.allArtists.map(artist => {
                return (
                    <li key={artist.id}> {artist.artistName}
                        {artist.albumSet.map(album => {
                            return (
                                <li key={album.id} > {album.albumName}
                                    {album.songSet.map( song => {
                                        return(
                                            <li> {song.songName} </li>
                                        )
                                    })}
                                </li>
                            )
                        }
                        )} <br/></li>
                )
            })
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="artist-list">
                    {this.displayArtists()}
                </ul>
            </div>
        )
    }
}

export default graphql(getArtistsQuery)(ArtistList);
