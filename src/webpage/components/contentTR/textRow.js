import React from 'react';
import 'suneditor/dist/css/suneditor.min.css'; 

const TextRow = (props) => {
    const HtmlText = props.data.map((page) => page.pageText);
    return (
        <body className="sun-editor-editable" 
              style={{ fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}  dangerouslySetInnerHTML={{ __html: HtmlText }}/>
    )
}

export default TextRow;

