//we can use a stateless functional component instead of a class
//as the component need not have any variables or helper functions

//this.props.totalCounters work in case of classes
//in SFCs we need to pass the props obj as an arfument to the SFC

const Navbar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <span className="navbar-brand">
          Counter App
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
