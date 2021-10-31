import style from './Announcment.module.css';

const Announcment = ({content}) => {
    return (
        <div className={style.container}>
            <h1 className={style.header}>{content.title}</h1>
            <p className={style.paragraph}>{content.content}</p>
            <h4 className={style.author}>By: {content.madeby}</h4>
        </div>
    )
}

export default Announcment
