import './Portfolio.css';

const Portfolio = ({sections}) => {
    return (
        <article id="portfolio">
            <h2>Portfolio</h2>
            <div>
                {sections.map((section, index) => (
                    <section key={index}>
                        <p>
                            {section.images.map((image, imageKey) => (
                                <img key={imageKey} src={image} alt="Portfolio image"/>
                            ))}
                        </p>
                        <h3>{section.title}</h3>
                    </section>
                ))}
            </div>
        </article>
    );
};

export default Portfolio;