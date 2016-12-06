var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var ClockForm = require('ClockForm');

describe('clock form tests', () => {
  it('should exist', () => {
    expect(ClockForm).toExist();
  });

  it('should call onSetTimer if valid seconds entered', () => {
    var spy = expect.createSpy();

    var clockForm = TestUtils.renderIntoDocument(<ClockForm onSetTimer={spy} />);
    var $el = $(ReactDOM.findDOMNode(clockForm));

    clockForm.refs.seconds.value = '121';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(121);
  });

  it('should not call onSetTimer if invalid seconds entered', () => {
    var spy = expect.createSpy();

    var clockForm = TestUtils.renderIntoDocument(<ClockForm onSetTimer={spy} />);
    var $el = $(ReactDOM.findDOMNode(clockForm));

    clockForm.refs.seconds.value = 'thisisnotanumber';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});