import React, {useState} from 'react';
import { Container} from 'react-bootstrap';
import { Input } from 'semantic-ui-react';
import FalseLogo from '../hesKodForm/false.png';
import SuccessLogo from '../hesKodForm/tick.png';
//import axios from 'axios';

const Covid19DokumanıEkle = () => {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [situation, setSituation] = useState();

    const saveFile = (event) => {
        event.preventDefault();
        const date = new Date();
        setFile(event.target.files[0]);
        setFileName(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}_${event.target.files[0].name}`)
    }

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("formFile", file);
        formData.append("fileName", fileName);
        try {
            // const res = await axios.post("/files/upload", formData);
            setSituation("E")
        } catch (ex){
            setSituation("H")
        }
    };

    return (
           <Container style={{marginTop:'20px', textAlign:'center'}}>
                {situation === "E" ?
                <>
                    <img src={SuccessLogo} style={{width:'100%'}} alt=''/>
                    <h1 style={{color:'#32c671'}}>Dosya başarıyla eklendi.</h1>
                </>: 
                situation === "H" ? 
                <>
                    <img src={FalseLogo} style={{width:'100%'}} alt=''/>
                    <h1 style={{color:'red'}}>Dosya eklenmesinde hata oluştu.</h1>
                </>:
                <div style={{marginTop:'20px'}}>
                    <Input type="file" onChange={saveFile}/>
                    <Input type="button" value="Ekle" onClick={uploadFile}/>
                </div>
                }
           </Container>
    )
}

export {Covid19DokumanıEkle}