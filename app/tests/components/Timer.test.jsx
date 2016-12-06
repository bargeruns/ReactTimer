var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handle set timer', () => {
    it('should set status to started and begin counting', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer();

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        done();
      }, 3001);
    });

    it('should stop counting while paused', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer();
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 2000);
    });

    it('should stop and reset timer when stopped', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer();
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 2000);
    });
  });

});