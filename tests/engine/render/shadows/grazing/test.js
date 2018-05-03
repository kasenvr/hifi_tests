var user = "highfidelity/";
var repository = "hifi_tests/";
var branch = "master/";
var autoTester = Script.require("https://github.com/" + user + repository + "blob/" + branch + "tests/utils/autoTester.js?raw=true" );

autoTester.perform("Shadow - light at grazing angle from left", Script.resolvePath("."), function(testType) {
    var spectatorCameraConfig = autoTester.setupTest();
	spectatorCameraConfig.position = { x: MyAvatar.position.x, y: MyAvatar.position.y, z: MyAvatar.position.z - 0.6 };

    // Test material matrix
    Script.include("../setup.js?raw=true")
    
    // Add the test Cases
    var createdEntities = setup(5.0, 90.0);
    autoTester.addStep("Light source altitude: 5.0, azimuth: 90.0");

    autoTester.addStepSnapshot("Clean up after test", function () {
        for (var i = 0; i < createdEntities.length; i++) {
            Entities.deleteEntity(createdEntities[i]);
        }
    });
    
    var result = autoTester.runTest(testType);
});
