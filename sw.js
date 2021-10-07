/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-8cced977c98fbc9e5e15.js"
  },
  {
    "url": "styles.74eb5aed1bb14cdb4c8b.css"
  },
  {
    "url": "framework-3e5fdc5ba728e15d7465.js"
  },
  {
    "url": "2192cc19e677c429cb4f2592426c774329598203-4782cc25595ed9580483.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "735b3689ca692f1ca86d3100400e0f12"
  },
  {
    "url": "static/webfonts/s/roboto/v29/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d8a31cd2ca5ba2b91f7b.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "abf40b8f45f6646825f0199753d9a781"
  },
  {
    "url": "page-data/sq/d/1530881449.json",
    "revision": "dc7f500f25c801c394f385232b73a142"
  },
  {
    "url": "page-data/sq/d/249313281.json",
    "revision": "b4c48ff966c9f188db00eaede3425129"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "184021a16d3de3728b2a1c29a73e1a62"
  },
  {
    "url": "page-data/sq/d/3211070344.json",
    "revision": "564d55f09ccf5d5d55f56c38f7a0e407"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "36e97c99978ef39d0c0c23321ab5e44e"
  },
  {
    "url": "page-data/sq/d/4292774041.json",
    "revision": "6ced918f080aa790547c945a1f130615"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa1b3078b197ca2f5f22bd2b016aba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "08b23547dcadc8110e30e39a8ab90bab"
  },
  {
    "url": "component---src-pages-404-tsx-e129daa4016981e0d8aa.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "cd86291059c6062c558dd73e25a58e96"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "05ae84d3ebdad6efee06886063b8b359"
  },
  {
    "url": "component---src-pages-clients-mdx-ae283ead46e0bd4748f5.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "6692e9bedbedc674756f87f52065ff68"
  },
  {
    "url": "830485e4a01eef9412f4754ecfe08bd6e6417633-118dd2c2d406e34a698e.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-f78c8d0fae53b1204ce5.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "ae5cbacb799bfee4dbba19a5a624a048"
  },
  {
    "url": "component---src-pages-devices-tsx-d3115b97dccd6fbf0c2d.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "b3e3b705c857f4b43ac215d167cb9b0e"
  },
  {
    "url": "component---src-pages-editors-mdx-058eb01712cd9ac87a43.js"
  },
  {
    "url": "page-data/editors/page-data.json",
    "revision": "ea85ac61391e72c1b0cece8db081cb74"
  },
  {
    "url": "component---src-pages-github-tsx-3bc1e70bd15d58dff377.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "d786d4ea9d2e528cb428617055528dd6"
  },
  {
    "url": "component---src-pages-hardware-mdx-ecce385820960e8d1167.js"
  },
  {
    "url": "page-data/hardware/page-data.json",
    "revision": "0bb91f82daa7b44988171f56f4df453a"
  },
  {
    "url": "component---src-pages-index-mdx-7d25b0f71ee5f3354814.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1d5043af37ec9a800744cfc175f4bb3f"
  },
  {
    "url": "component---src-pages-makeaccessible-mdx-1da93c2d790e75fc5d29.js"
  },
  {
    "url": "page-data/makeaccessible/page-data.json",
    "revision": "e0dd4b9b1a9d885f24175a7a21359556"
  },
  {
    "url": "component---src-pages-privacy-mdx-5a9056bf41302a97ba57.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "685e7f7d1967e483ee3ea74b549ad139"
  },
  {
    "url": "component---src-pages-protocol-mdx-ded392a63dc129156022.js"
  },
  {
    "url": "page-data/protocol/page-data.json",
    "revision": "e4dc8a4d3dca3d60b77ba4aa1ce6bb45"
  },
  {
    "url": "component---src-components-spec-tsx-17260d81b6e74c6ce3d3.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "4dbec07c85a9f53e3b6df962423973e6"
  },
  {
    "url": "component---src-pages-services-tsx-9c4f1037a72260008c41.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "ec35ec0fb996c1d320e9838b6f96a319"
  },
  {
    "url": "component---src-pages-software-mdx-ce07fe496d6c1eb5f403.js"
  },
  {
    "url": "page-data/software/page-data.json",
    "revision": "4bf252f9426a35c4d3eae225c1d23994"
  },
  {
    "url": "component---src-pages-tools-mdx-2fa9676b3fdb92b71df0.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "2195f284b5774d647e3105262363bf4a"
  },
  {
    "url": "component---src-pages-traces-mdx-6c0b1f0e09067f4beae4.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "b612e2bce5a08a2cba9a088738323cac"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "9b0d178deed2749912ea6f95e9f0ac81"
  },
  {
    "url": "component---src-pages-reference-errors-mdx-b6ed7484950a6bc57875.js"
  },
  {
    "url": "page-data/reference/errors/page-data.json",
    "revision": "984ff472a3c2ad60bb1d0a0000ac50e3"
  },
  {
    "url": "component---src-pages-reference-errors-microbit-invalid-memory-mdx-e4f2e5f294013a63162c.js"
  },
  {
    "url": "page-data/reference/errors/microbit/invalid-memory/page-data.json",
    "revision": "71d89ec825e34f2a15191e6da61c9472"
  },
  {
    "url": "component---src-pages-reference-errors-microbit-jacdac-missing-mdx-6ada06e4afbc90bfb204.js"
  },
  {
    "url": "page-data/reference/errors/microbit/jacdac-missing/page-data.json",
    "revision": "fd0d20a4f1c88fc4cf45ac62c89ea3a4"
  },
  {
    "url": "component---src-pages-reference-errors-microbit-unknown-hardware-revision-mdx-52cda3114f0aa8f5831b.js"
  },
  {
    "url": "page-data/reference/errors/microbit/unknown-hardware-revision/page-data.json",
    "revision": "dd66c9aba7445a716f27f89c89cdcf4c"
  },
  {
    "url": "component---src-pages-reference-errors-microbit-v-1-not-supported-mdx-c4528afad2ead0296e13.js"
  },
  {
    "url": "page-data/reference/errors/microbit/v1-not-supported/page-data.json",
    "revision": "7340372d1612644fb3883e5f1135c510"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "4fc6a4e91f00c8cd85e1a8354988593c"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "a8909a3f056489bd4eaa9e3efe3f6a2e"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "7343aafb6b465f0a81098c5144ca6e4b"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "41a647cea93e373581e82392c2e3a669"
  },
  {
    "url": "d1948eb05bd2c0157ef8d2cfb6e0fd22d9ca4185-18b47140dc28a239b284.js"
  },
  {
    "url": "8f8350e8e5a1ed189588272f29a5455a64d2ce8f-76acc6d97f4d1055c812.js"
  },
  {
    "url": "7135060e554842f570a07250da4cced35e9b785f-b18a7f4f6e43db14aff6.js"
  },
  {
    "url": "149f11818c122b40ce2932f15d148eda4aaa5f90-010cd71494c4a30bef94.js"
  },
  {
    "url": "component---src-templates-service-tsx-cc45ab88006bc1cdeab5.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "118f49a65e0a883795adf9664f79cdcb"
  },
  {
    "url": "component---src-templates-service-playground-tsx-fd8a334791684a7f7135.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "ba64d7f30cf74480a95fd7d155022789"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "358325ebf1a6f91ce570c88761a95325"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "46b1d816acff6f1805b8192c97a66df9"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "ac13a9ca973ba73a20c78012a9b2dc3d"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "843f178f0443cb82ddaae910a7284c6c"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "20cc15db137926b6c1ac203a6c0c0598"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "936d700bd6b96814f2e5fc6c88550e72"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "48f3b02c13ddbbe63805e72460679412"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "c2b2e29851a42e89ff08d87bef18906f"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "a0aa24cc17f3e97735ae1ae6cf045970"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "bfd7bba9ad0b480d3677b4b5e6480eb9"
  },
  {
    "url": "page-data/services/azureiothubhealth/page-data.json",
    "revision": "f62f8c0719199f57946a62e3b7057f57"
  },
  {
    "url": "page-data/services/azureiothubhealth/playground/page-data.json",
    "revision": "8ce9db3b48a46f61a0e459b9b6a5ea00"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "9e08e3ca3f07f0d87e2a19e5fcde6bb8"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "8ad0043b206ad6e6f6b811ebe9ed28a3"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "f04f145040135956df9b327514d47bd8"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "f13e1c881abe3ce362e36018da78e590"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "88fca20a05d65684df51bfbb879bfb4d"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "e5f4302334db41738003967ff6b39bcc"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "ce7bf1ea196042273dc06bbfaf5ac4f5"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "cc22cef24f88bb84558bb490111e5432"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "a87c3d924952ebbbc68bd72fc8b1badf"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "21201cac053c245c1c481318e8881160"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "96770a65cb8a4bbc5d9041cf3ab10225"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "7568bcd2864d1dd4f7d2e990d22791dd"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "404348103ae93f7ff329da41719deb3b"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "afa1f77d27ccfe7668b1a22132cf4905"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "413cd16bde4627c09429744aac658290"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "438938d0e875d38e39fae1c9f1b4c8ba"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "139b83c5278cc5cb89a1982af1e04f84"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "bb0ab754ac162ab9f6fc4f377c24515f"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "ea6b17dfdc927075581218a3f87112f9"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "7fd6c891beb60cae8a5a1805c7af228c"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "63db677021a517ae3605f6abb5393053"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "9070df213cd8b6be62307013947c21c2"
  },
  {
    "url": "page-data/services/dimmer/page-data.json",
    "revision": "3753c6c92964d222c2a9aa29c64db1a6"
  },
  {
    "url": "page-data/services/dimmer/playground/page-data.json",
    "revision": "b2335c33e6e39c147fb2571f2e060e54"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "b1f35bfb1178ca703ec358c7769a4933"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "c4dfcc193bc067951a47cad9316b2db3"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "2abfdc4067e7b4b075ff4b7d510bf4e7"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "b6de83c99c4e975c08605e4edf832049"
  },
  {
    "url": "page-data/services/dotmatrix/page-data.json",
    "revision": "902c4ac75396db7fcd6b6644e43bc567"
  },
  {
    "url": "page-data/services/dotmatrix/playground/page-data.json",
    "revision": "f826c8c2bde397f60698cd56ee4512e6"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "bdb2f000aee39852893689150a64cad4"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "0892a7b79aeeb7baa8266eb6f0cfe654"
  },
  {
    "url": "page-data/services/flex/page-data.json",
    "revision": "be3fa573d14ca7e815f97be7f8cf413a"
  },
  {
    "url": "page-data/services/flex/playground/page-data.json",
    "revision": "ec102eca8f817f5a082a826029242ff6"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "9b93fd31cb6869beac4ddc1cf0eebf0e"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "10c731a8f7bb3cd10c37f83f0c7ab30f"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "1a63f02233b6e3652c82d1425584f393"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "24947c9308b7d3afc70d0fdf1767db08"
  },
  {
    "url": "page-data/services/hidadapter/page-data.json",
    "revision": "0abe922475fc545a6d8161be9b1cbdca"
  },
  {
    "url": "page-data/services/hidadapter/playground/page-data.json",
    "revision": "204a516473175b383f6cff117f63168b"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "f03de36dcfe740e9f99868102ef83dc9"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "6bc618d80d8cf94a49403210482a3d49"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "8c25bceb3ec2fb84603aa9682c8a1875"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "0fd929df9c03297d7caab3a6a4e31f97"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "81c97fea474b4827ff1e14ec9935edb8"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "d9671b1dd32b38672abd948269169e2b"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "7849689ae27e4fca6376001fa5f5ad33"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "fbb0af45c0b0fd824f709171db4072e1"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "f617228aabf71741d79ccb10b06b7f51"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "3ea166979fba85bd11523ae2a54b12eb"
  },
  {
    "url": "page-data/services/infrastructure/page-data.json",
    "revision": "bd9f98ab5f36c913052a8a8aba114335"
  },
  {
    "url": "page-data/services/infrastructure/playground/page-data.json",
    "revision": "9e5615720e96128fce8c3609bbe3b86e"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "2f9af3dad6515d6046937121fd486c0b"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "a4841494f3b29e309a8b3dc445d05e05"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "7a1b52bffd51059f5ec0477d2007ae74"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "3c26a2134819743f96ad3c1e72230409"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "de7725e303c503654d7b96141fe46b7e"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "2ed905f4a12e2f4225b6474505e9f251"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "f045fa98e8c211fe6a0312dc72c60a86"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "7dab493c05f890d6afdff4a822cdf513"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "eaa8dc452701bc8a81a06b3523e14fd0"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "d4f78ded4212bf3fc2c2ab046846510e"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "23ba273cb21d6e993f40d3b0995bf746"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "65c87ee947d648f3df4d4bf3f66ee987"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "71a9eaf6e4a9991d814d1d1ac7e24c22"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "ed1c014d0dd1671fecd57b4f70d3ab66"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "3effd683a75ab1f89ab15cc7843c64ce"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "18d59b88868ba216a21801db6349ae51"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "253b1b5b002cf3a953aa44397bd2954f"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "679749691bc4cde3ccd24e1ddb85a704"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "fbf73dd846bd01175012fc41748c43c0"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "c1167b6142fc62f2f96daa219a32b742"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "30a2ad4420b60e876c8f44ec657c1c17"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "c1211f34a74744359fc6c82146ecb0ec"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "085c9cf98715a52aafd005de75950b2e"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "35fa0755da834464f9b069ea71d07ec8"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "fea804c2e370806afd509f863e0411bc"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "f5204331b7fe9069908911ff5c1a85f0"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "c53885720fd7390e4986cc69709bcb10"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "a62f808c0008d186d2f6aed52b2b1943"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "5508cb1138caeec4d6469d5252712ee0"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "dae3419be4a228970187af996a1a7345"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "0b47bf4a3f07f03fb8926bb9dfa47588"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "5b27ffd75698be2c56443fa6b21da9da"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "2b292fe8a37ef309e830a60768611b10"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "082c74751749c3d61ab51ff38085cbc2"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "4d53fd9632cfe17ada5b7381226428df"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "1d4ee4f24e32c57a52ac0729a2a25e85"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "23fe37eba2cc2238b0e4302edb0cb401"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "b95f3c85fa6cc8ac326bd38889c52123"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "68e600f24dde17911a04eb51d9d94c6a"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "2d7c07d5f38d7daed04721be46f5e2ba"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "e45b34ca887013644d0713f398752a4d"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "6ac7f4b2d70be982d15f712121de6c4d"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "1dced1528e879a636a835d96b90fe244"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "c39da7b66c789ce3c8a8758190ba44bc"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "798f5908ab40076af95fe89406fb01c5"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "4a2c203cf394c3e8ac8f5adac75c4af7"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "6ac4f0261d6623c8311abc199bbc6afa"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "b0251b9df985f3866ca512c77bc61685"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "cf93f840ee57bab9f3385f8495b8e5ac"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "a55cda336e3cf14ad7225d3841c89ac6"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "1511ba270b9483ba81c020c184bf6150"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "d4a01ed94bc1881467cd567f4339bce0"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "c2f9c95c03e69ba5a96f8bd3d8993019"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "3781d4ecd17521a799ca19736ef77794"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "2edc7838a5913143cb2405875f278ed7"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "1d5377c063140a48d5fe5b30ce29ef3c"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "24b2c001a49f3928165c481249dfbd1b"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "686919790fcfcffc8c62775da2ddf8a5"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "71e23b69d2c7a2d65fba3dacb666983e"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "2ee703d4536dd438965a146b3ca45dcf"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "f8aba02a0077c51fd593030bfe3649d0"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "e28935869ba7b9bf221ce94d6aee3395"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "612426a7513ede210b742f25b53298de"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "c192187087b41f2f4d33dc8bf075c371"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "5efd9a66c3c3e92c611fd93cc14bfb80"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "c4aba27291679f29e4966a35b1df8f83"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "ec6c2d2e7c41f5b81f63df8284c38949"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "78bc2448525ea6a4a34e6dd452ece940"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "2a256fd0c9f621022a7b397705eabfc2"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "7e0e64258764894a2124dd4d0535465c"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "0768e4522a31b30ac77fc00af50ea006"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "afe8c64e1ee030fb4d372fe9b79120d6"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "b2836c349a34f8fdc5899a58108980b1"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "73552fce72794cf681f1a50bc1c3082c"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "d69cba10b0bc251ed88d000e8cd46311"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "301a21a8676d0f00e5941647f62b4b9e"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "0e913f9d0a369c7b60fb70a59b066a82"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "b85917c7522fe456c93ac542a952d5db"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "8d710c90e80a48959de66d9d6d6fe301"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "f85c21081ffcac1987ac2bd7bd2cb5fb"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "20ab17b3f86cd4f1c911d15d93d8e11c"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "7c85021a8e748711bf103b2e0fdb8366"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "d108e66219a0a6be433a3ee9c4d0e7e2"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "66ffee284d5c55f279deac08a6af2461"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "18b6faf0ae1b11880125fb35e1b59889"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "899613108b9af47a9c9e28f1332f3e40"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "d63d1e0ff67b3b5ee3b92abf080cc402"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "39b24fcac9b159018051a14b2c05d296"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "db707d3b21241a0b3fe94391a356e1fd"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "3b19bb9a7a5159eada139db727adadd7"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "ea5a38257f15a28476eca0e4b315536e"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "b58b3ee43acde49231e5429ff3b6f9fc"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "160cc56ef8cbe6a3215807bc1190bbe7"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "c13529a87265f21b2822b99dd08a9021"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "e266deed2e9507b5eb590ccecf3d06aa"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "e44dc04dda542bbe2a0f06d09edf1000"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "2c3345867d410401ead44969ec9ec41e"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "710ee501f108e49cf6de2d16415c8411"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "e4050695255cfff4e26fef27753c828c"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "904d557abe0cb4c72226f57c740510cc"
  },
  {
    "url": "component---src-templates-device-company-tsx-2c60d71e1414294597a2.js"
  },
  {
    "url": "page-data/devices/microbit/page-data.json",
    "revision": "123171f5b73c99685a3b294f5838e44f"
  },
  {
    "url": "page-data/devices/microbit/foundation/page-data.json",
    "revision": "db80fc544d9459695196cb267da159bb"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-68228d41ca3cbe391499.js"
  },
  {
    "url": "component---src-templates-device-tsx-247f44245364c771f726.js"
  },
  {
    "url": "page-data/devices/microbit/foundation/microbitv2/page-data.json",
    "revision": "111de6ea048d188b68a75b10d88d684f"
  },
  {
    "url": "page-data/devices/microsoft/page-data.json",
    "revision": "43da007b39948e308c18303de721e1a4"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "b523db290a44a34825e25d3723b0e104"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v02/page-data.json",
    "revision": "7f6d908b3372af3855fca906cc229778"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v10/page-data.json",
    "revision": "5f3f1e467c1355836dd1d3f9084dfbee"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometerv20/page-data.json",
    "revision": "5fc29fbb28b85d749e8927c55717431a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchinput34v13/page-data.json",
    "revision": "3caf8779ef868bd92d774e197c2f0a5d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchoutputv11/page-data.json",
    "revision": "2d53d3ae5cbfe02f44a64ff47f5c4d0c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmambientlight55v01/page-data.json",
    "revision": "cd25e900d73a253c66dccb92a97b3338"
  },
  {
    "url": "page-data/devices/microsoft/research/jmanalogjoystick44v02/page-data.json",
    "revision": "86116b18c65867602806a45441e9233c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "77fb1a9f9d234fdfbd187ad6203c7518"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv20/page-data.json",
    "revision": "0954cb6e71aed0102de5a6876aa6c674"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainf441v02/page-data.json",
    "revision": "dae903a043fc0276b90242b68a399d6a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainrp204059v01/page-data.json",
    "revision": "1ec49d7daf54f73c91149598bf388307"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton10v13/page-data.json",
    "revision": "cc831cf94e716c9f663e2c32cb20062b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton40v02/page-data.json",
    "revision": "499e3ba6646db80279f6e4b88fb8d4d1"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuttonterminal62v01/page-data.json",
    "revision": "e976cf378ffbc806fc0fab2afce45425"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuzzerv20/page-data.json",
    "revision": "5a7d27c399e1c3f47f8ad1713d002e07"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickairquality4v32/page-data.json",
    "revision": "c5be07bf33c5ae3536215635eaea03dc"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickcolorv32/page-data.json",
    "revision": "c1d6e5e7fe94c37fa7bb219a0cb60096"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbuttonv20/page-data.json",
    "revision": "c2789bca183548bac6a143e40ab44c22"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv20/page-data.json",
    "revision": "c7f72417ea2da164028d072c1fc3bde5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmflexv10/page-data.json",
    "revision": "42a11705abda864899f60e69ce493706"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv20/page-data.json",
    "revision": "f9ef5cccc560341f49900dea310b624b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmhub39v03/page-data.json",
    "revision": "dec4fa4c7756b9cb691c2ff442528d01"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v10/page-data.json",
    "revision": "cafa7c6a51ab3442570b33d532f81c99"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v11/page-data.json",
    "revision": "b94771e6248dd2ffb2cebd4f01aa2891"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v12/page-data.json",
    "revision": "a11e64453f39b4cf944f304ab72b1c85"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmicrobitshieldlp29v05/page-data.json",
    "revision": "0da76519613092ecaba5d16ec9e7e231"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "2f92ba50dde41fac81c2b8c7e6ab336b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpinheader45v01/page-data.json",
    "revision": "ce539cb1ff489eef6e168df7c87425f4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpinheader45v02/page-data.json",
    "revision": "5fbdfc9113288cf66d32911698734f8d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "8ea64cfefee10d6bfb7ca020207eca07"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "a97ad0bd0410319c653311fb139d3d1b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "e1e7f667dcd16adf735f00bccf3a75e5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "476cec16620717f043d582bb1f378ae7"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "1bbd094ddc6cba6bdbd0a5ea0ee98292"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledbar58v01/page-data.json",
    "revision": "cc16f75621a05d95521ded054f25e550"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledgeneric60v01/page-data.json",
    "revision": "2d1bce18cb543beba4ad1966ad1a965d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledring37v21/page-data.json",
    "revision": "87c85afd5d4a5cbc34ff130b70bd7a90"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv10/page-data.json",
    "revision": "c944941ae699e2eceae348c1b2608218"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsinglergbled42v01/page-data.json",
    "revision": "b089a41f4dae79b339452d259217b85d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v10/page-data.json",
    "revision": "3932fdd2d3cba3158106a9f82b3157f8"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v11/page-data.json",
    "revision": "475cb4288f56d636d8e8ddd57826b4f5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv20/page-data.json",
    "revision": "eb711bb42a0183171d943740b1e94f77"
  },
  {
    "url": "page-data/devices/microsoft/research/jmspeechsynthesis61v33/page-data.json",
    "revision": "aa13957fa17362dc1de29507fd51555b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v10a/page-data.json",
    "revision": "b38bbe78af65c5d94d7960ec502450ab"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v11/page-data.json",
    "revision": "553be2ce3c7c622ba57861bad80a9dbd"
  },
  {
    "url": "page-data/devices/microsoft/research/mikrobuscarrierboard53v01/page-data.json",
    "revision": "4427bac147814f64c92c1a9616f8bcf0"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-12013dbda39b30f88462.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "da909e98d544747fa69db54af399cbf0"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-efd979feda0ffe9d8f43.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "edae20a0140371cae9db7ae8e580f7fa"
  },
  {
    "url": "component---src-pages-tools-commissioner-tsx-16a13e6ca775291d24c2.js"
  },
  {
    "url": "page-data/tools/commissioner/page-data.json",
    "revision": "14be0ea5ac7a84a6a9c5caf1fc9d31ba"
  },
  {
    "url": "baf0fd2d778787cec7104fdce75a778b8b7a3d97-2faf92415d7e3f1d6535.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-7917b359e2c18a2e39e0.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "d163adbbb3def19604fff6fa87072ebe"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-dfbba3ff75b1880c3ae1.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "2e4c1bd3372a2baa6bb57f477444061c"
  },
  {
    "url": "ae29c6db-96780c4b8cc381340fad.js"
  },
  {
    "url": "component---src-pages-tools-hid-events-tsx-9e7bbabc2a19cb448cbd.js"
  },
  {
    "url": "page-data/tools/hid-events/page-data.json",
    "revision": "0356b3a3baf250413d7182613cf9a25b"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-30e5be0cf62a0cd72eac.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "d148f00ad52e255596f73330870ba939"
  },
  {
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-2b98dfc4696a437641e3.js"
  },
  {
    "url": "page-data/tools/lightsensor-accessible/page-data.json",
    "revision": "478f15fd9e03d073ef8ba9697393dc86"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-96e3e6ba15fe50f23607.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "3e2838a4c4037a010c452d29042ae791"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-502061f5fd5d1aec48f9.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "2366a29765178eeafb495a239baf1eaf"
  },
  {
    "url": "73f4d854ede10a3b91bb00b3be5912749eb02c9d-6685f652816e8971509f.js"
  },
  {
    "url": "86ab0ffe4ebd6a8173cf195d01dfee36185fdf2b-944e257f3f2471d9975d.js"
  },
  {
    "url": "41a69591c06d74ab821d0a6f985f09ba8c9c9577-bbc7ef6b265739a8b741.js"
  },
  {
    "url": "component---src-pages-tools-model-editor-tsx-16912cb525bfd6f9b78b.js"
  },
  {
    "url": "page-data/tools/model-editor/page-data.json",
    "revision": "31e9a95a5b64d781ab4988c627edf95f"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-26f754f349b951ae29fb.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "dd47d8f9eb16d9a2275499b60df27565"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-0787eb64388f7c301a78.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "eef8cc3697974891912800855b487e7d"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-d31efdfe532d7bbe6cae.js"
  },
  {
    "url": "page-data/tools/peers/page-data.json",
    "revision": "76e7735ae74a6d15b59301928ed0e1d5"
  },
  {
    "url": "component---src-pages-tools-player-mdx-3208e8d7c21e57d2391f.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "1d1bbd56e1d04cab5be9a747c5031678"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-6504d41908ab90192624.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "4c6462e083cac7aca8f6407a550ffbbf"
  },
  {
    "url": "component---src-pages-tools-qr-silk-tsx-668d42e140ad1da7e11b.js"
  },
  {
    "url": "page-data/tools/qr-silk/page-data.json",
    "revision": "22d564ec6289d4479dc438aafc361ed3"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-6da5c4ee5ded61df0940.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "55d46e546f89c7b8ad2fc59a7710d663"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-4719027e1dc536fbeaa7.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "40662bfd0b112acb2f57d2120823048e"
  },
  {
    "url": "component---src-pages-tools-settings-tsx-681cf2e550520fea16f1.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "ad264406887eb90068ebf40082fa4944"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-e2ba782e24dd2cf18425.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "e80b96102088e1ef6abd27a6f2db7a92"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "191467a410f4b06783cb2e3469ab58e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/jacdac-docs`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/jacdac-docs/app-04b4df189a22b7e78100.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/jacdac-docs/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
