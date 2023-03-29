import React, { Component } from 'react';
import './social.css';

class Social extends Component{
    state = { isActive: false };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    render(){
        const isActive = this.state.isActive;
        return(
            <div id='social-div'>
                <button id='social-button' onClick={this.handleToggle}><img src='multiarrow.png' alt='onearrow'/></button>
                {isActive ?
                <ul className='social-list'>
                    <li><a href='https://twitter.com/' target='_blank' rel='noreferrer'><img src='twitter.png' alt='twitter'/></a></li>
                    <li><a href='https://ca.linkedin.com/' target='_blank' rel='noreferrer'><img src='linkedin.png' alt='linkedin'/></a></li>
                    <li><a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><img src='facebook.png' alt='facebook'/></a></li>
                    <li><a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><img src='insta.png' alt='insta'/></a></li>
                    <li><a href='https://www.snapchat.com/' target='_blank' rel='noreferrer'><img src='snap.png' alt='snap'/></a></li>
                    <li><a href='https://www.whatsapp.com/' target='_blank' rel='noreferrer'><img src='whats.png' alt='whats'/></a></li>
                </ul>
                :
                <></>
                }
            </div>
        )
    }
}


export default Social;