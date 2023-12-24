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
        },
        {
            title: 'Curso 4',
            content: 'Descripcion del curso 4',
            imageSrc: 'https://microsofters.com/wp-content/uploads/2022/05/Programando.webp'
        },
        {
            title: 'Curso 5',
            content: 'Descripcion del curso 5',
            imageSrc: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/01/mujer-programando-2191479.jpg?tf=1200x'
        },
        {
            title: 'Curso 6',
            content: 'Descripcion del curso 6',
            imageSrc: 'https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg?w=740&t=st=1703449832~exp=1703450432~hmac=bc3d614ac76b0267180942dd923824c3fe13372178ea7957d0b1400eb59e10b9'
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