import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Image from "./image";

class Gallery extends Component {
    render() {
        const links = [
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg',
                          'https://i.pinimg.com/originals/11/a1/23/11a123b51a5dda28f7eb084eebcf1388.jpg'                     
                      ];   
        const texts = [
                          'text 1', 'text 2', 'text 3', 'text 4', 'text 5', 'text 6'
                      ];      
        

        return (
            <div>            
                <div className="container-fluid">
                    <div className="row">
                        {links.map(src => (                             
                            //src.map(tes => (                                                            
                                <div className="col-sm-4">
                                    <Image 
                                        className="my-image" 
                                        link={[src]}
                                        text={
                                            texts.map(tes => [tes])                                            
                                            } 
                                        //text={[tes]} 
                                        key={src} 
                                    /> 
                                </div>                          
                            //))                         
                        ))}  
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Gallery;