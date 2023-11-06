import React from 'react'
import './customer.css'
import logo from '../../Images/images.png'
import customerIcon from '../../Images/customers icon.png'
function Customers() {
    return (
        <div className='w-screen h-screen flex main' >
            <div className="sidebar" >
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className='headingLogo'>
                    <img src={customerIcon} alt="" />
                    <h2 className='cust1'>CUSTOMERS</h2>
                </div>
            </div>

            <div className="section w-full " >
                <div className="cust2	h-28    text-3xl    flex items-center		
                                font-bold 	bg-white    pl-14		" >
                    <h1>CUSTOMERS</h1>
                </div>

                <div className='custWithTable'>
                    <div className='AddNewCust w-60	h-11 ml-14 flex mt-8 text-white	
                                 items-center justify-center font-semibold	'>
                        <h2>+ ADD NEW CUSTOMER</h2>
                    </div>

                    <div className="table border-black">
                        <table cellPadding={10} cellSpacing={10}>
                            <tr>
                                <th></th>
                                <th>Customer ID</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>Image</td>
                                <td>001</td>
                                <td>Jordan Joseph</td>
                                <td>randomemail@gmail.com</td>
                                <td><button>Edit</button> <button>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers