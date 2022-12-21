import './Experience.css';

const Experience = ({experiences}) => {
    return (
        <article id="experience">
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <section key={index} className="expanded">
                    <h3>{experience.title}</h3>
                    <p>
                        <strong>{experience.startDate} - {experience.endDate}</strong> <br/>
                        {experience.description}
                    </p>
                </section>
            ))}
        </article>
    );
};

export default Experience;
