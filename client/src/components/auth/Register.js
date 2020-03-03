import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroupRegister from "../common/TextFieldGroupRegister";

class Register extends Component {
    
    // To create a component state
    constructor(){
        super();
        this.state = {
            name : "",
            email : "",
            password : "",
            password2 : "",
            errors : {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
      if(this.props.auth.isAuthenticated){
        this.props.history.push('/dashboard');
      }
    }

    // Test for certain properties
    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({ errors : nextProps.errors });
      }
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        const newUser = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            password2 : this.state.password2
        }

        this.props.registerUser(newUser, this.props.history);

    }

    render() {
      const { errors } = this.state;
      
        return (

            // Register
            <div className="register">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto ">
                    <h1 className="display-5 text-center mt-12">Sign Up</h1>
                    <p className="text-center">Create your uniConn account</p>

                    <form onSubmit={this.onSubmit} >
                      
                      <TextFieldGroupRegister 
                        type="text"
                        placeholder="Enter full name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                      
                      <TextFieldGroupRegister 
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                        info="uniConn uses Gravatar so if you want a profile image, use an email with an image set"
                      />
                      
                      <TextFieldGroupRegister 
                        type="password"
                        placeholder="Create your password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                      />
                      
                      <TextFieldGroupRegister 
                        type="password"
                        placeholder="Re-type your password"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                      />
                      
                      <input type="submit" className="btn btn-info btn-block" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          
        )
    }
}

Register.propTypes = {
  registerUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth : state.auth,
  errors : state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register));