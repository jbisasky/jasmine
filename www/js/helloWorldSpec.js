'use strict'

var helloWorld = function() {
	//var date = moment().format('dddd');
	//return date;
	return "Hello World!";	
};

describe("Hello world", function() {
  it("should return hello world", function() {
	expect(helloWorld()).toEqual("Hello World!");
  });
});