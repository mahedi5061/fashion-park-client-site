import React from 'react';
import './Admin.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
 
const Admin = () => {
    return (
        <div className="admin">
           
           <Navigation
                activeItemId="/management/members"
                
                items={[
                    {
                        title:'Manage Product',
                        itemId: '/manageproduct',
                         
                         
                    },
                     {
                        title: 'Add Product',
                        itemId: '/addproduct',
                         
                    } ,
                    {
                        title: 'Edit Product',
                        itemId: '/editproduct',
                         
                    },
                ]}
                />  
        </div>

    );
};

export default Admin;