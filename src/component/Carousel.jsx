import React,{useState} from 'react'
import {images} from './data'
import './carousel.css'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

export default function Carousel() {
    const [currentImage,setCurrentImage] = useState(0)
    const handleImageChange = (index)=>{
        if(index<images.length){
            setCurrentImage(index)
        }
        else{
            setCurrentImage(0)
        }
        if(index<0){
            setCurrentImage(images.length-1)
        }
    }
    return (
        <div>
            <div className='carousel-container'>
                <button onClick={()=>handleImageChange(currentImage-1)}>
                    <AiOutlineArrowLeft size="36px" color="#4CAF50"/>
                </button>
                <img src={images[currentImage]} alt={`${currentImage+1}`} width="70%" height="70%"/>
                <button onClick={()=>handleImageChange(currentImage+1)}>
                    <AiOutlineArrowRight size="36px" color="#4CAF50"/>
                </button>
            </div>
            <div className="circles-container">
                {images.map((key,index)=>{
                    return <span className={`${currentImage===index?"circle-active":"circle"}`} onClick={()=>handleImageChange(index)}>{index+1}</span>   
                })}
            </div>
        </div>
        
    )
}
