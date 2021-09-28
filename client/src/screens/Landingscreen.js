import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration:2000
});
function Landingcreen() {



    return (

        <div className='row landing' >
           
            <div className='col-md-9 my-auto text-center' style={{borderRight:'8px solid white'}}>
                <h2 data-aos="zoom-in" style={{color:'white',fontSize:'130px'}}>Sharm Bride</h2>
                <h1  data-aos="zoom-in-up" style={{color:'white'}}>There is only one boss. The Guest.</h1>
                <Link to='/home'>
                <button className='btn btn-primary'>Get Started</button>
                </Link>

            </div>
            
            <div className='col-md-2'>
                <img data-aos="zoom-in-left" src='https://images.oyoroomscdn.com/uploads/hotel_image/106817/medium/c2e4e450275d5d6c.jpg' className='smallimg' />
                <img src='https://images.oyoroomscdn.com/uploads/hotel_image/109276/large/45c97567d5b35acb.jpg' className='smallimg'  style={{paddingTop:'10px'}}/>
                <img src='https://images.oyoroomscdn.com/uploads/hotel_image/106817/medium/c2e4e450275d5d6c.jpg' className='smallimg'  style={{paddingTop:'10px'}}/>
            </div>
            
            

        </div>
    )
}

export default Landingcreen