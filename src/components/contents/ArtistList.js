import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'
import './ArtistList.css'
import '../../fonts/stylesheet.css'
import { Link } from 'react-router-dom';
const getArtistsQuery = gql`
{
    allArtists{
      id
      artistName
      artistImage
    }
  }	
`
export class ArtistList extends Component {
    displayArtists() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading...</div>);
        } else {
            return (
                <div class="grid-container" style={{ padding: " 0px", margin: "50px", marginTop: "150px", marginBottom: "100px" }} >
                    {data.allArtists.map(artist => {
                        return (
                            <Link to={{ pathname: "/AlbumList", state: artist }} >
                                <div key={artist.id}>
                                    <div class="container" >
                                        <img class="image" src={require('./' + artist.artistImage)} width="150px"
                                            style={{ border: "solid", borderWidth: "1px", borderColor: "#ffffff", marginBottom: "-10px" }} />
                                    </div>
                                    <p class="image" style={{
                                        textAlign: "center", fontFamily: "bebas_neueregular", background: "#ffffff",
                                        marginTop: "10px", borderRadius: "0px 0px 10px 10px"
                                    }}>
                                        {artist.artistName}</p>
                                </div>
                            </Link>
                        );
                    })
                    }
                </div>
            );
        }
    }

    render() {
        return (this.displayArtists())
    }
}

export default graphql(getArtistsQuery)(ArtistList);
