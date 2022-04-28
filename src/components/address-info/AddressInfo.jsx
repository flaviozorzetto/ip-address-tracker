import React from 'react';

export default class AddressInfo extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      const loadingT = 'Carregando...';
      return (
         <div className="app__info">
            <ul className="app__info__list">
               <li className="app__info__list__item">
                  <h2>Ip Address</h2>
                  <h3>{this.props.loading ? loadingT : this.props.info.ip}</h3>
               </li>
               <li className="app__info__list__item">
                  <h2>Location</h2>
                  <h3>
                     {this.props.loading ? loadingT : this.props.info.location}
                  </h3>
               </li>
               <li className="app__info__list__item">
                  <h2>Timezone</h2>
                  <h3>
                     {this.props.loading
                        ? loadingT
                        : `UTC ${this.props.info.utc}`}
                  </h3>
               </li>
               <li className="app__info__list__item">
                  <h2>ISP</h2>
                  <h3>{this.props.loading ? loadingT : this.props.info.isp}</h3>
               </li>
            </ul>
         </div>
      );
   }
}
