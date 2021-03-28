import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// default prop that will always populate if no header given
Header.defaultProps = {
    title: "Task Tracker Default",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// you can also style using const by adding a style={headingStyle} into tag
//const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black'
//}
export default Header