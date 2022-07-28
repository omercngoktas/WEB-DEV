import React from 'react';
import { Segment, Icon} from 'semantic-ui-react';
import {LayoutHeader} from '../components/layoutHeader';
import {PasswordChanger} from '../components/passwordChanger';
import {EmailChanger} from '../components/emailChanger';

const UserSettings = () =>  { 
    return(
        <> 
            <LayoutHeader icon='setting' header='Kullanıcı Ayarları' subheader='Kullanıcı Bilgileri'/>
            <Segment className={'paddingSideBar'} style={{ paddingBottom: '10px'}}>
                <h4><Icon color="red" name="warning"/>Güvenliğiniz için, güncel mail adresinizin kayıtlı olduğundan ve şifrenizi belirli aralıklarla değiştirdiğinizden emin olun. </h4>
            </Segment>
            <Segment className={'paddingSideBar'} style={{ paddingBottom: '10px'}}>
                <EmailChanger/>
                <PasswordChanger/>
            </Segment>
        </>
    )
}

export {UserSettings};