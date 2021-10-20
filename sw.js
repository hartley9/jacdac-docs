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
    "url": "webpack-runtime-988f577852577f69a83d.js"
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
    "revision": "fed46df64025918e0d57aa940a2dc5a9"
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
    "revision": "3d7b37a8b403d90270f0a2b7d5704bd8"
  },
  {
    "url": "page-data/sq/d/249313281.json",
    "revision": "2ca429087bf3becc3e59911e0daa9296"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "15a1dce73898a67bfd238929ff5b7793"
  },
  {
    "url": "page-data/sq/d/3211070344.json",
    "revision": "0ab86f8ed22473c73fa041efe949e6fc"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "6f5f2bcd621523f1ee41ea307a16967a"
  },
  {
    "url": "page-data/sq/d/4292774041.json",
    "revision": "1a8721b5bf8358bb308210966e4233f8"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa1b3078b197ca2f5f22bd2b016aba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "38e5a527d64321de6b47d69f7efa03ab"
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
    "url": "830485e4a01eef9412f4754ecfe08bd6e6417633-12c9fbea7564c0a0bebd.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-30006ab0a2159639aecd.js"
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
    "url": "component---src-pages-services-tsx-6ac5dfb5833cbe5f6574.js"
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
    "url": "component---src-pages-reference-errors-transport-device-locked-mdx-d63b4ad24bbb66bd1636.js"
  },
  {
    "url": "page-data/reference/errors/transport/device-locked/page-data.json",
    "revision": "f1630894efa35cbbc368756f35f5dbfe"
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
    "url": "b4041f57cede5b7e3b1bea304d75a219087809dc-2a4bdf3bf6d2de9a3c53.js"
  },
  {
    "url": "8f8350e8e5a1ed189588272f29a5455a64d2ce8f-76acc6d97f4d1055c812.js"
  },
  {
    "url": "7135060e554842f570a07250da4cced35e9b785f-5e235598be4bdf342d0c.js"
  },
  {
    "url": "149f11818c122b40ce2932f15d148eda4aaa5f90-7bf0d09f4c87bfaca41f.js"
  },
  {
    "url": "component---src-templates-service-tsx-3e95aeec7764ebcbb1f7.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "118f49a65e0a883795adf9664f79cdcb"
  },
  {
    "url": "component---src-templates-service-playground-tsx-e9e358bae3df663d5a0d.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "97dba75414ee8e62a8707e486cce74f3"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "358325ebf1a6f91ce570c88761a95325"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "fb08f45a2435849ec4cf7202eabf7c9a"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "ac13a9ca973ba73a20c78012a9b2dc3d"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "aa309b51e7c936be27e6729300381f5d"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "20cc15db137926b6c1ac203a6c0c0598"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "3dba6078dd5d796f2d9379c996683cc1"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "48f3b02c13ddbbe63805e72460679412"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "b6a5ba3ef08d87dec8017646fddc3285"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "a0aa24cc17f3e97735ae1ae6cf045970"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "0ddf3d1ccdb637edb41b23fe46fb2e6c"
  },
  {
    "url": "page-data/services/azureiothubhealth/page-data.json",
    "revision": "f62f8c0719199f57946a62e3b7057f57"
  },
  {
    "url": "page-data/services/azureiothubhealth/playground/page-data.json",
    "revision": "dbde7da4da66cc0e01fbf23b19893ce1"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "9e08e3ca3f07f0d87e2a19e5fcde6bb8"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "731a461606d9784be6604c58dae89fb0"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "f04f145040135956df9b327514d47bd8"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "be10d6d48d75f1ccdfae584e96eb4c7f"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "88fca20a05d65684df51bfbb879bfb4d"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "d388c14362234bc282d59452ff64d72c"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "ce7bf1ea196042273dc06bbfaf5ac4f5"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "c58736846164291a62c55ba8d23b6be9"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "a87c3d924952ebbbc68bd72fc8b1badf"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "31aa949dc4ede25e9e2b4b72e95cf10a"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "96770a65cb8a4bbc5d9041cf3ab10225"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "db44bd119be82ba8ed7804ca3b2fdd08"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "404348103ae93f7ff329da41719deb3b"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "9af4ec7e5d7626711677ced68a277991"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "413cd16bde4627c09429744aac658290"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "2e705239c7c5953124ff711151e0293e"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "262ebe73ebb60421fdcb29393df1b73d"
  },
  {
    "url": "page-data/services/codalmessagebus/playground/page-data.json",
    "revision": "75a7798df999da29f69b9161e62d41a8"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "139b83c5278cc5cb89a1982af1e04f84"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "647164b548ff16b2802a24127f6548e2"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "ea6b17dfdc927075581218a3f87112f9"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "0b0fc29f359823aad092852aa4eceb30"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "63db677021a517ae3605f6abb5393053"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "6958a71f004bef404854e19cf6e39acc"
  },
  {
    "url": "page-data/services/dimmer/page-data.json",
    "revision": "3753c6c92964d222c2a9aa29c64db1a6"
  },
  {
    "url": "page-data/services/dimmer/playground/page-data.json",
    "revision": "5f2333e90486b46216567ee76869a6b7"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "b1f35bfb1178ca703ec358c7769a4933"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "0d0f8279b993f78e942e2606d791852f"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "2abfdc4067e7b4b075ff4b7d510bf4e7"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "bfa78f8fa989feaed12c41623d5ba462"
  },
  {
    "url": "page-data/services/dotmatrix/page-data.json",
    "revision": "586a7ae989721e7301dabe8460e3ce21"
  },
  {
    "url": "page-data/services/dotmatrix/playground/page-data.json",
    "revision": "8ce9ffa8f98cc67e78069fd614c23605"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "bdb2f000aee39852893689150a64cad4"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "d075e95a8df68a88a1cfebf78fe69c66"
  },
  {
    "url": "page-data/services/flex/page-data.json",
    "revision": "be3fa573d14ca7e815f97be7f8cf413a"
  },
  {
    "url": "page-data/services/flex/playground/page-data.json",
    "revision": "4aad3455a9a1c51533cb882c2d815d7c"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "9b93fd31cb6869beac4ddc1cf0eebf0e"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "3a833d4270c985caf1cddc1d94568d88"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "1a63f02233b6e3652c82d1425584f393"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "0257c0cc9d57b2f146991a02da6bb04e"
  },
  {
    "url": "page-data/services/hidadapter/page-data.json",
    "revision": "0abe922475fc545a6d8161be9b1cbdca"
  },
  {
    "url": "page-data/services/hidadapter/playground/page-data.json",
    "revision": "f4ea249d3c364e1378cdfc7e8bd8d4fa"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "f03de36dcfe740e9f99868102ef83dc9"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "191b4d2d09448046c82b2fa41b434fc6"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "8c25bceb3ec2fb84603aa9682c8a1875"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "1723dc0f87d89edaa1ab1b8558fae738"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "81c97fea474b4827ff1e14ec9935edb8"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "52f894ada2a13516412bd0d37a37bdeb"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "7849689ae27e4fca6376001fa5f5ad33"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "3350a2a2520cbaaec613f70964605d52"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "f617228aabf71741d79ccb10b06b7f51"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "6388eb476c26318247b9432f2698bfcc"
  },
  {
    "url": "page-data/services/infrastructure/page-data.json",
    "revision": "bd9f98ab5f36c913052a8a8aba114335"
  },
  {
    "url": "page-data/services/infrastructure/playground/page-data.json",
    "revision": "adcc98ca5ce47fb75c432fde7c8b7d7d"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "2f9af3dad6515d6046937121fd486c0b"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "97d131dc2636779901b9fabd49f2be54"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "7a1b52bffd51059f5ec0477d2007ae74"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "8cee3ad60aeca6070d2a63c3c7acdccc"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "de7725e303c503654d7b96141fe46b7e"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "41d0e60a59f3d748f08831a2ca98a347"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "f045fa98e8c211fe6a0312dc72c60a86"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "c34853761b19479dea608fba38c2d22a"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "eaa8dc452701bc8a81a06b3523e14fd0"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "5856b65ff5f7a8e22d970eac7583a6cc"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "23ba273cb21d6e993f40d3b0995bf746"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "121970d5a10717cb5d161dd990363b94"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "71a9eaf6e4a9991d814d1d1ac7e24c22"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "14a152cdf1dd12ffb98beda4e5afe605"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "3effd683a75ab1f89ab15cc7843c64ce"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "62b65bddd05b4715748b2356b3b6dfcb"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "253b1b5b002cf3a953aa44397bd2954f"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "c2b0f777de80084b1b1d37c666883896"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "fbf73dd846bd01175012fc41748c43c0"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "c04cc0e5d7fd7985f0ac04eb4057b72b"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "30a2ad4420b60e876c8f44ec657c1c17"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "52278d3545481fa782d3ec274dcc8f9f"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "085c9cf98715a52aafd005de75950b2e"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "ac93715cd2eed69e7eb1e7c9aeaba8a2"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "fea804c2e370806afd509f863e0411bc"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "8b6803fb77faf56155832d671545addb"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "c53885720fd7390e4986cc69709bcb10"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "75a6529f0f782e7a8a8075256ec23764"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "5508cb1138caeec4d6469d5252712ee0"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "cfb5fbedc3e344794e6b957e54021417"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "0b47bf4a3f07f03fb8926bb9dfa47588"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "5c781cbaa9166831f6ad789de134d9e7"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "2b292fe8a37ef309e830a60768611b10"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "775014264cd2b52f1d4a2b9a710c31a2"
  },
  {
    "url": "page-data/services/proxy/page-data.json",
    "revision": "96b13156440673c819dd52c774eaab28"
  },
  {
    "url": "page-data/services/proxy/playground/page-data.json",
    "revision": "25c1e8e4c4a14a3d13ffbed25c73b8af"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "4d53fd9632cfe17ada5b7381226428df"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "4690bad27159163a28d3250139004402"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "23fe37eba2cc2238b0e4302edb0cb401"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "34f430efee94f2e1732668cfd3ae80a3"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "68e600f24dde17911a04eb51d9d94c6a"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "f50bbbfffc2ece161111236e810c876a"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "e45b34ca887013644d0713f398752a4d"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "c614e53b6a861487c2acf357c9d51536"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "1dced1528e879a636a835d96b90fe244"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "f36f57530479b08ec3ef9e6726383b6a"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "798f5908ab40076af95fe89406fb01c5"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "7c5377dda0e127b9954d8e22ed8eeca9"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "6ac4f0261d6623c8311abc199bbc6afa"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "bd2256d1f9da749653eb65794b5a439e"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "cf93f840ee57bab9f3385f8495b8e5ac"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "a94f06e4eaf99b78f5fa183022760f57"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "1511ba270b9483ba81c020c184bf6150"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "c6b85dc5e9baffe4adb26b4613b76677"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "c2f9c95c03e69ba5a96f8bd3d8993019"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "53d44c8c377bf08ef9c8617589f845db"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "2edc7838a5913143cb2405875f278ed7"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "34bf9a8fb18abc6a9e608de7ea7b9d2f"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "24b2c001a49f3928165c481249dfbd1b"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "00d274876fdcde22a1f8ee8369352c3c"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "71e23b69d2c7a2d65fba3dacb666983e"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "903eedc4de3ee9749f92adcdcc5f74e0"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "f8aba02a0077c51fd593030bfe3649d0"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "867a2bc88227751c3d7c4ba787752377"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "612426a7513ede210b742f25b53298de"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "7f0087dad734d07936e40763559bcb01"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "5efd9a66c3c3e92c611fd93cc14bfb80"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "f00e7f51362afea478d0e9d9053438be"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "ec6c2d2e7c41f5b81f63df8284c38949"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "009f87583ad970d5e9465f11e8c2c48a"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "2a256fd0c9f621022a7b397705eabfc2"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "66a3761b454bd12ba3e207feeaa6e73a"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "0768e4522a31b30ac77fc00af50ea006"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "94e2f11e3b1572323fb2ee22a2ee63c5"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "b2836c349a34f8fdc5899a58108980b1"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "bd684ea6f478736e7bdffaa5f2943aca"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "d69cba10b0bc251ed88d000e8cd46311"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "fc793461bd0924681c7440c1a7c99fc0"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "0e913f9d0a369c7b60fb70a59b066a82"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "79c5c6c5aa7ee5eeace81a0808f222f0"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "8d710c90e80a48959de66d9d6d6fe301"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "29a59a2deaafaa4a34bb983211905d56"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "20ab17b3f86cd4f1c911d15d93d8e11c"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "da2966c394e08f03bf4bd9db0a68bd10"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "d108e66219a0a6be433a3ee9c4d0e7e2"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "f13d06481f83b408871d6fca95a1237d"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "18b6faf0ae1b11880125fb35e1b59889"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "46dfee4e9d3da93674c1b6ad57a81e3c"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "d63d1e0ff67b3b5ee3b92abf080cc402"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "ac004f30d071a6f6d0a5ecd8e4fe7859"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "db707d3b21241a0b3fe94391a356e1fd"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "b9ebbbe25c133eeb05a078e5a2a25348"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "ea5a38257f15a28476eca0e4b315536e"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "54b1e2a847d11ce52bf43ca144246efe"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "160cc56ef8cbe6a3215807bc1190bbe7"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "cbf015af3414f81409822599dfcd48fc"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "e266deed2e9507b5eb590ccecf3d06aa"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "28fbf4f4bb7873fe908b1229d201a429"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "2c3345867d410401ead44969ec9ec41e"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "cc116777f25f20eaa70a9dcb49ede87f"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "e4050695255cfff4e26fef27753c828c"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "6661093af0098f2c6dfaa06001e9e2be"
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
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-367e6e668c8a41964123.js"
  },
  {
    "url": "component---src-templates-device-tsx-80a7b926123530254f04.js"
  },
  {
    "url": "page-data/devices/microbit/foundation/microbitv2/page-data.json",
    "revision": "399bf11044d0e9103a73484149ade061"
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
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v10/page-data.json",
    "revision": "6295ba58eebe51b73f62d5555d9f4489"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchinput34v13/page-data.json",
    "revision": "31d84ecd8822ad25d0c9a0103aef92f6"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchoutputv11/page-data.json",
    "revision": "ac88c8555e2a1fc0ce6d911e54379dae"
  },
  {
    "url": "page-data/devices/microsoft/research/jmambientlight55v01/page-data.json",
    "revision": "f1ffebe8df41825590bb062057754807"
  },
  {
    "url": "page-data/devices/microsoft/research/jmanalogjoystick44v02/page-data.json",
    "revision": "f2d157b0aa6cceaf5cd47bd247295fbd"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainesp3248v03/page-data.json",
    "revision": "0f0cc9793ce5a31d51ff96b6b2e6ec28"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainf441v02/page-data.json",
    "revision": "4d2ddbf820a87a8d3ebeb076c30917c8"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainrp204059v01/page-data.json",
    "revision": "02c069653489cdd6489fe63b99b6b12b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton10v13/page-data.json",
    "revision": "f15dadc0d84f66d922164a20ce4172d2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton40v02/page-data.json",
    "revision": "d6ac4035ef1cc4a48af10c16805c209d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuttonterminal62v01/page-data.json",
    "revision": "26fcf65281e0a5a0f976b6724dc4ab97"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickairquality4v32/page-data.json",
    "revision": "2afcd544c9f464d5415237044e3a7f60"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickcolorv32/page-data.json",
    "revision": "9143304636c36a83c5a170fbe3687bc9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmflexv10/page-data.json",
    "revision": "9646e75b68b6f74e175fc0fc2a09c65a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv20/page-data.json",
    "revision": "3ace2d2424663a3f79cb8d39b72c5e81"
  },
  {
    "url": "page-data/devices/microsoft/research/jmhapticmach101v10/page-data.json",
    "revision": "22ea84a215aa2bdafdc738899764864b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v12/page-data.json",
    "revision": "5d751b2cb5324f48b59b66a0adcd96a2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpinheader45v02/page-data.json",
    "revision": "150690a4e8c6079c8c212df6a4b542ee"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledbar58v01/page-data.json",
    "revision": "8b8fba1233bf94e9343ddf8adb30ff0f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledgeneric60v01/page-data.json",
    "revision": "a5dc0e4b21887257856dc04e9af31490"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledring37v21/page-data.json",
    "revision": "2535067ce70a2673801ad63677b3c006"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv10/page-data.json",
    "revision": "37b5a83b739e4ce9f5e22dca289a2475"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsinglergbled42v01/page-data.json",
    "revision": "57157fa827283ee9cc64f27ae9c345e8"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v11/page-data.json",
    "revision": "802c6886de0d9b2f68dd9d7d5a326dda"
  },
  {
    "url": "page-data/devices/microsoft/research/jmspeechsynthesis61v33/page-data.json",
    "revision": "87d0f41d99d58421ac2d490720a8819d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v11/page-data.json",
    "revision": "f5a64aacd9c3f7f88637ddc4327a3277"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-ff4e95b9317368336c4d.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "da909e98d544747fa69db54af399cbf0"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-c082d61d594f2b8579f0.js"
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
    "url": "component---src-pages-tools-device-registration-tsx-97d6468c54f7f07afa49.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "d163adbbb3def19604fff6fa87072ebe"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-6f888016c596273f6832.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "2e4c1bd3372a2baa6bb57f477444061c"
  },
  {
    "url": "ae29c6db-96780c4b8cc381340fad.js"
  },
  {
    "url": "component---src-pages-tools-hid-events-tsx-ee0e3eb92a7972c1f7ac.js"
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
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-f8fadb17132aa195e55d.js"
  },
  {
    "url": "page-data/tools/lightsensor-accessible/page-data.json",
    "revision": "478f15fd9e03d073ef8ba9697393dc86"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-17f290aec49410fbb54b.js"
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
    "url": "86ab0ffe4ebd6a8173cf195d01dfee36185fdf2b-7f6b82452b4baf76583a.js"
  },
  {
    "url": "41a69591c06d74ab821d0a6f985f09ba8c9c9577-bbc7ef6b265739a8b741.js"
  },
  {
    "url": "component---src-pages-tools-model-editor-tsx-3893b8591dc1612f1c03.js"
  },
  {
    "url": "page-data/tools/model-editor/page-data.json",
    "revision": "31e9a95a5b64d781ab4988c627edf95f"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-363c15654ff11db1229a.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "dd47d8f9eb16d9a2275499b60df27565"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-f65b28be8f65c14227d4.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "eef8cc3697974891912800855b487e7d"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-0f542fdff6a62bc044f0.js"
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
    "url": "component---src-pages-tools-prototest-tsx-bcbd8922b0e727a7ed14.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "4c6462e083cac7aca8f6407a550ffbbf"
  },
  {
    "url": "component---src-pages-tools-qr-silk-tsx-ec23b68eeb4a785ad75d.js"
  },
  {
    "url": "page-data/tools/qr-silk/page-data.json",
    "revision": "22d564ec6289d4479dc438aafc361ed3"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-bc6251b22cad66d4d973.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "55d46e546f89c7b8ad2fc59a7710d663"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-d4e39833abcf4aa39706.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "40662bfd0b112acb2f57d2120823048e"
  },
  {
    "url": "component---src-pages-tools-settings-tsx-1b8a79f40dbfc2140ba8.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "ad264406887eb90068ebf40082fa4944"
  },
  {
    "url": "component---src-pages-tools-speech-strings-tsx-8c9dce128fb2e4d95905.js"
  },
  {
    "url": "page-data/tools/speech-strings/page-data.json",
    "revision": "76e66523364c6d2563cd0eb039bea415"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-fc558c4a61a98cfe8c4b.js"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-1f0a999f289a320e1983.js`))) {
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
