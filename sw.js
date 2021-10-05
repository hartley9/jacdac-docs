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
    "url": "webpack-runtime-143c6e514491a81b0ae6.js"
  },
  {
    "url": "styles.545775ca4d150d94f93d.css"
  },
  {
    "url": "framework-3e5fdc5ba728e15d7465.js"
  },
  {
    "url": "2192cc19e677c429cb4f2592426c774329598203-4782cc25595ed9580483.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2b6e5a95c8c8e6a394c8bcdedc612040"
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
    "revision": "0c6035f36994ab8d8c503abd0e39e394"
  },
  {
    "url": "page-data/sq/d/249313281.json",
    "revision": "2ff24d74e08679c167de5d73bfb45141"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "6a529fa136e090baff2e722ed5e58998"
  },
  {
    "url": "page-data/sq/d/3211070344.json",
    "revision": "564d55f09ccf5d5d55f56c38f7a0e407"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "ca9cc9cca675c4123ce64415206614a3"
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
    "revision": "8ba9489b7a280ef7281f8e8730d8cc78"
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
    "url": "830485e4a01eef9412f4754ecfe08bd6e6417633-92a951722c17c5c6729a.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-5f248b0431cbb627ce32.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "ae5cbacb799bfee4dbba19a5a624a048"
  },
  {
    "url": "component---src-pages-devices-tsx-37d877e082a37b1c5175.js"
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
    "url": "component---src-pages-github-tsx-2316d90f8dd41afe4693.js"
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
    "url": "component---src-pages-services-tsx-9c300af9ad3a4b360c28.js"
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
    "url": "component---src-pages-tools-mdx-793af33003bbbe8e9bdd.js"
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
    "url": "301eb992595a5c36dc4f85b7198eba5aa8d9b219-e8e1e890e94cd9104e15.js"
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
    "url": "component---src-templates-service-tsx-0a6436087b1e0f1b2977.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "26cba3495a93e8402fc822b4e4beb8a0"
  },
  {
    "url": "component---src-templates-service-playground-tsx-6ac3e8193695b6378e86.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "4f0fbb04f0ba1d3ae3b53392336b2f7d"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "0fc7c2f154f42c9b390b1410f082a121"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "90962e44928b5a761a09eded8357ae87"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "ed9086b69b7f1dcc202d3cd971a003dd"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "8ba97ff5630a9bd06e4868b00f5a95ea"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "89338c3608560917eddc95e00afa710d"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "f34024fb8e09e2d823390786b2a01b15"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "1729986d492d5c6157458fb4b01286bb"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "2c89896c1cadb776f2d694719e633c2e"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "c2c7c1f444266c75d75161ca3d29e414"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "9851ad041785763b58b88eb78147c971"
  },
  {
    "url": "page-data/services/azureiothubhealth/page-data.json",
    "revision": "a59d53f0f238629f641dd7b8433d6b5f"
  },
  {
    "url": "page-data/services/azureiothubhealth/playground/page-data.json",
    "revision": "2386d7bb48bdce6c74f74f9e6cb48954"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "c9743dc08e8b3561fddf950ec7f44115"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "a4e6b71b4c990802fda1c17675fdbb03"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "8330e3f9ee4f2a6b88e232f4cfddb78a"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "cd4d35f080e8c4fb49b9d50b0c545449"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "41896090bf54fa1ceca6b1a259dfca0b"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "4e0ebc3cdedfb885e5bb4b064c6bf842"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "2581d239c47a5058fc242c96afee5be9"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "f2af86a9566b1e9ce38477c7ed693c8b"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "c625b7323ef886a18ce3db936d3e37e9"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "401deadc08e1ea194192fe73825efb08"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "91d609595b6c66040b39dcbf3f21fcde"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "ebb82fde82f6cc8adfd530e23cb336c4"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "1ef2e7e2562ba5899f10bef4f9df1ac8"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "9ee6fcc92b28a77cfae035dd1e3cf1f6"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "b8a508aabab3023a4d06c571b97d2f36"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "d8b0c1db9e16324ba88df666a71efea3"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "13db508caf09f50db2b057f7891c827c"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "0484d0c1e346f935411258200309a598"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "c1e93146baad16dcc1e028b049fda3a8"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "d317675b1432b2d9093bea7cdffa10f4"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "aa59165175b6fb54b4ea11959d7a00ba"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "2c253afdfe40979cb5775495e579e4c8"
  },
  {
    "url": "page-data/services/dimmer/page-data.json",
    "revision": "0cdef46eafb526d3ce51b9cdcbcc24e3"
  },
  {
    "url": "page-data/services/dimmer/playground/page-data.json",
    "revision": "abfec5d9d0fbefe2279f7f692a817b84"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "f79647c7ed01b5b6026d2e29de04ce1b"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "9ff6906dabf782910c12ca8ef03d3fc9"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "6a065c154195f2763df93b8abc101799"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "1454cf0080b8a72b0bbc091f3f6e5b1f"
  },
  {
    "url": "page-data/services/dotmatrix/page-data.json",
    "revision": "13e115932aa220f04f06258432d49c62"
  },
  {
    "url": "page-data/services/dotmatrix/playground/page-data.json",
    "revision": "02b6f30577ec40fb9f691a498f4e528a"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "c090a361010637d05055855f9ab7ac1b"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "d19cc4a72b66b90ccbe9598427b72e0f"
  },
  {
    "url": "page-data/services/flex/page-data.json",
    "revision": "b914da3ca5a9629914dadab87079a5ee"
  },
  {
    "url": "page-data/services/flex/playground/page-data.json",
    "revision": "29c08d707990633d1d42cb71c9af3ddd"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "28bddb4878794fd78f90970abca915cb"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "2d93c6a86f6b595f132bc42550d1afda"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "307468428aee5df59b42d73f0dc8c286"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "5a19b4ce8eb97c7bb1521bcb8af048c3"
  },
  {
    "url": "page-data/services/hidadapter/page-data.json",
    "revision": "963d14c3209bae53f2edfb356a5aba14"
  },
  {
    "url": "page-data/services/hidadapter/playground/page-data.json",
    "revision": "5b0a84c66e01819bc6b71efd1bbe5eaa"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "bf6671d677ae0e2387f6e463dc64481e"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "8125873717a89c5677733c432321099d"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "8a291becfdfe8a37b67899ff958a9203"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "df6a5a9358fca282a30d01839b0286c3"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "5829a15f4b624ea9c7df70fa9e37b13c"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "c77af622c2136225e91b4d6110ef44c5"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "5cff544194cc0b37b50ac93815a3c7b3"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "1fb26df6638f3e790534fe23e97fcbac"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "63be158b9e7453f9f3155b7e3c470f8d"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "23b1b810176e0bb6039ecf84096f68d8"
  },
  {
    "url": "page-data/services/infrastructure/page-data.json",
    "revision": "c7881a539d0238c507cec8c74ddb6b32"
  },
  {
    "url": "page-data/services/infrastructure/playground/page-data.json",
    "revision": "f107550fa137af2da2d478c1f266373c"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "499cf28a0d7d1f27d8db6b8911ee3a82"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "f2ce8e7f3c6c16624dcb12962e69ce5b"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "be065b58a15f251691124209ca67b93c"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "21ae5052424de1c1dcf992c992bd646f"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "71036ed1a02495189fb9485431d4b3a0"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "b50236eb24b5d4283a52929651cb99f9"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "5bbb86b7ba37227eadf7f76acf972036"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "e5900de12ee048ffb6638d3c3b8414ab"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "002a6430990e559760a7970aac6b8ba7"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "7f64491982acdec14856c7825c6d57f9"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "7ee25b05616cb1a932eed058b3e4cdd1"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "1f68a4559092bbbcd297a145d5b47d46"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "1c5ee0db8eb37b5b4316c79d6beab0c3"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "f29e43b12910494f887cc9ed2a282aaf"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "6a6ccf49aba876609c8062e0d9ef71fd"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "c3f0604d4154827d607e2bdc4aad28ab"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "745ddcb49890eff21a21b6473d088e5b"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "dfc59239c827f240d071ad48336090b1"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "c1bf9ad6b27d15242e75ac387d7c4026"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "39967b71d660d477d56a053b37d1625b"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "64f9dab6345877243fd7abd7b769a3c7"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "2c87f0f38d749ef32398aada348026b4"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "e47edfd35d1be781687f5678487fa5e8"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "6c0b541daea527279c400919f361785b"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "4ac785ed3d20391d5beca61ad396e045"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "1171980745afeea1dc05f1e91087ee05"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "581f226b4ab9f12bb3a784387630e86f"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "fbf90d5fb6f88a27ad611e2a82e50a9e"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "62981ada8336c430a0b331a184805d0b"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "73a9aa55a3b67bafe31d8ca8176ff799"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "9ece9283cd8183ff27bba3c20f60cdf0"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "fe4fda4bbe01cf05b4f0b4e553804d6e"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "45394e0fa89e78432a0d71024a50d697"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "da0a0b84f3e554853cb6378c650fea0e"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "4d551d35f68e046f227e367095a8721c"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "488b47e6525a54f78c0511b7bdf5a992"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "78d88bb7aa7798380fc2a3fce157035c"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "21454bf5f075219ebf0573559f478c97"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "e5b6f5167c880914c462e978d0bdd065"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "e9dcddd63328b7b6447742a3811413b5"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "52506969538f70af378387e6154b5862"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "fd0bacf41ebbd61f32c88940cbdff0b4"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "594020b78fe80efd9ecfcf0929e3feba"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "759a5f3474d73c49988f5e9c0b9a1be2"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "aca096b80dc2ac315edaa16f6a10390c"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "e77385888799c776669be9fb818e97a3"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "b2655a2b3d8f6ff6fa434a0255ac9bc3"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "d1fe44283e4cfd4b670a6967b12c73ec"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "0e31af1c9b9d764213a7139e6157d469"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "a0c4dc69222f456919f72e7b7f356a95"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "8f22354e81d87647427ed7c69255f3ed"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "741371a22fc4d3411cf5b2302b5f75c6"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "f87b8828711fed4064512f34c0365b8b"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "479bceb74f2746ad6ba99631560b603d"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "87de8e3e1a2d5ef606c65808914a5be3"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "1288ac8f23b475dbcd10578c27551dbc"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "6680fda701b827a1a1db958c569b1d0f"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "66a9f872a7ea2ed483580c1aa2a8801f"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "c6c1bae594a9e7fac12713393cb4f38e"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "38350622684f349451c4f7b6df81cc50"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "b478cbe9b9dc932bc519f8e1d12b6b96"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "09ea66683a8ef6ccfd4a2ba9bba3a747"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "ef2c757ee14dc53ec350ab4ca63126b9"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "0684d97a9aba6dcdfe567c15c0f734ea"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "ccf63075ef26d74e6c6877c9f7382b3c"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "bc45a51ab83aef4dc171ec37d3bb3736"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "d58df47c2455675f84557a6af95cff65"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "9f31776fa29cb84f7d04a7107f1dcbeb"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "bbf2a5196cd8a1b1ef12b3742361b9e8"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "405f21dd95be7dbb6e36fcdd40a47429"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "48d9b949153e7d7352b670ff4892e76e"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "a2ac74df6e43a2b38e3ff00212e57ff6"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "ed30863ba29913cc5951dba0119dd86d"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "71fd3eec36352083e0134cc042ea8d7c"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "f187d60a544b57e6bdbfccc55a215871"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "0340304ff106598cf29bb927fbda05c8"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "a68330456226b3c60b1196507fd8005a"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "47ff5a50c16010a39afac18b490ebba3"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "827fcde77834ecf738d6fd3fa9a61c78"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "50c9f28ce17ce850bb689e8dfa33e47b"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "e917281a49619ed870041fa0e944e3e1"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "cd469e2ff641570f7718e57c21876d9b"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "30baebeee899904b527797d4613a67f5"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "045aae565985988e060c99d24b7f490e"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "d23d79a32be9eb049c6431b7a27d3d77"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "3f64e6e6e1ad7bf36f390f1f350ce2c8"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "7ae52ade45eac6b0521716d9a573b711"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "8c784b0419ec5476b50b9a6ea7bac1d5"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "6860a9a3857d52044b9663a7734a9d2a"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "75023b3d9eb773987b5148026cd8ba26"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "63e5d5b298655bc3b51d10992d5a0c4e"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "dcea5a58f87f57f66d38700775881905"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "1c5965f0906a32cd4a5d28401b013f93"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "a2b68f15338f625f12063acffa297f4e"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "9f3f88d1ea8dfe6082cc0bed3ff754f4"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "d893adc96277ed8ace28a4074bc5b0b5"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "6c43a27e4030d965a06cf6bb73aed388"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "d128aa3653502dabf1482fd5c432ba21"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "615feee2b228899e10adafc0b7bb32e9"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "daed5a5d0e03c0c80268c40d4d506427"
  },
  {
    "url": "component---src-templates-device-company-tsx-1993debfb2dde2f5dee9.js"
  },
  {
    "url": "page-data/devices/microbit/page-data.json",
    "revision": "cfd97372ad85b4255188dff05ecf7554"
  },
  {
    "url": "page-data/devices/microbit/foundation/page-data.json",
    "revision": "33a774e4afadf1d2a3c734bcb1f117ec"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-781245e4a2d56404da93.js"
  },
  {
    "url": "component---src-templates-device-tsx-383d22803c3a0e7f0cc2.js"
  },
  {
    "url": "page-data/devices/microbit/foundation/microbitv2/page-data.json",
    "revision": "80306d14b708e7aa353668e9677e20d3"
  },
  {
    "url": "page-data/devices/microsoft/page-data.json",
    "revision": "4db55ca53778b5e03029d996f575ea1c"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "c0a28d5ef735bdbb8e0dfbe0db770934"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdaccableextender38v10/page-data.json",
    "revision": "1c0f01029aed9fd81cd77747882ef01b"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdacjoystick440344v03/page-data.json",
    "revision": "1e8643431d38d5cac1dee86002225f0d"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdacmicrobitshieldlp29v03/page-data.json",
    "revision": "163f8248bf35ead9e4d0b14f64208260"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdacmotiondetection54v01/page-data.json",
    "revision": "62e308d928d2f3933a98245f1f46823c"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdacpinheaders45v02/page-data.json",
    "revision": "8208445765c1b0f6ec188daa32e4bdf8"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdactouchtest35v10/page-data.json",
    "revision": "51cfbf2d90ae216ca0b33ecc6de79bf4"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdactouchtestelectrode36v10/page-data.json",
    "revision": "1bea77d408075f765b18bfdaa3744398"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v02/page-data.json",
    "revision": "b839bfd3bb2b289a8bf46f5cc1d89756"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v10/page-data.json",
    "revision": "8a86b4bd7ff7944956bfe82a7d6f7174"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometerv20/page-data.json",
    "revision": "644036d358a6619a0f7f178a00f664f5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchinput34v13/page-data.json",
    "revision": "987ae9ced7a8eff02d8ee33807c2ecf9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchoutputv11/page-data.json",
    "revision": "3a7380d64091c8d2de710e06ab438433"
  },
  {
    "url": "page-data/devices/microsoft/research/jmambientlight55v01/page-data.json",
    "revision": "d639b92d0c4de4376beea845cf33c7f7"
  },
  {
    "url": "page-data/devices/microsoft/research/jmanalogjoystick44v02/page-data.json",
    "revision": "a1f0130d12c33902ad5dae9caa280a8b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "31a6aec34192893b1c67cd88f5b55e71"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv20/page-data.json",
    "revision": "85e75e4f9baf4b503328bee42f007a2a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainesp3248v02/page-data.json",
    "revision": "e29f937cda1c5c4fe21b08d49ba82a4f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainesp3248v03/page-data.json",
    "revision": "ed4040ccf15910e2dc6af825440b8579"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainf441v02/page-data.json",
    "revision": "c1edcc8b39441f8e785e3e2a0350390a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainrp204059v01/page-data.json",
    "revision": "a72619c3d3f040619c8d24261b23225f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton10v13/page-data.json",
    "revision": "6d53adaf92b9355e974f330a911478e9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton40v02/page-data.json",
    "revision": "5dfec556e01fd1babbcee1576aa9e277"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuttonterminal62v01/page-data.json",
    "revision": "806b71b453306cccfad43ff7d09af126"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuzzerv20/page-data.json",
    "revision": "f864b48d8b2346d5645a1dde699c83f6"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickairquality4v32/page-data.json",
    "revision": "b4626c8ab80c5dc726868e126925b229"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickcolorv32/page-data.json",
    "revision": "eef217346123c4b58de4e0961eff91a3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbuttonv20/page-data.json",
    "revision": "58debce0a5ac4a313ede644d62eb06e8"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv20/page-data.json",
    "revision": "e691a1554aa0719e49499584355432bf"
  },
  {
    "url": "page-data/devices/microsoft/research/jmflexv10/page-data.json",
    "revision": "e1fdcb061ee7f96cd3ae261a8f44c711"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv20/page-data.json",
    "revision": "aa428977368fdb0eb1e218352711f4a0"
  },
  {
    "url": "page-data/devices/microsoft/research/jmhub39v03/page-data.json",
    "revision": "01f43dda4d2b1a7d3deb2eb1c2705c8f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v10/page-data.json",
    "revision": "d3ac838e9135fa9521544798a8d7528a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v11/page-data.json",
    "revision": "1a286396a740c281feb53b44de11d9c1"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v12/page-data.json",
    "revision": "6dbff212a53ee02a0d742297400fa5a4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "4099aa3d1aae4a895677efaa08d3d9fb"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmicrobitshieldlp29v05/page-data.json",
    "revision": "003244a7bc13afbbaff01074e3d9a597"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "f4530019756c0bf688e85caaa6c59670"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpinheader45v01/page-data.json",
    "revision": "b63dcc368c24d371ea8ce7506f79e0b3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpinheader45v02/page-data.json",
    "revision": "879105494aa45d6172a44726482929ba"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpower/page-data.json",
    "revision": "db96f98497a9c9b86d796500cff552d8"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "8c23213bd33e113f36291ee4dd3a5c6b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "d74e6c4a5ddc64915cc1d7b0173fdadf"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "28fe2abb65d2e92587ee311689d96aff"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "ec986d6f5ebaae3cc963851eb6ed046b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "414010ece76c911b1d3070cfb1dbe9f5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledbar58v01/page-data.json",
    "revision": "fdc031cfc41b6da73a3183be4d715e06"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledgeneric60v01/page-data.json",
    "revision": "482fb52c14950fd2c6b866d33323299e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledring37v21/page-data.json",
    "revision": "5c4fda590031d6af27b8c835d56dd3a5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv10/page-data.json",
    "revision": "01240839134a5acfd68900543eb0e6be"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsinglergbled42v01/page-data.json",
    "revision": "7873810ead94b9c10f2936aef6ce14ef"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v10/page-data.json",
    "revision": "634c5a28e4aeb1978925c0d010ff5475"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v11/page-data.json",
    "revision": "a7f4b2df7af3094570208853006dc3f1"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv20/page-data.json",
    "revision": "fd67d302ba0624148c8f2a7f5651fc3c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmspeechsynthesis61v33/page-data.json",
    "revision": "bd2a5ac22ac7b3236a1feecb1a2fb77f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v10a/page-data.json",
    "revision": "302173144fe1456eb5854ad83645c11b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v11/page-data.json",
    "revision": "6e95d929f9ed5e88768ce6ba2db24a9e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "b42b464e785fbc4e5a8a36b845b1a918"
  },
  {
    "url": "page-data/devices/microsoft/research/mikrobuscarrierboard53v01/page-data.json",
    "revision": "c3875a2addcfad9013383856cafd0dd6"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-31345abb60f945e6b783.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "da909e98d544747fa69db54af399cbf0"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-89cd50598ab91cafbef3.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "edae20a0140371cae9db7ae8e580f7fa"
  },
  {
    "url": "component---src-pages-tools-commissioner-tsx-c3e5a1d3e7ebacdd7696.js"
  },
  {
    "url": "page-data/tools/commissioner/page-data.json",
    "revision": "14be0ea5ac7a84a6a9c5caf1fc9d31ba"
  },
  {
    "url": "baf0fd2d778787cec7104fdce75a778b8b7a3d97-2faf92415d7e3f1d6535.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-9c0a13a41ec3719a8dfc.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "d163adbbb3def19604fff6fa87072ebe"
  },
  {
    "url": "a77c613bd0faa103b953c0d40475a17f2d569635-e8eae8d07521ee262576.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-8433e4da92487f8dfb57.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "735e49b76c9097c35b86beab502e8f99"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-dfbba3ff75b1880c3ae1.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "2e4c1bd3372a2baa6bb57f477444061c"
  },
  {
    "url": "ae29c6db-4c7aec451bcf0703b5b6.js"
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
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-04458fb9b356fe9eed34.js"
  },
  {
    "url": "page-data/tools/lightsensor-accessible/page-data.json",
    "revision": "478f15fd9e03d073ef8ba9697393dc86"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-bf049392593235d78eb9.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "3e2838a4c4037a010c452d29042ae791"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-e5674d2aed3c4b59bb32.js"
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
    "url": "component---src-pages-tools-model-editor-tsx-8bec7ac6d212b351b67a.js"
  },
  {
    "url": "page-data/tools/model-editor/page-data.json",
    "revision": "31e9a95a5b64d781ab4988c627edf95f"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "dd47d8f9eb16d9a2275499b60df27565"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-ffae0f23db55241b55b1.js"
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
    "revision": "70814af661a2d6f1c71fc71f94125ca2"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-eb74536dd7e7cf74c9f1.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "55d46e546f89c7b8ad2fc59a7710d663"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-312d6e90ce94cd8aa9a6.js"
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
    "url": "component---src-pages-tools-updater-tsx-1f09f4611c1816ac47a7.js"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-4348e1f463e1ea01c2f2.js`))) {
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
