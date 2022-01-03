import React from 'react';
import IMG from '../assets/images/call-to-action.png';
import Header from './Header';
const Action =()=>{
    return<React.Fragment>  
        <Header />
        <section id="call-to-action" class="call-to-action">
    <div class="call-action-image">
        <img src={IMG} alt="call-to-action" />
    </div>
    
    <div class="container-fluid">
        <div class="row justify-content-end">
            <div class="col-lg-6">
                <div class="call-action-content text-center">
                    <h2 class="call-title">Curious to Learn More? Stay Tuned</h2>
                    <p class="text">You let us know whenever you want us to update anything or think something can be optimised.</p>
                    <div class="call-newsletter">
                        <i class="lni-envelope"></i>
                        <input type="text" placeholder="john@email.com" />
                        <button type="submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
</section>
</React.Fragment>
}
export default Action;