const starshipDemo = require("starship-demo");

describe("Mothership Demo", function () {
	it("has a starship with the version 0.1.1", function () {
		expect(starshipDemo()).toBe("0.1.1");
	});
	
	it("does not have a starship with the version 0.2.1", function () {
		expect(starshipDemo()).not.toBe("0.2.1");
	});
});
