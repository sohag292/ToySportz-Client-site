import React from 'react'
import firstProduct from '../../assets/image/firstproduct.png'
import secondProduct from '../../assets/image/B49F7840_1.jpg'
import ThirdProduct from '../../assets/image/Babytoys.jpg'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


export default function OurBestProduct() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

        <div class="bg-light py-5 mb-4">
            <div class=" container" >
                <h1 class="text-center pb-5">Our Best Product</h1>
                <div data-aos="zoom-in-left" class="row row-cols-1 row-cols-md-3 g-4">
                    <div  class="col h-100">
                        <div class="card">
                            <img src={firstProduct} class="card-img-top w-50 d-block mx-auto p-2" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title pt-2">Fisher-Price Deluxe Kick 'n Play Piano Gym</h5>
                                <p class="card-text">The Fisher-Price Deluxe Kick 'n Play Piano Gym is a versatile and interactive play gym for babies. It features a musical piano with colorful keys that can be kicked or touched by the baby to create music.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={secondProduct} class="card-img-top w-50 d-block mx-auto p-2" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title pt-2">Fisher-Price Rock-a-Stack Rings</h5>
                                <p class="card-text">The Fisher-Price Rock-a-Stack Rings is a classic and beloved toy for babies. It consists of colorful rings that can be stacked on a wobbly base. This toy helps develop hand-eye coordination</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={ThirdProduct} class="card-img-top w-50 d-block mx-auto p-2" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title pt-2">B. toys B. One Two Squeeze Blocks</h5>
                                <p class="card-text">B. toys B. One Two Squeeze Blocks are a set of colorful, soft blocks designed for babies and toddlers. Each block features numbers, animals, and different textures, providing a multi-sensory experience.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
