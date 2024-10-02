import Slider from "react-slick";
import styles from './slider.module.scss';

/** Defined props for Carousel */
interface Params {
    title: string,
    img: string[],
    width: number,
    height: number,
    url: string
}


export const Carousel: React.FC<Params> = (params:Params) => {
    const {title, img, width, height, url} = params;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className={`row align-center`}>
        <div className={`${styles['slider-container']}`}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={`${styles['url']} text`}><h1>{title}</h1></a> 
            <Slider {...settings} >
                {img.length > 0 ?
                    img.map((el:any) => {
                        return (
                            <div >
                                <img className={`${styles['img-spacing']}`} src={el} alt="" width={width} height={height} />
                            </div>
                        )
                    })

                : null
                }
            </Slider>
        </div>
    </div>
    )
}