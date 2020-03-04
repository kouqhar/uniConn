import React from 'react'

import '../../App.css';

export default () => {
    return (
        <footer className="devFooter">
            <p>Copyright &copy;{ new Date().getFullYear() } uniConn</p>
            <p><a className="text-white p-1 m-2" href="https://www.instagram.com/_kouqhar/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a className="text-white p-1 m-2" href="https://web.facebook.com/Rexchloeduniya" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a className="text-white p-1 m-2" href="https://twitter.com/RexchloeDuniya" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-2x"></i>
            </a>
            <br />
            Duniya Naphtali K.
            </p>
        </footer>
    )
}
