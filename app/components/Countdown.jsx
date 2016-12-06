var React = require('react');
var Clock = require('Clock');
var ClockForm = require('ClockForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0) {
        this.setState({
          timerStatus: 'stopped'
        });
      }
    }, 1000);
  },
  handleSetTimer: function (seconds) {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function (status) {
    this.setState({
      timerStatus: status
    });
  },
  render: function () {
    var {count, timerStatus} = this.state;
    var renderControlArea = () => {
      if (timerStatus !== 'stopped') {
        return (
          <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
        );
      }   
      return (
        <ClockForm onSetTimer={this.handleSetTimer} />
      );
    }
    return (
      <div>
        <h1 className='page-title'>Countdown</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;