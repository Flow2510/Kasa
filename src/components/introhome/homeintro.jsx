import "./homeintro.scss";
import background from '../../assets/IMG.png'

export default function HomeIntro(){
    return(
        <section className="home-intro">
            <div className="home-intro__overlay"></div>
            <img className="home-intro__background" src={background} alt="paysage" />
            <h1 className="home-intro__title">Chez vous,<span className="home-intro__title-break"><br /></span> partout et ailleurs</h1>
        </section>
    )
}