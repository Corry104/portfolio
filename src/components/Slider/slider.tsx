import Slider from "react-slick";
import './slider.scss';
import { SLIDER } from '../../utils/interfaces/interface';


export const Carousel: React.FC<SLIDER> = (params: SLIDER) => {
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
        <section className={`row align-center`}>
            <p className={`slider-container`}>
                <h1>{title}</h1>
                <Slider {...settings} >
                    {img.length > 0 ?
                        img.map((el: any, index:number) => {
                            return (
                                <p key={index}>
                                    <img className={`img-spacing`} src={el} alt={`img_${index}`} width={width} height={height} />
                                </p>
                            )
                        }) : null
                    }
                </Slider>
            </p>
        </section>
    )
}