import 'react-slideshow-image/dist/styles.css'
import styles from './ProductSlideshow.module.css'

import { Slide } from "react-slideshow-image"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton } from "@mui/material";

interface Props {
    images: string[]
}

export const ProductSlideshow = ({ images }: Props) => {
    return (
        <Slide
            easing="ease"
            duration={ 999999 }
            indicators
            transitionDuration={ 300 }
            nextArrow={ 
                <IconButton 
                    size="small" 
                    sx={{ 
                        mr: 3 ,
                        backgroundColor: "primary.main",
                        '&:hover': {
                            backgroundColor: "primary.dark",
                        }
                    }}
                ><ChevronRightIcon color="secondary" fontSize="large"/></IconButton> }
            prevArrow={ 
                <IconButton 
                    size="small" 
                    sx={{ 
                        ml: 3 ,
                        backgroundColor: "primary.main",
                        '&:hover': {
                            backgroundColor: "primary.dark",
                        }
                    }}
                ><ChevronLeftIcon color="secondary" fontSize="large"/></IconButton> }
        >
            {images.map((path, index)=> (
                <div className={ styles['each-slide'] } key={index}>
                    <div style={{
                        'backgroundImage': `url(/products/${path})`,
                        'backgroundSize': 'cover',
                    }}>
                        {/* <span>{slideImage.caption}</span> */}
                    </div>
                </div>
            ))} 
        </Slide>
    )
}
