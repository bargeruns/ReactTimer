var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when countdown started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls timerStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pausebutton = $el.find('button:contains(Pause)');

      expect($pausebutton.length).toBe(1);
    });
    it('should render start button when countdown paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls timerStatus='paused'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startbutton = $el.find('button:contains(Start)');

      expect($startbutton.length).toBe(1);
    });
  });
});