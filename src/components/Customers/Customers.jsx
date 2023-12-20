import React, { useState } from 'react'
import './customer.css'
import logo from '../../Images/images.png'
import customerIcon from '../../Images/customers icon.png'
import customerPic from '../../Images/customer pic.png'
import { useNavigate } from 'react-router-dom'

function Customers() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");

    const handleClick = (e) => {
        e.preventDefault()
    }

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
                    <div className='AddNewCust w-60	h-11 ml-14 flex mt-8 	
                                 items-center justify-center font-semibold	'>
                        <h2 className='text-white hover:cursor-pointer'
                            onClick={handleClick}>
                            + ADD NEW CUSTOMER</h2>
                    </div>

                    <div className="table-auto mt-8 flex justify-center">
                        <table cellPadding={15} >
                            <tr className='tableHeadings 	h-1	   ' >
                                <th></th>
                                <th>Customer ID</th>
                                <th>Customer Name</th>
                                <th>Email</th>

                            </tr>
                            <tr className='text-xs	'>
                                <td><img src={customerPic} alt="" className='w-14	' /></td>
                                <td>001</td>
                                <td>Jordan Joseph</td>
                                <td colSpan={0}>randomemail@gmail.com</td>
                                <td><button>Edit</button> </td>
                                <td><button>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers