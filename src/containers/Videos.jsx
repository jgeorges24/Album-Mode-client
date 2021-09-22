import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchVideos, addVideo, } from "../actions/videos"
import VideoItem from "../components/VideoItem"
import VideoForm from '../components/VideoForm'


export class Videos extends Component {
    
    componentDidMount(){    
        // debugger
        console.log("fetched vids from backend!!!")
        this.props.fetchVideos()
    }

    
    // this way adds all the previouse vids plus new ones


    render(){

        const xxx = this.props.videos.map((xvideo) => <VideoItem {...xvideo} />)

        return (
            <div className="cards" >

                {/* <VideoForm /> */}
                <br></br>

                <h1> "new Music Video entries" </h1>
                {xxx}
                
            </div>
        )
    }
}

// allow me to grab the state from the store and add them to the props

const mapStateToProps = ({videosReducer}) => {
    console.log("mapStateToProps BEFORE---------->>>")
    debugger
    return {
        videos: videosReducer.videos,
        requesting: videosReducer.requesting
    }
    console.log("mapStateToProps AFTER---------->>>")
}
// this is how we connect the compentnt to the store 
export default connect(mapStateToProps, { fetchVideos, addVideo, })(Videos)
//likeVideo
