import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";
import "../../App.css"

class Posts extends Component {
    componentDidMount(){
        this.props.getPosts();
    }

    render() {
        const { posts, loading } = this.props.post;
        let postContent;

        if(posts === null || loading){
            postContent = <Spinner />
        }else{
            postContent = <PostFeed posts={posts} />
        }
        return (
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {/*  */}

          <div className="card card-body mb-3 text-light bg-dark">
            <div className="row">
              <div className="col-md-2">
                  <img className="rounded-circle d-md-block" src="https://res.cloudinary.com/telicsound/image/upload/v1583264812/DuniyaNaphtali_jyryrc.jpg"
                    alt="Duniya Naphtali" />
                <br />
                <p className="text-left d-inline verified-container">Duniya Naphtali K. <img className="verified" src="https://res.cloudinary.com/telicsound/image/upload/v1583264824/correct_r3g0qz.svg" alt="Verified Account" title="Verified" name="Verified"/></p>
              </div>
              <div className="col-md-10">
                <p className="lead text-left">
            Thank you for signing up! This is a platform for students from various institutions to come on and communicate with each other, to activate your account and gain presence from others, here are some few tips  and tricks : <br />
            a. Create your profile with all the necessary fields filled. <br />
            b. Complete your profile by adding your Education, Experience, etc. <br />
            c. Post and Comment so your account could be found in the discovery. <br />
            d. Visit the Discover to see users, their skills, social links, profile and more. <br />
            I developed this for informative and educational purposes, so, use and make suggestions. <br />
            I'm currently working on More features for you guys, peer-to-peer communication and many pieces of stuff. <br />
            Welcome to uniConn. . . !!! Let's get ENGAGING proletariats. <br />
                </p>
              </div>
            </div>
          </div>
                        {/*  */}
                            <PostForm />
                            { postContent }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Posts.propTypes = {
    getPosts : PropTypes.func.isRequired,
    post : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post : state.post
})

export default connect(mapStateToProps, { getPosts })(Posts);