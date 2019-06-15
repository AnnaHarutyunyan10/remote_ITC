import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Image from "./image";
import MainPhoto from "./mainPhoto";

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
        
        const m = [
        'http://bglibcdn.s3.amazonaws.com/assets/uploads/2017/05/How-to-Pray-for-America.png',
        'https://images-na.ssl-images-amazon.com/images/I/413B99K4NEL.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwJ9fO2ssjSBCnRIN_gvGhiKcc7CgyyrEOLXl0mmrbQ1uPUry',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHsBq4rfOSUzO0iN0s61PvG8iZszqM6NuVWNSwb72oJsTJslgvA'
        ];

        return (
            <div> 
                <MainPhoto link={m[0]} />                        
                <div className="container-fluid">
                    <div className="row">
                        {links.map(src => (                             
                            //src.map(tes => (                                                            
                                <div className="col-sm-4">
                                    <Image 
                                        //onClick={() => <p>anan</p>}
                                        className="my-image" 
                                        link={src}
                                        text={
                                            texts.map(tes => tes)                                            
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