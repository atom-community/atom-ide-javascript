describe("Benchmark", () => {
  // This number doesn't match what timecope gives, but shows the trend
  it("Activation Benchmark", async function () {
    jasmine.attachToDOM(atom.views.getView(atom.workspace));
    atom.packages.triggerDeferredActivationHooks();
    // Activate activation hook
    atom.packages.triggerActivationHook("core:loaded-shell-environment");
    // Activate the package
    await atom.packages.activatePackage("atom-ide-markdown-service");
    measure("Activation Time", async function activationBenchmark() {
      await atom.packages.activatePackage("atom-ide-template-js");
    });

    expect(atom.packages.isPackageLoaded("atom-ide-template-js")).toBeTruthy();
  });
});
