import React, { Component } from 'react';
import {AquilaSuggestionsListComponent} from './AquilaSuggestionsList';

class AquilaSuggestionsList extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      
      render(){return(<AquilaSuggestionsListComponent/>)}
}

export {AquilaSuggestionsList}