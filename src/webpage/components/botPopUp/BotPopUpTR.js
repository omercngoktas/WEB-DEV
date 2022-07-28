import React, { Component } from 'react';
import { Chat, addResponseMessage, dropMessages } from 'react-chat-popup';
import Logo from '../../images/logo.png';
import {validateEmail, wordSplitOnSentence} from '../helpers';
import emailjs from 'emailjs-com';

class BotPopUpTR extends Component {
    componentDidMount() {
          dropMessages()
          addResponseMessage(`BMG websitemize hoşgeldiniz, daha detaylı bilgilendirme alabilmek için e-mail adresinizi paylaşmanızı rica ederiz.`)
    }

    handleNewUserMessage = (content) => {
      let params = {content: content}

      const splitContent = wordSplitOnSentence(content)
      
      const isMailHere = splitContent.map(word => {
        return validateEmail(word)
      })

    if(isMailHere.find(i => {return(i)}))
    { 
      addResponseMessage(`Lütfen Bekleyin`)
      emailjs.send('gmail_service', 'template_gjBh8dYZ', params , 'user_sYzG1ti0KxwG2LJiHJmYg')
      .then((result) => {
        addResponseMessage(`İletişim bilgileriniz başarıyla gönderildi. Gerekli iş birimimiz en yakın zamanda sizlerle iletişime geçecektir`);
      }, (error) => {
        addResponseMessage(`İletişim bilgileriniz gönderilemedi.`);
      });
    }

    if(isMailHere.find(i => {return(i)}) === undefined)
    addResponseMessage(`Lütfen, email adresini kontrol ediniz`);
  }
  
  render() {
    return (
        <Chat
          position="left"
          handleNewUserMessage={e => this.handleNewUserMessage(e)}
          profileAvatar={Logo}
          title={"Birgi Mefar Grup"}/>
    );
  }
}
 
export default BotPopUpTR;