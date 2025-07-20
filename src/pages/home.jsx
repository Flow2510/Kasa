import Gallery from "../components/gallery/gallery";
import HomeIntro from "../components/introhome/homeintro";
import "./home.scss";

export default function Home(){
    return(
        <main className="main">
            <HomeIntro />
            <Gallery />
        </main>
    )
}