import './Homepage.css';
import Skills from '../Skills/Skills.js';
import Experience from '../Experience/Experience.js';
import Education from '../Education/Education.js';

import {ReactComponent as Service1Svg} from './service_1.svg';
import {ReactComponent as Service2Svg} from './service_2.svg';
import {ReactComponent as Service3Svg} from './service_3.svg';
import {ReactComponent as Service4Svg} from './service_4.svg';

function Homepage() {
    return (
        <div>
            <article id="intro">
                <div>
                    <h1>Hello<br/>I'm John<br/>Doe</h1>
                    <p>
                        A full stack allaround designer that tristique est placerat in massa <strong>consectetur
                        quisque</strong> lobortis Vitae faucibus diam consequat maecenas turpis.
                    </p>
                    <a href="#">Download CV</a>
                </div>
                <img src="./images/author.png" alt="John Doe"/>
            </article>

            <article>
                <h2>About</h2>
                <h4>
                    Dolor sit amet, consectetur adipiscing elit viverra tristique placerat in massa consectetur
                    quisque
                </h4>
                <p>
                    Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus diam
                    consequat
                    maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet tristique volutpat
                    adipiscing
                    vulputate phasellus. Volutpat faucibus praesent ac lobortis aliquam dolor.
                </p>
            </article>

            <article id="services">
                <ul>
                    <li><Service1Svg/> Service name</li>
                    <li><Service2Svg/> Service name</li>
                    <li><Service3Svg/> Service name</li>
                    <li><Service4Svg/> Service name</li>
                </ul>
            </article>

            <Education
                items={[
                    {
                        year: 2022,
                        description: 'Placerat in massa consectetur quisque. ' +
                            'Nunc ac fames lectus in libero aliquet est setera nunc setera.'
                    },
                    {
                        year: 2024,
                        description: 'Turpis metus sit diam purus leo in varius ac quam. ' +
                            'Nunc amet tristique volutpat adipiscing vulputate phaselluse enim aliquam euismod mauris in vitae.'
                    },
                    {
                        year: 2026,
                        description: 'Nunc amet tristique volutpat adipiscing vulputate phasellus. ' +
                            'Eget enim aliquam euismod lorem ispum.'
                    },
                    {
                        year: 2028,
                        description: 'Eget enim aliquam euismod mauris in vitae viverra blandit ' +
                            'lectus faucibus diam consequat maecenas turpis metus sit.'
                    }
                ]}/>

            <Skills
                skills={[
                    {name: 'Photoshop', percentage: '62'},
                    {name: 'Illustrator', percentage: '84'},
                    {name: 'Marketing', percentage: '78'},
                    {name: 'Super Mario', percentage: '92'},
                    {name: 'Digital Painting', percentage: '58'},
                ]}
            />

            <Experience
                experiences={[
                    {
                        title: 'Team Leader',
                        startDate: '2019',
                        endDate: 'present',
                        description: 'Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. ' +
                            'Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. ' +
                            'Nunc amet tristique volutpat adipiscing vulputate phasellus. ' +
                            'Volutpat faucibus praesent ac lobortis aliquam dolor.',
                    },
                    {
                        title: 'Product Designer',
                        startDate: '2018',
                        endDate: '2019',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                            'Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ' +
                            'Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    },
                    {
                        title: 'Senior UX Designer',
                        startDate: '2017',
                        endDate: '2018',
                        description: 'Suspendisse varius enim in eros elementum tristique. ' +
                            'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. ' +
                            'Aenean faucibus nibh et just',
                    }]}
            />
        </div>
    );
}

export default Homepage;
