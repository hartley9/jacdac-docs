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
    "url": "webpack-runtime-7ccee0f155465e419d11.js"
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
    "revision": "5aac65e9b3ab5e09f985d6992d83e068"
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
    "revision": "b923828d7cad3ce89604c94c64c5c669"
  },
  {
    "url": "page-data/sq/d/1530881449.json",
    "revision": "9eeed2d7721b2bfa26dbc63e59c86279"
  },
  {
    "url": "page-data/sq/d/249313281.json",
    "revision": "0fbb1286df3ec91cac741751b2ceae78"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "82f5d2da8f8ece384fd72986ebc3471d"
  },
  {
    "url": "page-data/sq/d/2898794040.json",
    "revision": "c5fc1e98c61754925dd5069b4079a7b1"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "1bfaa8ebb40493788e2f159e42e8e418"
  },
  {
    "url": "page-data/sq/d/4292774041.json",
    "revision": "b0f9cbbeb365f9855c7b283e2d54e45e"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa1b3078b197ca2f5f22bd2b016aba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2a78e22c2f0792f977064cbccb03cd7f"
  },
  {
    "url": "component---src-pages-404-tsx-e129daa4016981e0d8aa.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "7d70bfb3f30ad50de6c56d264d3ad271"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "b3f58359a5db900e45a02eeceabfb261"
  },
  {
    "url": "component---src-pages-clients-mdx-3bc3bc7c093f5e69ed4f.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "35186b7d84ef6e92bd1dd640b7386d90"
  },
  {
    "url": "830485e4a01eef9412f4754ecfe08bd6e6417633-e8876e8a98c61647befb.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-f59436cb8ddc14bc5bc1.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "ff29ff36bc66230bf4b219492701bf7f"
  },
  {
    "url": "component---src-pages-devices-tsx-aba471a67459a8c26487.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "e0aebd951a65f87d2e7c6ac010e594d4"
  },
  {
    "url": "component---src-pages-editors-mdx-735b2ccae94da8ec7481.js"
  },
  {
    "url": "page-data/editors/page-data.json",
    "revision": "3ed6260143a54a91fd300492afa3a209"
  },
  {
    "url": "component---src-pages-errors-mdx-d202221cfbf900881091.js"
  },
  {
    "url": "page-data/errors/page-data.json",
    "revision": "733c6cb36d6651b63d530170ff309b5a"
  },
  {
    "url": "component---src-pages-github-tsx-d6073039e730a2858748.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "436d42f5c9d1de480a87451e5433823c"
  },
  {
    "url": "component---src-pages-hardware-mdx-d4564cb054822428fef4.js"
  },
  {
    "url": "page-data/hardware/page-data.json",
    "revision": "cb49d9a12f01b5873f33b343e99efdaf"
  },
  {
    "url": "component---src-pages-index-mdx-eae78a213bb49b71c603.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "84ee89daa6535595c4b47afd141fac3b"
  },
  {
    "url": "component---src-pages-privacy-mdx-4774bd924d50bbc62781.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "a06286b66b206af77c3465b51f50bc6a"
  },
  {
    "url": "component---src-pages-protocol-mdx-c5c3a888705b9180c209.js"
  },
  {
    "url": "page-data/protocol/page-data.json",
    "revision": "f9b9871bf5b4a2a271a28e4ab00f6ad9"
  },
  {
    "url": "component---src-components-spec-tsx-17260d81b6e74c6ce3d3.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "a3efbe523a759f595f63f058652804cb"
  },
  {
    "url": "component---src-pages-services-tsx-622009526e1da815e5f6.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "aaee3fc72853117d431e3528e026bd2f"
  },
  {
    "url": "component---src-pages-software-mdx-6b91045f8c0528d0e020.js"
  },
  {
    "url": "page-data/software/page-data.json",
    "revision": "a3a9fbfa666633cb8cee6336bd4d9c3a"
  },
  {
    "url": "component---src-pages-tools-mdx-6d3a62d1bf7cd5507a33.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "7c81667ebe8d0c3250fe42d1d567499e"
  },
  {
    "url": "component---src-pages-traces-mdx-e939b599e1af11a73395.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "3fcefc3d9ed75335473877a8326351d7"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "32052637fc1903233e4435a0b5cc99ce"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "3b5975b24921f90b0263bb6f55bfb40d"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "ec97aa31b24224b74ce3b24adacc3e81"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "e1d94f170bf98711e0ef4868d0e1c0a4"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "2fe810a09e8df9e49980520edeb6a0e6"
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
    "url": "component---src-templates-service-tsx-aa4ace7d7d0068d9395c.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "935b806d69627a45af0c6f5d2bc812b8"
  },
  {
    "url": "component---src-templates-service-playground-tsx-8503751e9790f2fa8d35.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "4a468612c42366013ad9f0ed0c08f6c2"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "9f8bbaf61a3026b32e750c2b3da7c183"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "4eda7d68e6d1eac7c67c8f6e39488a1c"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "60163cc415a493af2aa00250151368e8"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "51ff2d04011bffbc5ea559d1342dcc10"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "887388744158dfc3788313d3814fdda7"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "2e59c90b4805305bf24120c0e70178a4"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "018dd2884f2b2edc6b02c6b6c06fffd7"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "93d2ffda43dbf79cacefbf824871e54d"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "03e02392245233c1bb76bafa537bfb62"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "79162a613b2b4db6275ddaa123954b3c"
  },
  {
    "url": "page-data/services/azureiothubhealth/page-data.json",
    "revision": "3d163641df3e3be022d952b577d54f60"
  },
  {
    "url": "page-data/services/azureiothubhealth/playground/page-data.json",
    "revision": "d7b3af05c175da4a795c863b811aa5e9"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "7897cc6e9a3ac3c1e50304e437508c87"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "4757d1365bb25f286ae9ff46e99730fe"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "c99fed9d61023a16613b405154800efe"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "e73f404bb4f8806136ae54efd763cce5"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "92ecab1cd92205de5ae714f043ba15eb"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "096c96562db5521e0f67ca3fc3a87d0d"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "5cdc2b88a442726de9b53068ecb71c0c"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "b0ca7edc570442483be3e2ef93c78f7a"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "128c93dd1602c312648eebed02e83133"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "a08c1a022b86f8a6ed4b91e6703fddcd"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "6102a09c39703288b30f0c10ddf3c661"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "486c31e203d7f262da1db5c77b3071c6"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "c920085dd6f768e63cc801412e9b29cd"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "3f69660c50133b0ea3a34c81e64b9a64"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "a0ccb650ad50b924af6d8c1ed4a81c60"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "8f8f611f57576cd0ca5d4e809330dceb"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "1f3abf90318b59a2a4b6d42ad74ca486"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "28bf7ba3c1c63f477a3f827f73f468ac"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "09f1bbef9a74cb03df874bac0cd1a99c"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "a4ce559f48612df889ad048303977b75"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "6b2f727ac2c214548f3e059eb65bdebd"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "9581261c3dd76fbf04aad770cb2c9b53"
  },
  {
    "url": "page-data/services/dimmer/page-data.json",
    "revision": "7a45c1003fbcc20812a5a507385071f8"
  },
  {
    "url": "page-data/services/dimmer/playground/page-data.json",
    "revision": "cd9fa0c33b8912de640acaf9a2bdc079"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "bb2e8d57156615a26de9207f14275bd1"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "d263e949cf6f1ff63fb51f68a0c413f4"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "c077bd98b12c95b633c6443771218201"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "f90d287520abf0acd4e7381d8f4208d8"
  },
  {
    "url": "page-data/services/dotmatrix/page-data.json",
    "revision": "18554361a4bf805fe9262fc027e60241"
  },
  {
    "url": "page-data/services/dotmatrix/playground/page-data.json",
    "revision": "a9f6a07b46a49e8655a76926b855f8dc"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "d43dc3a44a4a22910eaef1d9e6f47bcb"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "72f08315d54a146f073e5b31fae122e3"
  },
  {
    "url": "page-data/services/flex/page-data.json",
    "revision": "9e823bddfc9a0d2b70f5ecbf0495274f"
  },
  {
    "url": "page-data/services/flex/playground/page-data.json",
    "revision": "dbdd5ba578ab97b7808d291ff191435f"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "7bbbb6452c03dde89111ae5b4ea0c557"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "522aee96c7a0a80c5d3201c03933d7a2"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "76f77800c259d843d3699a1b1263e1d2"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "230bec74745967ca72298085ec0a6664"
  },
  {
    "url": "page-data/services/hidadapter/page-data.json",
    "revision": "6c46be83d7edace5f7ae551b0ebecb77"
  },
  {
    "url": "page-data/services/hidadapter/playground/page-data.json",
    "revision": "ee66827f3419874c994c3ea023d24ecd"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "9aabe7a79074611a82dc643e2c6bff56"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "06f3c9c50439e494d3c1deae8586f3fd"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "8d33576fb3fbc5edbb0ed46f11e3c158"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "47795018b7a4d383b055b5c984ad53cb"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "5463c2ffe51e69bfe83d7e083a5f800f"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "a28f0abbeaf843793795f2b1ae2a2461"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "bf6399f9efe4ddd0653653bc9fa0a397"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "3a3dfd88423201a1c05228420821e16e"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "22e3bc6706b6360db26df0880a7ee57f"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "ec66b4b27b489ae40a8ea12089a0ae04"
  },
  {
    "url": "page-data/services/infrastructure/page-data.json",
    "revision": "4ed0c9a0c6601aac4d8249ed5cc3fce0"
  },
  {
    "url": "page-data/services/infrastructure/playground/page-data.json",
    "revision": "a530fb06b23ff21e69f0689275284782"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "3d6dde326f26c17b89b6790e5a6691bc"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "221a657681b76d5cb507d4c106dfc27d"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "9dbf87362be31692128a91106cc274da"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "de086d4c2c746bd4a2ed4a799618162f"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "68597d00d3c09425b9bd9e994bff0136"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "b30bc4a07c047964df7236181cd04352"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "e96e7ce7b17442a1e9822ac17f3035cf"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "823b9662e1e3e4042665d62d91b44e0f"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "96d07a4ed7201289c96afdea3449d819"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "5fff158a33c6f4abf3463cdb2e62cdda"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "06d18ae18bf9639112bc23bfb9188cf5"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "f56b841a7cfea0e08b66bae0e56f20fb"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "0d3abeab1d31098683b86203cf02d060"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "557064c25ec285a5ea87f8da5b3aca70"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "e4865141bf119aede8a180507babb9b2"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "792824ccdc91d3dca6286ff7ca94bdb3"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "134f45bb867241076da869898ef28970"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "b125c4f033d3aac8f78655847192bc73"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "1b5cc7a31f0a93ee0133a716d3e672fe"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "964ea9542efc41381b6604516d9ddb3a"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "f9551503b6a2f92c1c6a253cffd67f1e"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "5bdb0f00dc99dd52faac7a04165a4f9b"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "12aca9c4e7fb687b980335ab5d29a4df"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "e51be1f172403a569b050c1f5bf0fedb"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "bdfce033d80533188849f0c88c3a7a75"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "74f4a504130a9aa24855dd7eac4c9835"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "24fa2808f3473b338e958eb1e78d00b3"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "8a3468881debe1c735ec144342b13058"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "75877c7c6d1ec2303f254aa645e878f6"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "a2616c3fd5030714538b11bc3ace2d76"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "ae599a4d4e103b77e39b1e6cc23f313c"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "fd8b028bdc05267e073e5fe0b482e5dc"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "a85f39fcb27ff56a0c315f8914fc1ade"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "904cad06fd6a7f2f8fa2f0723e7a06c9"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "980f2634a7b93b367c17a95b59bbe2d0"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "a98e8b3ea60c5dd7826ff13bebc936aa"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "08b5dbe2ff28140cd494e9259f187b06"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "506259d54a3ed2ba9506ec8002ff1da4"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "115c45eff9584dbd5b1ae30c8a4bc36d"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "55cb587d9002c41b8ae44a38a3954f8b"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "ca3a98df56ac650c82f399be6f214d8d"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "43551f6c0b8e1a4a1d307033fc4a6e0d"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "fcc2340376155c183824b41a9407fbad"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "6cced60c1710deaa3fdb4dac2970e0a4"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "f87d68f105cd0f28c82bb530f300dbd5"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "3167e69e36015c4babfb668143f1768f"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "3d80bae6c3eaa5157c111eb88b52b093"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "4005619c08f4d293720e3878e4e660b4"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "9af11e2ac7dc27799a8ce46c6bb9e60b"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "1503f21f232df8336cc0fa5095d8ca7e"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "c76690a6b1624119670b23bb409955a1"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "14d4c0edb39a2ed23d482c28dbc1f0ba"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "21e0624a0e20edaff105391a008e1fae"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "30dfe1330cd1dee6517cab44cb4f9f5d"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "e46fb980b8acaa03243d21c6aa8cd2f6"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "bc65b7ca5ceeaac31d7931fa1fb2711b"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "65b3caf3355e2a556335a11f32b63b04"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "b760e291982e6509d95f05663461ee41"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "010e1d32827b76ba5bb3ac3dd8328948"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "619be8baf16c74d8116f9896970e0959"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "2f82dc5d55b1832c6ee9bda2083f7e40"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "e2ff27140411278e6988c00a772b123a"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "659ba5aabe8854598ae18818352b2905"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "ec31169a9fb7fc0d63e2cbce0d37d73b"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "3e13b08d41eac70162e4084c0ea9dfea"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "a5ed0b93f19ce272f63cc5e6f8b3b836"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "ae2e6707c237e541af59fdaa82c221bc"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "55513d960f48f79bd9c9a380542e3718"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "219f54ab80ec2e8fa246363666f64606"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "54ecbe1e6a4e8c98f31f00f65d94627d"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "4a8334cc8badc9e870252bc1df4e2a10"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "6c5691ac314bb4d727efc1ebb0e7b136"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "1b884131b0e1eba00313bd078c704b8d"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "ed98fbf97e7adff1df0e125af814790f"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "a2d8f90188f131a2072011aa0cf014ee"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "38948eb3e47d61970adaf4f615831873"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "919c5226607bc06b8e1e40d52d75b921"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "c0964f340b9fd8279a04dc6e2fdefc32"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "0aa1f05ccb3bf21320d96f01002a691c"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "58d48441be653710aa481909445dd04d"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "8f54b3057d73cdd7f91ee73521585d1a"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "3e5651774e4ff8be7bdbb9ed799f53f0"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "64ccc89e138f5b903187d3ff8d5e28b2"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "faceeb712b080372d68574d017d03ab0"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "2d597c4ed055bf4e685628fa6f71c266"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "57d5482a7f01db2bc63c380174b9ae8f"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "f65b95fb1f02da96859a188f9ffc4415"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "5f89c50e36fe1f8a74bb15d1975b953a"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "3288c9e521ef287e12567767b2dab207"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "1a80a4891d405a01b6b7740146a89833"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "e4700f6b376c6dc66a802549f198ac3f"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "a514b05a8f7a74839a0bacfc4e2fab9c"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "3f89917e39ab7a2e6b430a6a96546dbc"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "a7006dd8defcb47b263e304a088617ad"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "70c0a0e46a7c71b021e770a4634e2945"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "6232b462d5bf7e1f22e3bdb17766c5da"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "de26f49bafa31099e817cfb5d0e91d22"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "a7ce26217a24c6236dad1f4167021874"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "96a5dbd28fb7955751ca47ce4527d66f"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "55b8f698a2ebfcb73dc2aac99d7bca21"
  },
  {
    "url": "component---src-templates-device-company-tsx-1ab1a65c2ce616a2b898.js"
  },
  {
    "url": "page-data/devices/microbit/foundation/page-data.json",
    "revision": "19a7e13c647e7752888e48e8c866a150"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-b48721bb2d8044c12f15.js"
  },
  {
    "url": "component---src-templates-device-tsx-e587675b79c0f7c08891.js"
  },
  {
    "url": "page-data/devices/microbit/foundation/microbitv2/page-data.json",
    "revision": "666d7ab4c2aa7568ad17dc698525f5da"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "dc7b2a333fa2ade72b84c008e6aa20d3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v02/page-data.json",
    "revision": "e302167f37b178ea09aece845938c094"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v10/page-data.json",
    "revision": "84ea5328b3d2ef6b2d86a4430ec82f95"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometerv20/page-data.json",
    "revision": "666bcf67702a3cc453cad47e10301683"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchinput34v13/page-data.json",
    "revision": "e703f2d4dbb7056ee8580c72c208778b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchoutputv11/page-data.json",
    "revision": "bef5cec1843fd4e00b71a9c6c57a1bf9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmambientlight55v01/page-data.json",
    "revision": "439316e4583ebcb18028dec21fb81328"
  },
  {
    "url": "page-data/devices/microsoft/research/jmanalogjoystick44v02/page-data.json",
    "revision": "26de6bcdc1296b882de9a166f68f574d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "9a15ba787a2934c65c5d2f071e7f5b94"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv20/page-data.json",
    "revision": "515d94ee23c9e2988005a7eb7c59fd31"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton10v13/page-data.json",
    "revision": "da1780188cfdd578cb286a1d27055172"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton40v02/page-data.json",
    "revision": "3dc8b08ca40dffd695821bf5669c6ea2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuttonterminal62v01/page-data.json",
    "revision": "089226826d2b5858c75594bb63560a67"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuzzerv20/page-data.json",
    "revision": "c204f01226eac4a1159ba0a7638ce194"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickairquality4v32/page-data.json",
    "revision": "7f48ab95c82e452abd4fe1a657959379"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickcolorv32/page-data.json",
    "revision": "c405871f23c65e1db5c5fa0731ed417a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbuttonv20/page-data.json",
    "revision": "0e75c018cb2079596894244ecd13e978"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv20/page-data.json",
    "revision": "c8252e50a251caf648c182020d1f9697"
  },
  {
    "url": "page-data/devices/microsoft/research/jmflexv10/page-data.json",
    "revision": "4a0c679b8d54176ebfaeaa6697361b4d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv20/page-data.json",
    "revision": "fe67164db4b81b61cc9c65ea2bc2c3e2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmhidserversf441v02/page-data.json",
    "revision": "b62457d27de0e5594e403bbcfeb42b86"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v10/page-data.json",
    "revision": "30557560a5ff10e2859c8d977fef7045"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v11/page-data.json",
    "revision": "0a729e4e6aeda08ed64e8815c711b107"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v12/page-data.json",
    "revision": "fe3131169c1762a93f6a00a76397c6cd"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "2c6b0cabd49ccfab04e4748e61d3cad2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "2cc5c4d8eddb68d75a65f7eb915780a4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpower/page-data.json",
    "revision": "e28ec3636272811567926e76aa0cef4c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "d262f015e3328ea5b6fc2a57aff035da"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "e20b35e2ec413f245f4ce07f8ce42f62"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "91ac4bfc1952a80903f42a9f290d9b5f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "6d1d2a8f4fff3a608149b4262d52db89"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "91b463b78b637c9db09af521eef8141b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledbar10v01/page-data.json",
    "revision": "232a2f06c4eafe9159b964fd800241fd"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledgenericv01/page-data.json",
    "revision": "9db71087b971b60940cf75e13724540f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledringv21/page-data.json",
    "revision": "0acd3d86fbf05e33693a8e24d0f631e7"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv10/page-data.json",
    "revision": "fc40738994748fc93a6c117152c42ba6"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsinglergbled42v01/page-data.json",
    "revision": "b748b297fc1477f1b90053897c121b1d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v10/page-data.json",
    "revision": "64d29c9cf191012ad956620fbc6a03cc"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v11/page-data.json",
    "revision": "4e5e162456e3eadff11299c0a86cad31"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv2/page-data.json",
    "revision": "c325ce7cd33d5441786c5f3d30392412"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v10a/page-data.json",
    "revision": "9bf847513504209414b7fe0edc8dd194"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v11/page-data.json",
    "revision": "233bef358bb45603ca00131d64858aa9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "a4a1d6a302a2611c264c5b3560b3acf6"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-12343710fc191adefbc3.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "3845890a5ec59928f305f10b41cbd3a5"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-40ce7b599a8213748c91.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "c47fbfa54cfd7140c93259f1fc6cf0d7"
  },
  {
    "url": "component---src-pages-tools-commissioner-tsx-f4b6b4a6653df0d9ce8e.js"
  },
  {
    "url": "page-data/tools/commissioner/page-data.json",
    "revision": "6f9e7f2de9ea57b16152614062bbcbff"
  },
  {
    "url": "baf0fd2d778787cec7104fdce75a778b8b7a3d97-3d027072348e610c46b8.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-86c4c136d464d0908f17.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "0507ff244bddd879233a3c7aeda9c602"
  },
  {
    "url": "a77c613bd0faa103b953c0d40475a17f2d569635-6307194e61f69325bf60.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-c5f22632c50fc07f13df.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "dbefca9b372686ac77cda9178c8a7257"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-3fc64de6ff8ca0a73c68.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "d8664cb1a2d1d62b0e7ddb7f8910ce83"
  },
  {
    "url": "ae29c6db-4c7aec451bcf0703b5b6.js"
  },
  {
    "url": "component---src-pages-tools-hid-events-tsx-91ac68c5e424df862370.js"
  },
  {
    "url": "page-data/tools/hid-events/page-data.json",
    "revision": "4946661207366e70c99ca1b52fcd0eb2"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-60464247caf374a1fcdd.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "b9bd523f25b378953241b04d2ca60f8c"
  },
  {
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-1be06bca13abf802dbe3.js"
  },
  {
    "url": "page-data/tools/lightsensor-accessible/page-data.json",
    "revision": "ca39584a0fb9ab1847328c4d96606eb6"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-9236bc6551162a2b0605.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "57b2acf057f721d265135e2811db2e4a"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-0dfdf84bbb6309ab8eb3.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "bee1e0d73b014e507e240fdd1b4fce41"
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
    "revision": "945db7298c0f82991fc2ad629d4f9a6e"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "42942d63c27c6e9f89c03dd182c95da4"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-f0af8a92665b89000934.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "40f0b8769e6f85ccef12d666624108a6"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-d31efdfe532d7bbe6cae.js"
  },
  {
    "url": "page-data/tools/peers/page-data.json",
    "revision": "a03344b8ae37c5e45a0513854e9af243"
  },
  {
    "url": "component---src-pages-tools-player-mdx-7142aa14a9a052d04910.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "23e4aa91ba8c2e68c32062595454eff2"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-a674f94469949af27dde.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "e011ef0db535694551553d29d97bca9d"
  },
  {
    "url": "component---src-pages-tools-qr-silk-tsx-13add3936e5e5553561f.js"
  },
  {
    "url": "page-data/tools/qr-silk/page-data.json",
    "revision": "0963b554b1e077b8c61c2f64b5635b0c"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-6d980c1e9c23d0a6a426.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "d4d994e8cfc1158a827a33e7062901b9"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-cf5202fe830032ed26f3.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "afceeed85318b21f6ac73a79a0538a65"
  },
  {
    "url": "component---src-pages-tools-settings-tsx-b7b5becb8f8d73bd019b.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "e3d8a974af8a5be16d8a6ad89df80390"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-72e8035787622c0a7717.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "d7fdbe7f7d6575f7458ead84bb2accee"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-e33240c90d87962576b5.js`))) {
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
