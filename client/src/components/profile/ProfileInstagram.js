import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileInstagram extends Component {
    constructor(props){
        super(props);
        this.state = {
            clientId : '',
            clientSecret : '',
            grant_type : '1857863141181732',
            redirect_uri : 'https://localhost:3000',
            scope : 'user_profile,user_media'
        }
    }

    // Make a request to the instagram API
    componentDidMount(){
        const { user_profile } = this.props;
        const { clientId, clientSecret } = this.state;

        fetch(`https://graph.instagram.com/${clientId}?fields=id,username&access_token=${clientSecret}`)
        .then(res => res.json())
        .then(data => {
        if(this.refs.myRef){
            this.setState({username : data});
        }
        })
        .catch(err => console.log(err))
    }

    render() {
        const { username } = this.state;

        const userImages = username.map(user => (
            <div className="card card-body mb-2" key={user.id}>
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            <Link to={user.html_url} className="text-info" target="_blank">
                                {user.username}
                            </Link>
                        </h4>
                        <p>{user.description}</p>
                    </div>
                    <div className="col-md-6">
                        <span className="badge badge-info mr-1">
                            Profile: {user.user_profile}
                        </span>
                        <span className="badge badge-secondary mr-1">
                            Media: {user.user_media}
                        </span>
                    </div>
                </div>
            </div>
        ))
        return (
            <div ref="myRef">
            <hr/>
            <h3 className="mb-4">Latest Instagram Photos</h3>
            {userImages}
            </div>
        )
    }
}

ProfileInstagram.propTypes = {
    username : PropTypes.string.isRequired
}

export default ProfileInstagram;