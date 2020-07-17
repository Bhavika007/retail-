import React from 'react'
import './profile-page.styles.scss'
import Axios from 'axios';
import Divider from '@material-ui/core/Divider';
export class AddressPage extends React.Component {
        constructor(props) {
              super(props);
              this.state = {
                
                    Address: []             
              };
             
      
          }
      
          componentDidMount(){
           
           this.getmyaddress()
           
          };



getmyaddress = () => {
        Axios.get("http://localhost:8080/api/address").then(response => {
          console.log(response);
          this.setState({Address: response.data});
        });
      }

      render () {
        return (
          
         <div>

                <h2>
                Address Details
                <Divider/>
           </h2 >
              { this.state.Address.map((address) => (
             <div className="profile-address">
               <br/>
               {
                 address.addressid
                 }
                 <br/>
                 {
                         address.userId
                 }
                 <br/>
                 {
                   address.addressLine1
                   }
                   <br/>
               {
                  address.addressLine2
               }
               <br/>
               {
                 address.city
               }
               <br/>
               {
                 address.zipcode
               }
               <br/>
               {
                 address.state
               }
               <br/>
               {
                 address.country
               }
                <Divider variant="middle" />
             </div>
             
           )
           )}

          
          
           </div>
        );
    }
    
}
export default AddressPage;