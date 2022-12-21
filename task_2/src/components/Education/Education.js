import './Education.css';

const Education = ({items}) => {
    return (
        <article id="education">
            <h2>Education</h2>
            <h4>
                Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur quisque
            </h4>
            <p>
                Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam consequat
                maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat adipiscing
                vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
            </p>
            <dl>
                {items.map((item, index) => (
                    <div key={item.year}>
                        <dt>{item.year}
                            <div className="icon-circle">{index === items.length - 1 && <div></div>}</div>
                        </dt>
                        <dd>{item.description}</dd>
                    </div>
                ))}
            </dl>
        </article>
    );
};

export default Education;
