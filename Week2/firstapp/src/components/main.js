import '../assets/mystyle.css';
import laptop from '../assets/laptop.jpg';
const myStyle = {
    color: 'white',
    backgroundColor: 'grey',
    padding: '10px'
}
function Main() {
    const loggedIn = true;
    const handleclick = () => {
        alert('Button Clicked')
    }
    const myarray = [{ id: 1, name: 'user1' }, { id: 2, name: 'user2' }, { id: 3, name: 'user3' }]
    return (
        <div style={myStyle}>
            <h3>Main Component</h3>
            <button className='mybtn' onClick={handleclick}>{loggedIn ? 'logout' : 'login'}</button>
            <img src={laptop} height='100' />
            <ul>
                {
                    myarray.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Main;