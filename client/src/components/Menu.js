import React, { Component } from 'react'
import Pic2 from '../img/IMG_8562.JPG'

import Pic3 from '../img/IMG_5113.jpg'
import Pic4 from '../img/IMG_5131.jpg'



export default class Menu extends Component {
    render() {
        return (
            <div>
                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex ml-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-lower">Tangiers</span>
                                        <span className="section-heading-upper">$26.99 (refills $8.00)</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={Pic2} alt="" />
                            <div className="product-item-description d-flex mr-auto">

                                <div className="bg-faded p-5 rounded" id="broken-broken">

                                    <p id="tangiers"></p>


                                    <ul className="menuLeft">
                                        <li>CANE MINT</li>
                                        <li>ORANGE SODA</li>
                                        <li>KASHMIR PEACH</li>
                                        <li>BLUE FLOWER</li>
                                        <li>FOREPLAY ON THE PEACH</li>
                                        <li>PINEAPPLE</li>
                                        <li>STRAWBERRY</li>
                                        <li>WATERMELON</li>
                                        <li>BLUEBERRY</li>


                                    </ul>

                                    <ul className="menuRight">
                                        <li>EXPERIMINT</li>
                                        <li>"NOW WITH MELON"</li>
                                        <li>MELON BLEND</li>
                                        <li>GUAJAVA KISS</li>
                                        <li>WHITE GRAPE</li>
                                        <li>PEAR</li>
                                        <li>STRAWBERRY-KIWI</li>
                                        <li>PEACH ICED TEA</li>
                                        <li>RASPBERRY</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex mr-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-lower">Fumari</span>
                                        <span className="section-heading-upper">25.99 (refills $8.00)</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={Pic3} alt="" />
                            <div className="product-item-description d-flex ml-auto">
                                <div className="bg-faded p-5 rounded" id="broken-broken-broken">



                                    <p id="fumari"></p>
                                    <ul className="menuLeft">
                                        <li>SPICED CHAI</li>
                                        <li>MINT CHOCOLATE CHILL</li>
                                        <li>LEMON MINT</li>
                                        <li>BLUEBERRY MUFFIN</li>
                                        <li>FRENCH VANILLA</li>
                                        <li>TANGELO</li>


                                    </ul>

                                    <ul className="menuRight">
                                        <li>WHITE PEACH</li>
                                        <li>WHITE GUMMI BEAR</li>
                                        <li>RED GUMMI BEAR</li>
                                        <li>AMBRIOSIA</li>
                                        <li>PRICKLY PEAR</li>
                                        <li>WATERMELON</li>


                                    </ul>





                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex ml-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-lower">Starbuzz &amp; Al Fakher</span>
                                        <span className="section-heading-upper">$25.99 (refills $8.00)</span>

                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={Pic4} alt="" />
                            <div className="product-item-description d-flex mr-auto">
                                <div className="bg-faded p-5 rounded" id="broken">



                                    <p id="starbuzz"></p>
                                    <ul className="menuLeft">
                                        <li>BLUE MIST</li>
                                        <li>PUMPKIN PIE</li>
                                        <li>PINA COLADA</li>
                                        <li>SAFARI MELON DEW</li>
                                        <li>GUAVA</li>
                                        <li>TANGERINE DREAM</li>
                                    </ul>



                                    <p id="alfakher"></p>
                                    <ul className="menuRight">
                                        <li>BUBBLE GUM</li>
                                        <li>GUM WITH MINT</li>
                                        <li>ORANGE</li>
                                        <li>KIWI</li>
                                        <li>GRENADINE</li>
                                        <li>WATERMELON</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
