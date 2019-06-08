import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

/*
import search from './search.png';
import _ from "lodash";
import faker from "faker";
import { Search } from "semantic-ui-react";

const source = _.times(5, () => ({
  title: faker.company.companyName()
}));
const initialState = { isLoading: false, results: [], value: "" };

class Search1 extends Component {

  state = initialState;
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
  setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);
      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);
      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <div className="container bg-light rounded p-3 mt-4 shadow-sm">
        <Search
          //className="form-control-file border p-3 rounded"
          input={{ icon: "search", iconPosition: "left"  }}
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={value}
          {...this.props}
        />
      </div>
    );
  }
}

export default  Search1;*/

/*

let contacts = [{
  id: 1,
  name: 'anna',
  phone: '555 555 555'
}, {
  id: 2,
  name: 'banna',
  phone: '555 555 555'
}, {
  id: 3,
  name: 'canna',
  phone: '555 555 555'
}, {
  id: 4,
  name: 'danna',
  phone: '555 555 555'
}];

class Search1 extends Component {
  constructor(){
    super();
    this.state = {
      search: 'aaa'
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    let filteredContacts = this.props.contacts;
    return(
      <div>
        <ul>
          {filteredContacts.map((contact) => {
            return <div contact={contact}
                        key={contact.id} />
          })}
        </ul>
        <input type="text" 
               value={this.state.search}
               onChange={this.updateSearch.bind(this)} />
      </div>
    )
  }
}

export default  Search1;*/


  
  
class Search1 extends Component {
  constructor(props) {
   super(props);
   this.state = {
     searchTerm: 'a',
   };
 } 
 render() {
  return (
     <div >
       
       
       <p><input type="text" 
           className="rounded" 
           placeholder="Search..."
           value={this.state.searchTerm}  />
       </p>
     </div>
   );
 }
}

export default  Search1;
