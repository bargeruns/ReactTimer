var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetTimer', () => {
    it('should set state to started and start countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetTimer(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should stop countdown at zero', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetTimer(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

    it('should stop counting while paused', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetTimer(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop count when stopped', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetTimer(3);
      countdown.handleStatusChange('stopped');

      setTimeout(()=> {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});