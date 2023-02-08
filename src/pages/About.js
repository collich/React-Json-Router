import UseComponents from '../hooks/UseComponents'

const About = () => {
    const { AboutText } = UseComponents()

    return (
        <div>
            <h2>About Page</h2>
            <AboutText/>
        </div>
    )
}

export default About
