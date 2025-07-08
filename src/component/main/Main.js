import Article from '../article/Article';
import Intro from '../intro/Intro';
import './main.scss';

function Main() {
    return(
        <>
            <main className='main'>
                <Intro />
                <section className='main__logement-grid'>
                    <Article />
                </section>
            </main>
        </>
    )
}

export default Main;