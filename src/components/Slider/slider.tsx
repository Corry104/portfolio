import Slider from "react-slick";
import './slider.scss';

/** Defined props for Carousel */
interface Params {
    title: string,
    img: string[],
    width: number,
    height: number,
    url: string
}


export const Carousel: React.FC<Params> = (params: Params) => {
    const { title, img, width, height, url } = params;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className={`row align-center`}>
            <div className={`slider-container`}>
                <a href={url} target="_blank" rel="noopener noreferrer" className={`url text`}><h1>{title}</h1></a>
                <Slider {...settings} >
                    {img.length > 0 ?
                        img.map((el: any, index:number) => {
                            return (
                                <div key={index}>
                                    <img className={`img-spacing`} src={el} alt={`img_${index}`} width={width} height={height} />
                                </div>
                            )
                        }) : null
                    }
                </Slider>
            </div>
        </div>
    )
}