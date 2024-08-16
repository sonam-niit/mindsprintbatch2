import {PropTypes} from 'prop-types';
function Greeting({name,message}) {
    // const {name,message}=props
    // const name = props.name;
    // const msg = props.message;
    return (
        <>
            <h3>{name?name:'Guest'} {message?message:'Welcome'}</h3>
        </>
    );
}
Greeting.propTypes={
    name:PropTypes.string.isRequired,
    message:PropTypes.string.isRequired
}
export default Greeting;
// Greeting.defaultProps={
//     name:"Guest",
//     message:"Welcome"
// }