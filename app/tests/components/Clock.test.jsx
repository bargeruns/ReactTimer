var $ = require('jQuery');
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('clock component tests', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
});

describe('formatSeconds', () => {
  it('should format second', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);

    var seconds = 615;
    var expected = '10:15';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });

  it('should format seconds when min/sec < 10', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 61;
    var expected = '01:01';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });
});