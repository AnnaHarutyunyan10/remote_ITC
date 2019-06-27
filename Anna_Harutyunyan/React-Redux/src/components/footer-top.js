import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '.././styles/footer.css'
 
class FooterTop extends Component {

    onClick = () => {
            console.log('click');
    }

    render () { 
        return (
            <footer className="my-footer-top-bg p-4 pl-5">           
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-4 col-sm-6 text-md-left">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a href="https://web.facebook.com/Starbucks/" className="btn-floating btn-sm btn-fb mx-1 text-dark"><i className="fa fa-facebook my-icon-hover"></i></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/starbucks" className="btn-floating btn-sm btn-tw mx-1 text-dark"><i className="fa fa-twitter my-icon-hover"> </i></a></li>
                                <li className="list-inline-item"><a href="https://plus.google.com/117575809843355974839/" className="btn-floating btn-sm btn-gplus mx-1 text-dark"><i className="fa fa-google-plus my-icon-hover"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/starbucks/" className="btn-floating btn-sm btn-li mx-1 text-dark"><i className="fa fa-linkedin my-icon-hover"> </i></a></li>
                                <li className="list-inline-item"><a href="https://www.pinterest.com/starbucks/" className="btn-floating btn-sm btn-dribbble mx-1 text-dark"><i className="fa fa-dribbble my-icon-hover"> </i></a></li>
                            </ul> 
                        </div>
                        <div class="col-md-8 col-sm-6 text-dark">  
                            <p>Join our email list</p>                                        
                            <form className="form-inline" action="/action_page.php">                                
                                <input type="email" 
                                       className="form-control w-50 mr-3" 
                                       placeholder="Email address"  required />
                                <input type="text" 
                                       className="form-control w-25 mr-3" 
                                       placeholder="Zip code"  required />
                                <input type="button" 
                                       onClick={this.onClick}
                                       className="btn-dark rounded text-white border-0 px-3 py-2" 
                                       value="GET STARTED" />
                            </form>  
                            <p className="mt-3">
                                By clicking "GET STARTED" I agree to receive news, promotions, information, and offers from Starbucks. See our
                                <span>
                                    <a href="#" 
                                       className="font-weight-bold text-dark border border-top-0 border-right-0 border-left-0  border-dark text-decoration-none " >
                                       Privacy Statement
                                    </a>
                                </span> and
                                <span>
                                    <a href="#" 
                                       className="font-weight-bold text-dark border border-top-0 border-right-0 border-left-0  border-dark text-decoration-none " >
                                        Customer Service.
                                    </a>
                                </span>
                            </p>                              
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterTop;