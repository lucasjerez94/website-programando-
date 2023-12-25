import {Cards} from '../atoms/Cards';

export const Main = () => {

    const cardsData = [
        {
            title: 'Programacion Back-End',
            content: 'Se desarrollan habilidades especializadas en la arquitectura interna de un sitio web o una aplicacion movil',
            imageSrc: 'https://www.lavanguardia.com/andro4all/hero/2020/09/Desarrollo-de-juegos-para-Android.jpg?width=768&aspect_ratio=16:9&format=nowebp'
        },
        {
            title: 'Programacion Front-End',
            content: 'Se desarrollan habilidades que se encargan de que un sitio web sea atractivo para el usuario y, al mismo tiempo, que funcione correctamente',
            imageSrc: 'https://i.blogs.es/3818bd/programacion/450_1000.jpg'
        },
        {
            title: 'Programacion Full-Stack',
            content: 'Aprenderas habilidades para poder ser contratado para puestos de dirección de desarrollo, donde puedas organizar y entender el proceso de ambos campos de la programación web, tanto para empresas pequeñas como para grandes.',
            imageSrc: 'https://municipalidadsalta.gob.ar/wp-content/uploads/2022/03/screenshot-45.jpg'
        },
        {
            title: 'Data Analyst',
            content: 'Desarrollar análisis completos de los datos extraídos. Presentar datos dentro y fuera de su propio departamento. Comunicar de manera efectiva los resultados obtenidos para que el resto de los trabajadores comprendan dichos datos. Descubrir oportunidades y debilidades detrás de los datos.',
            imageSrc: 'https://microsofters.com/wp-content/uploads/2022/05/Programando.webp'
        },
        {
            title: 'Data Science',
            content: 'Un Data Scientist es el profesional que, ante enormes bases de datos, la mayor parte de ellos desestructurados, aplica sobre ellas sus conocimientos en programación, matemáticas y estadística para recopilar, extraer y procesar información relevante que contienen.',
            imageSrc: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/01/mujer-programando-2191479.jpg?tf=1200x'
        },
        {
            title: 'Programacion Base de Datos SQL',
            content: 'Están a cargo de crear sistemas de bases de datos para almacenar y recuperar datos de la compañía. Un desarrollador de SQL utiliza la gestión avanzada de datos y la experiencia tecnológica para proteger la seguridad de los sistemas, evitando el acceso no deseado que podría poner en peligro la reputación de la empresa.',
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