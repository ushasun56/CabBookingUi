import React, { Component } from 'react'
import { connect } from 'react-redux';

import PropTypes from "prop-types";
import Customeritem from './Customeritem';
import { getCustomers } from '../../actions/CustomerAction';

 class AllCustomer extends Component {
    componentDidMount()
    {
        this.props.getCustomers();
        
    }
   render() {
       const {customers} = this.props.customers;
       return (
           <div className="projects">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                       <br />
                       <br />
                       <br />
                      
                         <h1 className="display-4 text-center"> All Customers Details</h1>
                           <br />

                         
                           

                           <br />

                           <hr />
                          { customers.map(customer =>(
                              <Customeritem key={customer.id} customer={customer}/>
                          )

                          )

                          }
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}
AllCustomer .propTypes = {
    customers:PropTypes.object.isRequired,
   getCustomers:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    customers:state.customers
});

export default connect(mapStateToProps, { getCustomers })( AllCustomer );
