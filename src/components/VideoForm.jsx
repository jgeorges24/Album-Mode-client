import React, { Component } from 'react'
import {connect} from "react-redux"
import  { addVideo } from "../actions/videos"
// import Videos from "../containers/Videos"


 class VideoForm extends Component {
    //controling input with the state 

    state={
            director: "",
            song: "",
            rapper:"",
            cover_art: ""
        }
    
        handleSubmit = (e) => {
            //this is the payload
            console.log(this.state, "these are the props")
            e.preventDefault();
            // debugger
            this.props.addVideo(this.state)
            console.log("handle submit submit button clicked AFTER---------->>>")
        
                this.setState({
                    director: "",
                    song: "",
                    rapper:"",
                    cover_art: ""
                })
            console.log(this.state, "RESET FORM INPUT TO CLEAR DATA TYPED")
    }


    
    handleChange = (e) => {
        // e.preventDefault();
        // debugger
    //    const elName = e.target.name
    //    const elValue = e.target.value
    console.log(this.state, "HANDLING INPUT CHANGE")
        this.setState({
            [e.target.name]: e.target.value
        })
    console.log(this.state, "AFTER FORM INPUT HAS CHANGED")
    }
    
    render() {
            
        return (
        <>
            <div className="v_form" id="v_form" style={{backgroundColor: "yellow"}}>
           
            
            <h2>New Music Video Form</h2>
                <form id="v_form" classname="v_form" onSubmit={this.handleSubmit}>
                    <lable htmlFor="director">Name of director</lable>
                    <input onChange={this.handleChange} type="text" name="director" id="director" value={this.state.director}/>
                    
                    <br></br>
                    <lable htmlFor="song">Name of song</lable>
                    <input onChange={this.handleChange} type="text" name="song" id="song" value={this.state.song}/>
                    <br></br>
                    <lable htmlFor="rapper">Rapper Name</lable>
                    <input onChange={this.handleChange} type="text" name="rapper" id="rapper" value={this.state.rapper}/>
                    <br></br>
                    <lable htmlFor="cover_art">Cover Art url</lable>
                    <input onChange={this.handleChange} type="url" name="cover_art" id="cover_art" value={this.state.cover_art}/>
                    <br></br>
                    <button>add music video</button>
                </form>

            </div>
            </>
        )
    }
}


export default connect(null, {addVideo})(VideoForm)
