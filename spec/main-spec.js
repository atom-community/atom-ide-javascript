describe("tests", () => {
  beforeEach(async () => {
    jasmine.attachToDOM(atom.views.getView(atom.workspace))

    /*    Activation     */
    // Trigger deferred activation
    atom.packages.triggerDeferredActivationHooks()
    // Activate activation hook
    atom.packages.triggerActivationHook("language-javascript:grammar-used")
    // Activate the package
    await atom.packages.activatePackage("atom-ide-javascript")
  })

  it("Activation", async function () {
    expect(atom.packages.isPackageLoaded("atom-ide-javascript")).toBeTruthy()
  })
})
