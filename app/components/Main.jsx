var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <Nav/>
        <p>Main.jsx rendered</p>
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;