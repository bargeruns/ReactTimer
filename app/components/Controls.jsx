var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === 'started') {
        return (
          <button onClick={this.onStatusChange('paused')} className="button secondary">Pause</button>
        );
      }
      return (
        <button onClick={this.onStatusChange('started')} className="button primary">Start</button>
      );
    }
    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button onClick={this.onStatusChange('stopped')} className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;