import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./footerTop.css";

class FooterTop extends Component {

    constructor(props) {
        super(props);
        this.block_1 = [
          'Design types',
          'Templates',
          'Icons',
          'Photos',
          'Ideas' 
        ];

        this.block_2 = [
            'Graphs',
            'Photo editing',
            'Print'
          ];

          this.block_3 = [
            'Anna',
            'Java',
            'Akus',
            'Sevada',
            'Anna Jan',
            'London',
            'Super',
            'JavaScript'
          ];

          this.block_4 = [
            'Anna',
            'Java',
            'Akus',
            'Sevada',
            'Anna Jan',
            'London',
            'Super',
            'JavaScript',
            'Kiki'
          ];

          this.block_5 = [
            'Anna',
            'Java',
            'Akus',
            'Sevada',
            'Anna Jan'
          ];

          this.block_6 = [
            'Anna',
            'Java',
            'Akus',
            'Sevada',
            'Anna Jan',
            'London',
            'Super'
          ];
    }
    
    render() { 
        return (  
                <footer className="bg-dark" >
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-2">
                                <p className="text-white">Browse</p>
                                {this.block_1.map((item) => <li className="links list-unstyled">
                                                                <a className="my-hover text-white text-muted" href="#" key={item}>{item}</a>
                                                            </li>)}
                            </div>
                            <div className="col-md-2">
                                <p className="text-white">Features</p>
                                {this.block_2.map((item) => <li className="links list-unstyled">
                                                                <a className="my-hover text-white text-muted" href="#" key={item}>{item}</a>
                                                            </li>)}
                            </div>
                            <div className="col-md-2">
                                <p className="text-white">Learn</p>
                                {this.block_3.map((item) => <li className="links list-unstyled">
                                                                <a className="my-hover text-white text-muted" href="#" key={item}>{item}</a>
                                                            </li>)}
                            </div>
                            <div className="col-md-2">
                                <p className="text-white">Resourses</p>
                                {this.block_4.map((item) => <li className="links list-unstyled">
                                                                <a className="my-hover text-white text-muted" href="#" key={item}>{item}</a>
                                                            </li>)}
                            </div>
                            <div className="col-md-2">
                                <p className="text-white">Product</p>
                                {this.block_5.map((item) =><li className="links list-unstyled">
                                                                <a className="my-hover text-white text-muted" href="#" key={item}>{item}</a>
                                                            </li>)}
                            </div>
                            <div className="col-md-2">
                                <p className="text-white">Company</p>
                                {this.block_6.map((item) => <li className="links list-unstyled">
                                                                <a className="my-hover text-white text-muted" href="#" key={item}>{item}</a>
                                                            </li>)}
                            </div>
                        </div>
                    </div>
                </footer>    
          
        );
    }
}

export default FooterTop;
