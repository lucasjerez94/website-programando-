export const Cards = ({title, content,imageSrc}) => {
    return(
        <div className="cards">
            <img className="card-image" src={imageSrc} alt={title}/>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{content}</p>
        </div>
    );
};