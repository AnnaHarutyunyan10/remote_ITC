import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    };
    this.items = [
      'Anna',
      'Java',
      'Akus',
      'Sevada',
      'Anna Jan',
      'London',
      'Super',
      'JavaScript',
      'Kiki',
      'Kuveyt',
      'Lord'
    ];
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div>
        { suggestions.map((item) => <a href="#" className="text-decor-hover">
                                      <div  className="my-search-hover text-dark p-3 bg-light shadow-sm " 
                                        onClick={() => this.suggestionSelected(item)} 
                                        key={item}>{item}
                                      </div>
                                    </a>
                                   ) }
      </div>
    );
  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []  
    }));
  }

  render() {
    const { text } = this.state;
  return (
     <div>      
      <input type="text" value={ text } onChange={ this.onTextChanged } 
             className="form-control-file border p-3 rounded mt-4 shadow-sm"
             placeholder={ this.props.placeholder }
      />
      { this.renderSuggestions() }
     </div>
    );
  }
}

export default  Search;