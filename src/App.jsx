import React from 'react';
import SearchBar from './components/search-bar/SearchBar';
import AddressInfo from './components/address-info/AddressInfo';
import LeafletManager from './components/leaflet/LeafletManager';
import './styles/styles.css';

export default class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         searchVal: '',
         info: {
            ip: '',
            isp: '',
            utc: '',
            location: '',
            coordinates: {
               lat: 51.505,
               lng: -0.09,
            },
         },
         loading: false,
      };

      this.onChange = this.onChange.bind(this);
      this.setInfo = this.setInfo.bind(this);
      this.requestInfo = this.requestInfo.bind(this);
   }

   onChange(event) {
      this.setState({
         searchVal: event.target.value,
      });
   }

   setInfo(obj) {
      this.setState({
         info: obj,
      });
   }

   async componentDidMount() {
      await this.requestInfo();
   }

   async requestInfo() {
      this.setState({
         loading: true,
      });
      const response = await fetch(
         'https://geo.ipify.org/api/v2/country,city?apiKey=at_S82266j6D5maQ6HSqE3hyShJn3LFF&ipAddress=' +
            this.state.searchVal
      );
      const body = await response.json();
      this.setState({
         info: this.buildObj(body),
         loading: false,
      });
   }

   buildObj(bodyResponse) {
      const obj = {
         ip: bodyResponse.ip,
         isp: bodyResponse.isp,
         utc: bodyResponse.location.timezone,
         location:
            bodyResponse.location.city + ', ' + bodyResponse.location.country,
         coordinates: {
            lat: bodyResponse.location.lat,
            lng: bodyResponse.location.lng,
         },
      };
      return obj;
   }

   render() {
      return (
         <main className="app">
            <header className="app__header">
               <h1>IP Address Tracker</h1>
               <SearchBar
                  val={this.state.searchVal}
                  onChange={this.onChange}
                  requestInfo={this.requestInfo}
               />
               <AddressInfo
                  info={this.state.info}
                  loading={this.state.loading}
               />
            </header>
            <LeafletManager
               coordinates={{
                  lat: this.state.info.coordinates.lat,
                  lng: this.state.info.coordinates.lng,
               }}
            />
         </main>
      );
   }
}
