import Annonces from '../../components/annonce';
import { logementList } from '../../data/logements';

function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1 className="home-header-title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="home-card">
                <ul className="home-card-list">
                    {logementList.map(({ id, cover, title }, index) => (
                        <Annonces cover={cover} title={title} id={id} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
