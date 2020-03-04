import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";
import { getCurrentProfile } from "../../actions/profileActions"

class CommentItem extends Component {
    onDeleteClick(postId, commentId){
        this.props.deleteComment(postId, commentId);
    }

    componentDidMount(){
        this.props.getCurrentProfile();
    }

    render() {
        const { comment, postId, auth} = this.props;

        return ( 
            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                    <img className="rounded-circle d-none d-md-block" 
                    src={comment.avatar} 
                    alt={comment.name} />
                  <br />
                  <p className="text-left verified-container">{comment.name} <img className="verified" src={comment.name === "Duniya Naphtali K." ? "https://res.cloudinary.com/telicsound/image/upload/v1583264824/correct_r3g0qz.svg" : null} alt="Verified Account" title="Verified" name="Verified"/></p>
                </div>
                <div className="col-md-10">
                  <p className="lead">
                    {comment.text}
                  </p>
                  {comment.user === auth.user.id ? (
                      <button 
                        type="button"
                        onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                        className="btn btn-danger mr-1">
                            <i className="fas fa-times" />
                        </button>
                  ) : null }
                </div>
              </div>
            </div>
        )
    }
}

CommentItem.propTypes = {
    deleteComment : PropTypes.func.isRequired,
    comment : PropTypes.object.isRequired,
    postId : PropTypes.string.isRequired,
    auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({                                                                                                                                                                                                                                                                                                                             
    auth : state.auth
})

export default connect(mapStateToProps, { deleteComment, getCurrentProfile })(CommentItem);