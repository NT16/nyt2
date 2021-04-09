const Navbar = ({ getPrevious, getNext, showList, previous, next}) => {
    return (
      <div className='nav-books'>
        <div className="row">
          <button className="col-md-4" onClick={getPrevious} disabled={ previous.length === 0 }>
            Previous
          </button>
          <button className="col-md-4" onClick={showList}>
            Home
          </button>
          <button className="col-md-4" onClick={getNext} disabled={ next.length === 0 }>
            Next
          </button>
        </div>
  
        <div className="row">
          <p className="col-md-4">  {previous} </p>
          <p className="col-md-4"> </p>
          <p className="col-md-4"> {next} </p>
        </div>
      </div>
    );
}

export default Navbar;