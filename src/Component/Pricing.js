import React from 'react';
import Header from './Header';
const Priceing=()=>{
    return (<React.Fragment>
      <Header />
         <section id="pricing" class="pricing-area">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="section-title text-center pb-10">
                    <h4 class="title">Our Pricing</h4>
                    <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                </div>
            </div>
        </div> 
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-7 col-sm-9">
                <div class="single-pricing mt-40">
                    <div class="pricing-header text-center">
                        <h5 class="sub-title">Basic</h5>
                        <span class="price">$ 199</span>
                        <p class="year">per year</p>
                    </div>
                    <div class="pricing-list">
                        <ul>
                            <li><i class="lni-check-mark-circle"></i> Carefully crafted components</li>
                            <li><i class="lni-check-mark-circle"></i> Amazing page examples</li>
                            <li><i class="lni-check-mark-circle"></i> Super friendly support team</li>
                            <li><i class="lni-check-mark-circle"></i> Awesome Support</li>
                        </ul>
                    </div>
                    <div class="pricing-btn text-center">
                        <a class="main-btn" href="#">GET STARTED</a>
                    </div>
                    <div class="buttom-shape">

                    </div>
                </div> 
            </div>
            
            <div class="col-lg-4 col-md-7 col-sm-9">
                <div class="single-pricing pro mt-40">
                    <div class="pricing-baloon">
                        <img src="assets/images/baloon.svg" alt="baloon" />
                    </div>
                    <div class="pricing-header">
                        <h5 class="sub-title">Pro</h5>
                        <span class="price">$ 399</span>
                        <p class="year">per year</p>
                    </div>
                    <div class="pricing-list">
                        <ul>
                            <li><i class="lni-check-mark-circle"></i> Carefully crafted components</li>
                            <li><i class="lni-check-mark-circle"></i> Amazing page examples</li>
                            <li><i class="lni-check-mark-circle"></i> Super friendly support team</li>
                            <li><i class="lni-check-mark-circle"></i> Awesome Support</li>
                        </ul>
                    </div>
                    <div class="pricing-btn text-center">
                        <a class="main-btn" href="#">GET STARTED</a>
                    </div>
                    <div class="buttom-shape">
                       
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-7 col-sm-9">
                <div class="single-pricing enterprise mt-40">
                    <div class="pricing-flower">
                        <img src="assets/images/flower.svg" alt="flower" />
                    </div>
                    <div class="pricing-header text-right">
                        <h5 class="sub-title">Enterprise</h5>
                        <span class="price">$ 799</span>
                        <p class="year">per year</p>
                    </div>
                    <div class="pricing-list">
                        <ul>
                            <li><i class="lni-check-mark-circle"></i> Carefully crafted components</li>
                            <li><i class="lni-check-mark-circle"></i> Amazing page examples</li>
                            <li><i class="lni-check-mark-circle"></i> Super friendly support team</li>
                            <li><i class="lni-check-mark-circle"></i> Awesome Support</li>
                        </ul>
                    </div>
                    <div class="pricing-btn text-center">
                        <a class="main-btn" href="#">GET STARTED</a>
                    </div>
                  
                </div> 
            </div>
        </div> 
    </div> 
</section>
</React.Fragment>)
}
export default Priceing;