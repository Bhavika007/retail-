import React from 'react'
import './profile-page.styles.scss'
import Axios from 'axios';
import Divider from '@material-ui/core/Divider';



 export class ProfilePage extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
         
            User: []              
        };
       

    }

    componentDidMount(){
     this.getmydata();
    };
getmydata = () => {
  Axios.get(`http://localhost:8080/api/user`)
  .then(response => {
    console.log(response.data);
    this.setState({User: response.data});
    
  });
}
 
    
    
    render () {

      const {User} = this.state
        return (
          
         <div>
           <h2>
                Account Details
               
           </h2 >
             { this.state.User.map((user) => (
             <div className="profile-user">
              <br/>
               {

                 user.userid
                 }
                 <br/>
                 {
                   user.firstName
                   }
                   <br/>

               {
                 user.lastName
               }
               <br/>
               {
                 user.email
               }
               <br/>
               {
                 user.mobile
               }
               <br/>
               
                <Divider variant="middle" />
             </div>
           )
           )} 
            
              {/* {
                this.state.User.map(temp => {
                 return (
                   {temp.firstName } <br/>


                    temp.lastName 
                    temp.email)
                })
              }
             */}
         
          
           </div>
        );
    }

    
}
export default ProfilePage;