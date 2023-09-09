
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const NotFound = () =>{
  return (
    <div className="container">
      <h1>This page does not Exists.</h1>
      
        <Link to="/"> <button className='btn btn-primary'> Back Home </button></Link>
      
    </div>
  );
}

export default NotFound;