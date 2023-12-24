import {Cards} from '../atoms/Cards';

export const Main = () => {

    const cardsData = [
        {
            title: 'Curso 1',
            content: 'Descripcion del curso 1',
            imageSrc: 'https://www.lavanguardia.com/andro4all/hero/2020/09/Desarrollo-de-juegos-para-Android.jpg?width=768&aspect_ratio=16:9&format=nowebp'
        },
        {
            title: 'Curso 2',
            content: 'Descripcion del curso 2',
            imageSrc: 'https://i.blogs.es/3818bd/programacion/450_1000.jpg'
        },
        {
            title: 'Curso 3',
            content: 'Descripcion del curso 3',
            imageSrc: 'https://municipalidadsalta.gob.ar/wp-content/uploads/2022/03/screenshot-45.jpg'
        }
    ]

    return(
        <div className="main">
            <p className="p-main">Nuestros cursos</p>
            <div className="templatecard">
                {cardsData.map((card, index) => (
                    <Cards key={index} {...card} />
                ))}
            </div>
        </div>
    );
};