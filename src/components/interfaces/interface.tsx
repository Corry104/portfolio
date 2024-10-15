export interface WeatherData {
    name: string
    state?: string
    country: string,
    list: [
        {
            dt: number,
            dt_txt: string,
            main: {
                humidity: number
                temp: number
            }
            weather: [
                {
                    main: string
                    icon: string
                    description: string
                }
            ]
            wind: {
                speed: number
            }
        }
    ]
    sunrise: number
    sunset: number

}

export interface SearchOptions {
    name: string,
    lat: number,
    lon: number,
    country: string,
    state: string
}

export interface AnimatedLettersProps {
    letters: any;
    message: any[];
    idx: number;
}

export interface FooterProps {
    theme: any,
}

export interface SLIDER {
    title: string,
    img: string[],
    width: number,
    height: number,
    url: string
}

export interface ModalParams {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void,
    btnText: string
}

export interface NavbarParams {
    theme: any,
    toggle: () => {}
}