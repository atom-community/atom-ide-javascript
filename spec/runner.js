/** @babel */
import { createRunner } from "atom-jasmine3-test-runner";
import pkg from "../package.json";

// https://github.com/UziTech/atom-jasmine3-test-runner#api
export default createRunner({
  testPackages: Array.from(pkg["package-deps"]),
  timeReporter: true,
  specHelper: {
    atom: true,
    ci: true,
    attachToDom: true,
    // Extra Packages
    customMatchers: true,
    jasmineFocused: false,
    jasmineJson: false,
    jasminePass: false,
    jasmineShouldFail: false,
    jasmineTagged: false,
    mockClock: true,
    mockLocalStorage: false,
    profile: true,
    unspy: false,
  },
});
