import React from 'react';

export default class SearchBar extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="search__bar">
            <input
               className="search__bar__input"
               type="text"
               value={this.props.searchVal}
               onChange={this.props.onChange}
               placeholder="Search for any IP address or domain"
            />
            <button
               className="search__bar__submit"
               onClick={this.props.requestInfo}
            ></button>
         </div>
      );
   }
}
