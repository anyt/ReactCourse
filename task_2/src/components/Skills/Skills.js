import './Skills.css';

const Skills = ({skills}) => {
    return (
        <article id="skills">
            <h2>Skills</h2>

            <dl>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <dt style={{width: `calc(${skill.percentage}% - 100px)`}}>{skill.name}</dt>
                        <dd>{skill.percentage}%</dd>
                    </div>
                ))}
            </dl>
        </article>
    );
};

export default Skills;
