import Collapse from '../../components/collapse';
import { aboutList } from '../../data/about';

function About() {
    return (
        <div className="about-container">
            <div className="about-header"></div>
            <div className="about-list">
                {aboutList.map(({ title, content }, index) => (
                    <Collapse title={title} content={content} key={index} />
                ))}
            </div>
        </div>
    );
}

export default About;
