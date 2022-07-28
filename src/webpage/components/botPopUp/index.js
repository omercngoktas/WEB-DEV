import React, { Component } from 'react';
import { Chat, addResponseMessage, dropMessages } from 'react-chat-popup';
import Logo from '../../images/logo.png';
import {validateEmail, wordSplitOnSentence} from '../helpers';
import emailjs from 'emailjs-com';

class BotPopUp extends Component {
    componentDidMount() {
          dropMessages()
          addResponseMessage(`Welcome to our website and thank you for your interest.
          Please let us know your area of interest(s) and/or your question(s) to our Business Development
          Team in the same sentence with you email address.  
          `)
    }

    handleNewUserMessage = (content) => {
    let params = {content: content}

    const splitContent = wordSplitOnSentence(content)
    
    const isMailHere = splitContent.map(word => {
      return validateEmail(word)
    })
    
    if(isMailHere.find(i => {return(i)}))
    { 
      addResponseMessage(`Please wait`)
      emailjs.send('gmail_service', 'template_gjBh8dYZ', params , 'user_sYzG1ti0KxwG2LJiHJmYg')
      .then((result) => {
        addResponseMessage(`We will get back to you ASAP. Thank you.`);
      }, (error) => {
        addResponseMessage(`We will get back to you ASAP. Thank you.`);
      });
    }

    if(isMailHere.find(i => {return(i)}) === undefined)
    addResponseMessage(`Please, check your email adress`);
  }

  render() {
    return (
        <div>
        <Chat
          handleNewUserMessage={e => this.handleNewUserMessage(e)}
          profileAvatar={Logo}
          title={"Birgi Mefar Group"}/>
        </div>
    );
  }
}
 
export default BotPopUp;