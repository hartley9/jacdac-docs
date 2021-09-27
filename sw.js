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
    "url": "webpack-runtime-f95e231bcf9ac964dc21.js"
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
    "revision": "26215927bb5fab9b7d70afd022d2c141"
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
    "revision": "34492f4721a9b38fc9128c3310ada848"
  },
  {
    "url": "page-data/sq/d/1530881449.json",
    "revision": "7c11dbfac0a42b27dd3f0ea8418a9a6c"
  },
  {
    "url": "page-data/sq/d/249313281.json",
    "revision": "4d98ef54fd7b1ba4db9820a7c4d7a557"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "640d795454c689efdaa15fc38a7cc8ef"
  },
  {
    "url": "page-data/sq/d/2898794040.json",
    "revision": "c5fc1e98c61754925dd5069b4079a7b1"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "c1b57cf6746d9e3b22c69b7641dc2e5d"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa1b3078b197ca2f5f22bd2b016aba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7cba3ded274051586859f005ac124195"
  },
  {
    "url": "component---src-pages-404-tsx-e129daa4016981e0d8aa.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "21465dff37284dfe1f6f8eefd0b4d34d"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "703fa309f62de770421227a9f713843d"
  },
  {
    "url": "component---src-pages-clients-mdx-3bc3bc7c093f5e69ed4f.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "8f91eed2f8e8f6252fb60df2201f92d9"
  },
  {
    "url": "830485e4a01eef9412f4754ecfe08bd6e6417633-835fedba7d955344321a.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-f59436cb8ddc14bc5bc1.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "73b77cd530381f80c4b446ffd2887ad8"
  },
  {
    "url": "component---src-pages-devices-tsx-4d7f58a629c534921195.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "ff690b9c032709da864328ac22983755"
  },
  {
    "url": "component---src-pages-editors-mdx-735b2ccae94da8ec7481.js"
  },
  {
    "url": "page-data/editors/page-data.json",
    "revision": "828620309e4bb25a8520538be33cfe82"
  },
  {
    "url": "component---src-pages-errors-mdx-d202221cfbf900881091.js"
  },
  {
    "url": "page-data/errors/page-data.json",
    "revision": "ae96323ce332c1f630d0f265f9114854"
  },
  {
    "url": "component---src-pages-github-tsx-d6073039e730a2858748.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "d4a53daf97a2279d105651e9fa6f026d"
  },
  {
    "url": "component---src-pages-hardware-mdx-d4564cb054822428fef4.js"
  },
  {
    "url": "page-data/hardware/page-data.json",
    "revision": "74d93988e2eb0259fd2729095030483e"
  },
  {
    "url": "component---src-pages-index-mdx-eae78a213bb49b71c603.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "c77329473856e9da168a01e8c455729e"
  },
  {
    "url": "component---src-pages-privacy-mdx-4774bd924d50bbc62781.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "cb827fafc35199ee729cf6232f6835a3"
  },
  {
    "url": "component---src-pages-protocol-mdx-c5c3a888705b9180c209.js"
  },
  {
    "url": "page-data/protocol/page-data.json",
    "revision": "2acded762d038e2e0842a3dd2871c673"
  },
  {
    "url": "component---src-components-spec-tsx-17260d81b6e74c6ce3d3.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "c69ff8342f3d1c7efc3155633aa9e724"
  },
  {
    "url": "component---src-pages-services-tsx-622009526e1da815e5f6.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "e0169e56c862e68b426fa169106997e1"
  },
  {
    "url": "component---src-pages-software-mdx-6b91045f8c0528d0e020.js"
  },
  {
    "url": "page-data/software/page-data.json",
    "revision": "92539c9f711c322e5b3206d9b2bae67f"
  },
  {
    "url": "component---src-pages-tools-mdx-6d3a62d1bf7cd5507a33.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "0059d9a6e582fc7d731229065964eea5"
  },
  {
    "url": "component---src-pages-traces-mdx-e939b599e1af11a73395.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "d7deba195906a9304e8c440c2bbcd5e1"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "371dc0e20b47921b01424d6f1899bf00"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "146b405a831779f242c1f41a355d2a81"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "db368a846ee668082ffc632bfe034068"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "7f01a7219b3f4bca3d1a4265483f6737"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "6940f10def5ebf3cbcf39daa59640c40"
  },
  {
    "url": "301eb992595a5c36dc4f85b7198eba5aa8d9b219-35531e03bd8134275b1d.js"
  },
  {
    "url": "8f8350e8e5a1ed189588272f29a5455a64d2ce8f-142fd9d82c7380bda3c2.js"
  },
  {
    "url": "7135060e554842f570a07250da4cced35e9b785f-b18a7f4f6e43db14aff6.js"
  },
  {
    "url": "149f11818c122b40ce2932f15d148eda4aaa5f90-a26c7758a2fba9dafe97.js"
  },
  {
    "url": "component---src-templates-service-tsx-79b60e994f347d56275d.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "85ed189320588ef20100766db13b25d5"
  },
  {
    "url": "component---src-templates-service-playground-tsx-8503751e9790f2fa8d35.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "6ef3f5705b6d0ac18ce44f4291024183"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "67d7c3fa6260cd0ff2e89fb48932d84c"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "60be4325826253969752e5b7a6fcacd1"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "8591cb4246a01a43a1713c69ff935391"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "4eb3020fe869132065f5485f2fe6f89a"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "8e64e04b4097b9f47c2b0c983ff7bdf5"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "92193b8ef499382181671d835b42f755"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "437b9b29576ee053ca8c16beaad1cabf"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "8841b556aa97c8e89baec2588e527860"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "c898d6f0932fce2960348bccd9b0da60"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "b36e092da78fe4fce4b9d94736bde82f"
  },
  {
    "url": "page-data/services/azureiothubhealth/page-data.json",
    "revision": "6052ce9e2ed3d11296b1fdfea86bfca3"
  },
  {
    "url": "page-data/services/azureiothubhealth/playground/page-data.json",
    "revision": "79c3608cf7ffd4cd0a3dd1fa5bf4316f"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "feaa4612e53733724498820b6920d858"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "716e4d25229490b4c744cfc4c652783a"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "3c785125cbb4c662f24a0d4042b5ed47"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "5c7d243df195bce89326be83e34fbfbf"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "764d57ae6c053c629f563276684da55f"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "ac9500a767fb1dde0b3b107934284e8d"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "cb0d5880d595dd70cadacbf24e4f843e"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "aabbf5af458db3d9ec85b96199624fbf"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "c776be17a143a1787ee80230cd98f549"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "ef46f53065c02fd222b85aa6bdb44c65"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "9c2c1be24aa78594c998694a756fdb16"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "c434d0a83610ad135bf3eeb3cdf4dd28"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "b90e09a6ba2d848c929cea9e1f887e3a"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "a6d555ed2d7ab5f58630ed5e4a04a68e"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "2ecbde5d8d1352c3bda5ecb148a552d8"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "db1ba69894892716947672c5e864b12a"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "f7c24b66848ea34949b288dc57092529"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "6d119e7600b319b2e4490d46e88d1cfb"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "1ebe4957912008ba3ee930db36dd0db1"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "ea6e242c187a520484ec20595d521574"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "d167fef62a6a57c45859fae65d962a0d"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "7c83247c7a716be9204444aa48b7d117"
  },
  {
    "url": "page-data/services/dimmer/page-data.json",
    "revision": "38f53aaaf59c1a4637cd0015ab80bfb6"
  },
  {
    "url": "page-data/services/dimmer/playground/page-data.json",
    "revision": "7be0c4e2edd073121d9029c3919fe88f"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "20a082290def671a6727b65d804fec9f"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "1ce855579fe97f944e82d5cad21a1146"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "5c5fffad96d11e206bdc4566d506245a"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "d027bc0cc688b81320fa253b376f941c"
  },
  {
    "url": "page-data/services/dotmatrix/page-data.json",
    "revision": "ef991417a44743f9fe63e16abf1a2646"
  },
  {
    "url": "page-data/services/dotmatrix/playground/page-data.json",
    "revision": "87576f1968417ddbd4bebf10f7100322"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "97efed824ddb7e3521d05a4746c6f884"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "8c63c226b9eddabafcc14d8a82014e91"
  },
  {
    "url": "page-data/services/flex/page-data.json",
    "revision": "c78d6f91a4463c438da8e54ae053aef0"
  },
  {
    "url": "page-data/services/flex/playground/page-data.json",
    "revision": "9cee0b03846e032171e7efd268c20bdc"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "00ea1f078765946810a378ace9931e23"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "7c6f790064e6714ddc5b18177a2bacb5"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "9b815a74c4a8ff1057f709d19cf5247d"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "c9869fdeb061d9f5813fba49f2531a1d"
  },
  {
    "url": "page-data/services/hidadapter/page-data.json",
    "revision": "15e2cf1c98e3e3ecda7dd4d51c556d62"
  },
  {
    "url": "page-data/services/hidadapter/playground/page-data.json",
    "revision": "8e0450c3088f4002ff51440f9df52cdc"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "a74b983c47fd7b7da008262868836687"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "6d6fd0ccfb7df0a722f1f68ec9384fea"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "143af5cc25982c085f2c2256069c34cc"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "c87da8c2254038072076a2a9d9792362"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "89fde014cf3086360ca2af36d408f5e6"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "f81e116835bfe425bce51cfda4bb0f81"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "422464d2d7a8281556f014dc7e5b8651"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "766be86c0035df32ab5c14215d427467"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "912d3669083851a219d90831f7bd7178"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "6c9eee05daf1e7a83d0c402c196e5daa"
  },
  {
    "url": "page-data/services/infrastructure/page-data.json",
    "revision": "99abfa21740e687bbdadf0f0bd1e8b91"
  },
  {
    "url": "page-data/services/infrastructure/playground/page-data.json",
    "revision": "a28e7912b0d2837139d2f4d2c0705700"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "51773e03e405f77a4291e799498fb3b8"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "55f455062acdb49de4aeeb4667ad8944"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "69ef0df3744f8dc6e1807f12350d4d73"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "ba0e74197d5722ce20f6b87f81094814"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "7ff70e3aefea3d740d80a108266409d6"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "ae74ef35bbcf329730fc8c074091859e"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "5e851d9214234e8a36a05539494ecdf1"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "a4ce3d3d1e8572f53464623914be7c4d"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "2d9d261f0abd98989eaf5582b91ab446"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "3d083bd0553aa4b0c13c9abad1eea83a"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "297acedf4f3a4fe34badd3999f8663e4"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "efc6f77a61082fcb7f3156b95b33ca19"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "ef32214575ca2556dce8e448449b60e8"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "1a10a1bb584b34e845ade33881e1ea11"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "e3b972cc07d6147295d6ed1d379b8100"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "2d392e670c8ab8fa704b30aa4720f3b4"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "3a64c4cf7cdc49cdaf933c038ade5f7a"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "4a3dffbc600fe8418024edfd79666fd0"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "650b771a82d515eab8cdbad6321e75f3"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "ec9f9cb5f17a8005d92b84f402eaa011"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "72a7617762a04dd6350ebfec8ea17f64"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "8e31a8bec5f42f8152618b25203eb1d2"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "1b213b0afc315305fe10aaed6b1e93e7"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "8c90ad9ec674883f47f042e3c824163d"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "6ae67b0866edb644c22d1abac49dff55"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "d68ffa912a97b4665354995e5fa56d1e"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "8b7e2ab27ebfdfd97f1de8da382e8eb3"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "e4dd8f32f64a5901c75e97fd4d732b57"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "6441058099d7994d4ec8dc5d05befa41"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "90da35ca7430e2111957433095f41444"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "ef34cc406cdd8a2faa95bc381f7d030f"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "9736734a7ddd5ce9d7ba883152b2880b"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "54513ba3e6dddec7766515ee48fa7188"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "9af3dd262aeb64fd3ec1d887899f697e"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "3f84e5f8925d053745f850b12d209d26"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "4a996c6fee0304a39b6a69fed5c16bfc"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "42b0fd4d366d6b1dffc1c30861e23fc2"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "267b146fa064ebc4e1d407e7643fdc63"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "c007c49f48410cf13f11a76162054e4a"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "5cfd2fd311f1f7fd073ce7438af09202"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "4cd4b75e57b39d10d55207e42d99b9b8"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "af824dff559edbef46f2c3d0f14ebd9c"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "dba7aa74f35387c277e0f8140f5957d1"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "055131ec95515f88caf5211e5a4eaeb1"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "f792fa7f1de23b45f6e3b22589e36172"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "925dd9023312e7178e4c9d88fa1eb4b4"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "ceaf78e704938f0d179b484e9c47a7cf"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "6a2d7b0c0dbb0d83c7160225441d4d6b"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "4bdda521db6bc319784b94ae7135cb48"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "2b3f7eebd0952eb7b813f8bce0210446"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "8ced3b4b44dbaac45379a7434813043d"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "f52d372543b540a41a6c829dbcc01f75"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "602f60de1361c3310d5b5d4d5c88afdb"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "915f4ece4c13e195d2b01496b3b8dbcc"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "3be03aee29366d9844cd309574d96787"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "2bf4906ae63aed8b24de62e36c44d3fc"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "7bc12342f8d8f6d62d570cb21fad27e3"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "ba7b4e564401b36f03593bc2add3606c"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "ee142c369bbd4795841acb315fad4281"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "8b0af651930813943891691cbd641de8"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "77fff61c973b72db7fb735a265667f9b"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "ead8f851a42f84048958da8b12fca59d"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "0daaa00630b7e4cca9dc499683b0fd0b"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "98a478fb22a00de1940364e93f6408ed"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "a01af42a792db733b3cf2938df2c0899"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "f6a7f1a7959e43af153bde4d0de469eb"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "d427ae9c96365f73b3dc37e0e1bb93d5"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "eb14dc3ccea48749dcce81205fafe650"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "a53304526a6231d03046567a0e789c09"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "50800b7e1ed168be8481d4450dc1ea69"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "b4fee32b4def9b399edc2ec311898194"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "6203f65af2767c557d4a9231343826e9"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "053d9d2600fc2379d1403a99ef7875c6"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "0bbb07d0aebdb453b520f46728d359e3"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "f4f658b9a374f24989a14e060d7ada77"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "cdda9f255b85f3779a1076e1d85ed245"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "aa350109435cc1ab1222cc7828524c6c"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "4a546b70cb71b9d70f507e60aa1c9558"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "208d7ee8b3d6fde13de12cf1cb9ddc7b"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "9d6c26326e5296b6b93130b04543d921"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "d5a3f0d69d8fe86a22929b773d471974"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "59378a06e9976d852231e7868d35c2f6"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "326b3ccd13a1caf46c824b2867c060e2"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "70646ce2a8c0f52e82631657c3b34b75"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "92d3b864d5c60105259049603b7f8ce4"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "16ed131a7b98b6f5e5c14954dbee86ed"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "08cb79a872cd1d3d01094b2ca5578f5d"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "bfaf93cf684e01ec08350270d75df9a5"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "85b0d419e30e51a80a2e6fec07de0069"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "7b73121644afe294d91dc7e6da0b2af8"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "c48c3346011bea90b76a87159ad1ce5e"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "8512bd6d628f8f7a632e0037d192934e"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "12b820f1be86fd8e65de3f54168cbaab"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "016b97ad93232c0516f5962a6067352d"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "f9d89404013f31fe0be8f9ffeca3b629"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "a79cdde24cfd4b08972833ce715d2711"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "01cca24b1171ff2b1463356f0e7ce9be"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "d974ca7c898bb2d4f04c3eef1013cc0f"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "42385e679010f39415f9d617b0b08fb1"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "99dd4d58bbf69135c4d63aacc20d7f37"
  },
  {
    "url": "component---src-templates-device-company-tsx-6cb8fde65bf64da4e42d.js"
  },
  {
    "url": "page-data/devices/microbit/foundation/page-data.json",
    "revision": "d87d4f03e4978091c975ab4cf35bed7a"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-b48721bb2d8044c12f15.js"
  },
  {
    "url": "component---src-templates-device-tsx-13759ce8cef2736fc63e.js"
  },
  {
    "url": "page-data/devices/microbit/foundation/microbitv2/page-data.json",
    "revision": "0ffb1448e4293e2626c2eaf8f3718c3a"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "dc3393009160ec8944b8d101aa4cf852"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v02/page-data.json",
    "revision": "2bc0c4a810c53bd7d6dc934920da06ba"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v10/page-data.json",
    "revision": "1170abd26497dda5313d80ae82e153bd"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometerv20/page-data.json",
    "revision": "22ae89b792006c416d3cb6e965ac69a9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchinput34v13/page-data.json",
    "revision": "6fe6b6cf1669dfecfd975cff415fd4dc"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchoutputv11/page-data.json",
    "revision": "508d61262339b4ee2dfe0a62d505b47b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmambientlight55v01/page-data.json",
    "revision": "ad471981759d43c28c1c56373857a48e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmanalogjoystick44v02/page-data.json",
    "revision": "0cc75039b86f28477d15c5c9eb904b93"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "7af079e60d28a9bac40f35cbbedd6832"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv20/page-data.json",
    "revision": "3b35522322a5160a4472cf80f687ea5f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton10v13/page-data.json",
    "revision": "3dc520974f4676ff6c6a105c52db6866"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton40v02/page-data.json",
    "revision": "4620226ad9e3d4839cfad49424a9faad"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuttonterminal62v01/page-data.json",
    "revision": "fc3c3d351c4eee644fd2f8cdac064daa"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuzzerv20/page-data.json",
    "revision": "5485576daa964daa1e5516ffe8b7efa7"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickairquality4v32/page-data.json",
    "revision": "69adb586ba16eb65fdba6f7bd990a738"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickcolorv32/page-data.json",
    "revision": "5c8eac7f3e176717d3cf493182b9203c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbuttonv20/page-data.json",
    "revision": "f05656dd45de891765d5eb0fc9ce6580"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv20/page-data.json",
    "revision": "4d9eb618851a4bcc6548131bbbe183f4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmflexv10/page-data.json",
    "revision": "4eb44a5fff3e4d249b7df71d6ee357a7"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv20/page-data.json",
    "revision": "45cbd1852016a4860a2e5bbd8af43c44"
  },
  {
    "url": "page-data/devices/microsoft/research/jmhidserversf441v02/page-data.json",
    "revision": "ece25c7a91fb78f3aba80ced7c39d7ff"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v10/page-data.json",
    "revision": "415580922ba9e43c8032f9dc9216df6c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v11/page-data.json",
    "revision": "2848ba57edeecf0f207f9a8370653193"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v12/page-data.json",
    "revision": "d04e199c7618d8a3ea4ae8b60f032f6d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "fc9aa02a504e6f5744665cfb6d913758"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "64940935d1c4f379e8c8d60a657d0cc5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpower/page-data.json",
    "revision": "1afe4b89bb5f82a5dbd1834a0d471bd0"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "67231f38f8a17840603b8a500c7236c4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "c1f5c1c0827d8978b1d54cd255139bb8"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "4b98ed7b5b632c1dce9617c2685e3a5b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "6c12593e919c2ba3afb3bbcbe5cba845"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "859e8a5623cbfbedabcc242e59069e79"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledbar10v01/page-data.json",
    "revision": "763cf919905deb703890bdb2c26795c9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledgenericv01/page-data.json",
    "revision": "85ed5c77e87eea32d0c8188994d5457f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledringv21/page-data.json",
    "revision": "d01becb06ae6990fd53b61d93332d90c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv10/page-data.json",
    "revision": "3ee3545a08cc067e9a4ba284f2930f51"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsinglergbled42v01/page-data.json",
    "revision": "8836dad2494b352b0f8596755fd5a089"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v10/page-data.json",
    "revision": "19be806545170b2c0f3b9a0c0d8397c3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv2/page-data.json",
    "revision": "602a394dea8d9a26aa5917d2c50e92eb"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v10a/page-data.json",
    "revision": "fdd058e685d488e353feb071cc98db12"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v11/page-data.json",
    "revision": "d28dcb5f9cae664896b8fa34f3ee7749"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "370fcd318f1aca5a26d05cc7a047cb5b"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-12343710fc191adefbc3.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "e4ef75f94ad32dc918b1be33c8c10a14"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-a96161c575379206ada4.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "83a4d120d1a6f618907e420f60ece0c1"
  },
  {
    "url": "component---src-pages-tools-commissioner-tsx-c5380ed3a6da7a3ffbed.js"
  },
  {
    "url": "page-data/tools/commissioner/page-data.json",
    "revision": "7178f8d7967a88a47c680caee675af55"
  },
  {
    "url": "baf0fd2d778787cec7104fdce75a778b8b7a3d97-3d027072348e610c46b8.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-d42bc3c3004ac8a715f3.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "754081e988406fcce4ad4ed042ab1887"
  },
  {
    "url": "a77c613bd0faa103b953c0d40475a17f2d569635-96d5cd62dc62e52f880a.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-c5f22632c50fc07f13df.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "b0795b6b6b29e17533892eca1d834320"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-c615ac949e6fd4b690dd.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "c14512471d11242af95dddcdfe649041"
  },
  {
    "url": "ae29c6db-4c7aec451bcf0703b5b6.js"
  },
  {
    "url": "component---src-pages-tools-hid-events-tsx-05c860b3b87f71c822ea.js"
  },
  {
    "url": "page-data/tools/hid-events/page-data.json",
    "revision": "f35a1b67d905dbd6a57227bd509592f2"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-60464247caf374a1fcdd.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "8c2ec00775e0bafd7883ac8f73a8b424"
  },
  {
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-1be06bca13abf802dbe3.js"
  },
  {
    "url": "page-data/tools/lightsensor-accessible/page-data.json",
    "revision": "3036376320033ca52e13679bbb6f8c44"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-9236bc6551162a2b0605.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "e53f1fb9f3a2f935afa6a0b9d60a5dcd"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-0dfdf84bbb6309ab8eb3.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "b3fc4c2364d19ea3a263292bb4685292"
  },
  {
    "url": "73f4d854ede10a3b91bb00b3be5912749eb02c9d-5a0a2fc4711dd2f118a2.js"
  },
  {
    "url": "86ab0ffe4ebd6a8173cf195d01dfee36185fdf2b-fb6d9b4f5c5b508f5e58.js"
  },
  {
    "url": "41a69591c06d74ab821d0a6f985f09ba8c9c9577-400db000bdd32fb827e0.js"
  },
  {
    "url": "component---src-pages-tools-model-editor-tsx-6e85334712a376d919d6.js"
  },
  {
    "url": "page-data/tools/model-editor/page-data.json",
    "revision": "6a9f79248060797fa6a73752ac431be7"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "21edff1f645d70d35424a04e5ba90d06"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-f0af8a92665b89000934.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "b218a5c148b49ba46d601dd8bb546385"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-d31efdfe532d7bbe6cae.js"
  },
  {
    "url": "page-data/tools/peers/page-data.json",
    "revision": "d4c8915dcf7425483f0beeba43e21a9f"
  },
  {
    "url": "component---src-pages-tools-player-mdx-7142aa14a9a052d04910.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "61d3716f6b54e607f1b8532933079734"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-40b43a0f45db0260e8b0.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "404a9e16d2334a42de370bd83215d48e"
  },
  {
    "url": "component---src-pages-tools-qr-silk-tsx-13add3936e5e5553561f.js"
  },
  {
    "url": "page-data/tools/qr-silk/page-data.json",
    "revision": "3bf47beac1e9b1b5158d3e6aec3e54f6"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-6d980c1e9c23d0a6a426.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "17f377cc51bdcaad21196705525bdef8"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-cf5202fe830032ed26f3.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "2f5d66924926799d0ea626cbe2aae210"
  },
  {
    "url": "component---src-pages-tools-settings-tsx-4d8b1bc4d218bca94b41.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "cd20b7f44132805b4a1f5680f42ced2f"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-585140106bc2de52ce08.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "54e594405a686a1c3a0045b2d7187cde"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-1f17b68001296e4b6e29.js`))) {
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
