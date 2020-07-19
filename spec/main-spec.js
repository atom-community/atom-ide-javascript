describe("tests", () => {
  beforeEach(async () => {
    jasmine.attachToDOM(atom.views.getView(atom.workspace));

    /*    Activation     */
    // Trigger deferred activation
    atom.packages.triggerDeferredActivationHooks();
    // Activate activation hook
    atom.packages.triggerActivationHook("core:loaded-shell-environment");
    // Activate package-deps
    await atom.packages.activatePackage("atom-ide-markdown-service");
    // Activate the package
    await atom.packages.activatePackage("atom-ide-template-js");
  });

  it("Activation", async function () {
    expect(atom.packages.isPackageLoaded("atom-ide-template-js")).toBeTruthy();
  });
});
