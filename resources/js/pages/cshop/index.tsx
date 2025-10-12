import '../../../css/main.css';   

export default function CShop() {
    return ( 
        <div>
            <div className="navbar-top">
                <div className="side-nav-panel-left">
                    <a href="#" data-activates="slide-out-left" className="side-nav-left"><i className="fa fa-bars"></i></a>
                </div>
                
                <div className="site-brand">
                    <a href="index.html" className="das">
                        <h1><span>C</span>Shop</h1>
                    </a>
                </div>
                
                <div className="side-nav-panel-right">
                    <a href="#" data-activates="slide-out-right" className="side-nav-right"><i
                        className="fa fa-shopping-cart"></i><span>2</span></a>
                </div>
            </div>
            
            <div className="side-nav-panel-left">
                <ul id="slide-out-left" className="side-nav side-nav-panel">
                    <li><a href="index.html">
                        <h1><span>C</span>Shop</h1>
                    </a></li>
                    <li><a href="index.html"><i className="fa fa-home"></i>Home</a></li>
                    <li><a href="single-product.html"><i className="fa fa-eye"></i>Single Product</a></li>
                    <li><a href="cart.html"><i className="fa fa-shopping-cart"></i>Shopping Cart</a></li>
                    <li><a href="checkout.html"><i className="fa fa-credit-card"></i>Checkout</a></li>
                    <li><a href="blog.html"><i className="fa fa-bold"></i>Blog</a></li>
                    <li><a href="single-blog.html"><i className="fa fa-file-text-o"></i>Single Blog</a></li>
                    <li><a href="about-us.html"><i className="fa fa-user"></i>About Us</a></li>
                    <li><a href="contact.html"><i className="fa fa-envelope-o"></i>Contact Us</a></li>
                    <li><a href="login.html"><i className="fa fa-sign-in"></i>Login</a></li>
                    <li><a href="register.html"><i className="fa fa-user-plus"></i>Register</a></li>
                </ul>
            </div>
            

            <div className="side-nav-panel-right">
                <ul id="slide-out-right" className="side-nav side-nav-cart">
                    <li>
                        <div className="row">
                            <div className="col s5">
                                <img src="assets/img/cart1.png" alt="" />
                            </div>
                            <div className="col s5">
                                <div className="name-price">
                                    <ul>
                                        <li><a href="">T-shirt</a></li>
                                        <li><span>$23.00</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col s2">
                                <div className="remove">
                                    <a href=""><i className="fa fa-remove"></i></a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col s5">
                                <img src="assets/img/cart2.png" alt="" />
                            </div>
                            <div className="col s5">
                                <div className="name-price">
                                    <a href="">Jeans</a>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div className="col s2">
                                <div className="remove">
                                    <a href=""><i className="fa fa-remove"></i></a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="total-price">
                            <h5>TOTAL : $48.00</h5>
                        </div>
                    </li>
                    <li>
                        <div className="button-cart">
                            <a href="" className="btn button-default">CHECKOUT</a>
                            <a href="" className="btn button-default">GO TO CART</a>
                        </div>
                    </li>
                </ul>
            </div>
            

            <div className="slider">

                <ul className="slides">
                    <li>
                        <img src="assets/img/slide1.jpg" alt="" />
                            <div className="caption slider-content  center-align">
                                <h2>JACKETS ELEGANT</h2>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <a href="" className="btn button-default">SHOP NOW</a>
                            </div>
                    </li>
                    <li>
                        <img src="assets/img/slide2.jpg" alt="" />
                            <div className="caption slider-content center-align">
                                <h2>NEWS & MODERN</h2>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <a href="" className="btn button-default">SHOP NOW</a>
                            </div>
                    </li>
                    <li>
                        <img src="assets/img/slide3.jpg" alt="" />
                            <div className="caption slider-content center-align">
                                <h2>T-SHIRT CENTER</h2>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <a href="" className="btn button-default">SHOP NOW</a>
                            </div>
                    </li>
                </ul>

            </div>
            

            <div className="shop-promo">
                <div className="container">
                    <div className="row nomar-bottom">
                        <div className="col s12">
                            <div className="promo-content">
                                <img src="assets/img/shop-promo1.png" alt="" />
                                    <a href="">
                                        <h4>PROMO</h4>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="row nomar-bottom">
                        <div className="col s6 nopad-right">
                            <div className="promo-content">
                                <img src="assets/img/shop-promo3.png" alt="" />
                                    <a href="">
                                        <h4>T-SHIRT</h4>
                                    </a>
                            </div>
                        </div>
                        <div className="col s6 nopad-left">
                            <div className="promo-content">
                                <img src="assets/img/shop-promo2.png" alt="" />
                                    <a href="">
                                        <h4>OFFICIAL</h4>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="new-best-product-shop section-padding">
                <div className="container">
                    <div className="row  nomar-bottom">
                        <div className="col s12">
                            <ul className="tabs">
                                <li className="tab col s4"><a className="active" href="#new">
                                    <h3>NEW</h3>
                                </a></li>
                                <li className="tab col s4"><a href="#best-seller">
                                    <h3>BEST SELLER</h3>
                                </a></li>
                            </ul>
                            <div className="tabs-content">
                                <div id="new">
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="new-best-product-content">
                                                <img src="assets/img/tshirt_shop_2.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">T-shirt</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="new-best-product-content">
                                                <img src="assets/img/jackets_shop_1.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jackets</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="new-best-product-content">
                                                <img src="assets/img/jeans_shop_1.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jeans</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="new-best-product-content">
                                                <img src="assets/img/tshirt_shop_1.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">T-shirt</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="" className="btn button-default">VIEW MORE</a>
                                </div>
                                <div id="best-seller">
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="new-best-product-content">
                                                <img src="assets/img/jackets_shop_2.png" alt="2" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jackets</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="new-best-product-content">
                                                <img src="assets/img/jeans_shop_3.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jackets</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="new-best-product-content">
                                                <img src="assets/img/tshirt_shop_3.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">T-shirt</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="new-best-product-content">
                                                <img src="assets/img/jeans_shop_2.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jeans</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="" className="btn button-default">VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="promo-discount section-padding">
                <div className="container">
                    <h3>See product discount up to 80%</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <a href="" className="btn button-default">SEE NOW</a>
                </div>
            </div>
            

            <div className="product-shop section-padding">
                <div className="container">
                    <div className="row nomar-bottom">
                        <div className="col s12">
                            <ul className="tabs">
                                <li className="tab col s4"><a className="active" href="#jackets">
                                    <h3>Jackets</h3>
                                </a></li>
                                <li className="tab col s4"><a href="#t-shirt">
                                    <h3>T-shirt</h3>
                                </a></li>
                                <li className="tab col s4"><a href="#jeans">
                                    <h3>Jeans</h3>
                                </a></li>
                            </ul>
                            <div className="tabs-content">
                                <div id="jackets">
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/jackets_shop_1.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jackets</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/jackets_shop_2.png" alt="2" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jackets</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/jackets_shop_3.png" alt="3" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jackets</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/jackets_shop_4.png" alt="4" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jackets</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="" className="btn button-default">VIEW MORE</a>
                                </div>
                                <div id="t-shirt">
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/tshirt_shop_1.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">T-shirt</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/tshirt_shop_2.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">T-shirt</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/tshirt_shop_3.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">T-shirt</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/tshirt_shop_4.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">T-shirt</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="" className="btn button-default">VIEW MORE</a>
                                </div>
                                <div id="jeans">
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/jeans_shop_1.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jeans</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/jeans_shop_2.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jeans</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/jeans_shop_3.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jeans</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="product-content">
                                                <img src="assets/img/jeans_shop_4.png" alt="" />
                                                    <div className="product-cart">
                                                        <ul className="i-pro-top">
                                                            <li><a href=""><i className="fa fa-heart"></i></a></li>
                                                            <li><a href=""><i className="fa fa-exchange"></i></a></li>
                                                            <li><a href=""><i className="fa fa-eye"></i></a></li>
                                                        </ul>
                                                        <ul className="i-pro-bottom">
                                                            <li><a href=""><i className="fa fa-shopping-cart"></i><span>ADD TO
                                                                CART</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-details">
                                                        <h5><a href="">Jeans</a></h5>
                                                        <h4><a href="">$15</a></h4>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="" className="btn button-default">VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <div className="container">
                    <div className="about-us-foot">
                        <h6><span>C</span>Shop</h6>
                        <p>is a lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="social-media">
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-google"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                        <a href=""><i className="fa fa-instagram"></i></a>
                    </div>
                    <div className="payment">
                        <ul>
                            <li><img src="assets/img/paypal.png" alt="" /></li>
                            <li><img src="assets/img/mastercard.png" alt="" /></li>
                            <li><img src="assets/img/americanexpress.png" alt="" /></li>
                            <li><img src="assets/img/visaelectron.png" alt="" /></li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <span>© 2026 CollabStudioOnline All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div> 
    );
}