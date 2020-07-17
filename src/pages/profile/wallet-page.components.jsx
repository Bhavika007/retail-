
import React from 'react'
import './profile-page.styles.scss'
import Axios from 'axios';
import Divider from '@material-ui/core/Divider';


export class WalletPage extends React.Component {
        constructor(props) {
              super(props);
              this.state = {
                
                 Wallet: []                
              };
             
      
          }
      
          componentDidMount(){
          
           this.getmywallet()
          };

        getmywallet = () => {
        Axios.get("http://localhost:8080/api/wallet").then(response => {
          console.log(response);
          this.setState({Wallet: response.data});
        });
      }

      render () {
        return (
          
         <div>

                <h2>
                Wallet Details
                <Divider/>
           </h2 >
              { this.state.Wallet.map((wallet) => (
             <div className="profile-wallet">
               <br/>
               {
                 wallet.walletId
                 }
                 <br/>
                 {
                         wallet.userId
                 }
                 <br/>
                 {
                   wallet.cardholderName
                   }
                   <br/>

               {
                 wallet.cardNumber
               }
               <br/>
               {
                 wallet.expiryDate
               }
               <br/>
               {
                 wallet.upi_id
               }
               <br/>
               <Divider variant="middle" />
             </div>
           )
           )}

        
          
           </div>
        );
    }
}
export default WalletPage;