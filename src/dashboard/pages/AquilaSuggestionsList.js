import React from 'react';
import {AquilaSuggestionsList} from '../components/AquilaSuggestionsComponent';
import {LayoutHeader} from '../components/layoutHeader';

const AquilaSuggestionsListPage = () =>  { 
    return(
        <> 
            <LayoutHeader icon='discussions icon' header='SAP Aquila Sistemine Gönderilen Öneriler' subheader='SAP Öneri Yönetimi'/>
            <AquilaSuggestionsList/>
        </>
    )
}
export {AquilaSuggestionsListPage};