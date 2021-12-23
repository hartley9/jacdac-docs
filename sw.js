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
    "url": "webpack-runtime-53cf3745b7fdab1a2df9.js"
  },
  {
    "url": "styles.6117c9e617f0573e1a70.css"
  },
  {
    "url": "framework-99fb5450f6efdbe4b5cc.js"
  },
  {
    "url": "2b80a62f8e4eec2fa076f8610d726fd311e71c7a-f7c4fdecf1a67268e525.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8ef162c869608fea3661865f6e228a9a"
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
    "revision": "cc5125088692e0e1deac0610cbf7495a"
  },
  {
    "url": "page-data/sq/d/1281896507.json",
    "revision": "4adb20ebe4a37286864d4c61ef9eb93f"
  },
  {
    "url": "page-data/sq/d/249313281.json",
    "revision": "ed444bfdb7d8333757a86672981e8278"
  },
  {
    "url": "page-data/sq/d/2648275777.json",
    "revision": "c076e278f5d0731d30e3effa3017e7bc"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "c9556beb39a906f47f37979fa601c446"
  },
  {
    "url": "page-data/sq/d/3823652713.json",
    "revision": "119caaf9e09e8edb35290983ab2055e4"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "d40f46e67fa93746f1347635f14d5b55"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa1b3078b197ca2f5f22bd2b016aba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "0ff72b75a7c5132db1a94c6704fb7679"
  },
  {
    "url": "component---src-pages-404-tsx-e129daa4016981e0d8aa.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9d6b350fcd99223c67caa2cd5b770366"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "9a95cc2f7a85387694afa733c2594047"
  },
  {
    "url": "component---src-pages-clients-mdx-ae283ead46e0bd4748f5.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "320ab701789e759e9cf69cd4de2901e2"
  },
  {
    "url": "830485e4a01eef9412f4754ecfe08bd6e6417633-da94feed4981548b1525.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-43563561911336650814.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "e5a9f2826036b5d69544b107c27eeeb8"
  },
  {
    "url": "component---src-pages-devices-tsx-0ce1fe0c87f5d7710d30.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "4e3ddb439cdecf812fcddc96dbee94fe"
  },
  {
    "url": "component---src-pages-editors-mdx-058eb01712cd9ac87a43.js"
  },
  {
    "url": "page-data/editors/page-data.json",
    "revision": "21577ef82ab1a796ca40bacaf200ea5b"
  },
  {
    "url": "component---src-pages-github-tsx-259387605408d717b580.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "93c66aea375d34eaba9b311b0c19b6d2"
  },
  {
    "url": "component---src-pages-hardware-mdx-ecce385820960e8d1167.js"
  },
  {
    "url": "page-data/hardware/page-data.json",
    "revision": "9e6259c2e859db15f34bb57600324b94"
  },
  {
    "url": "component---src-pages-index-mdx-7d25b0f71ee5f3354814.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "73cf25e6a7cf9407bbd38c6ccce7386c"
  },
  {
    "url": "component---src-pages-makeaccessible-mdx-1da93c2d790e75fc5d29.js"
  },
  {
    "url": "page-data/makeaccessible/page-data.json",
    "revision": "4eab02be0dd97c57b928b6a483efdaee"
  },
  {
    "url": "component---src-pages-privacy-mdx-5a9056bf41302a97ba57.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "2806c5e5c850afc6f30facbecdee45ad"
  },
  {
    "url": "component---src-pages-protocol-mdx-ded392a63dc129156022.js"
  },
  {
    "url": "page-data/protocol/page-data.json",
    "revision": "cdf48772b65f3b88025d1211006f253c"
  },
  {
    "url": "component---src-components-spec-tsx-17260d81b6e74c6ce3d3.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "7fb7f9cdea1b8302e85b89d123262703"
  },
  {
    "url": "component---src-pages-services-tsx-dcf624db7119c0983f0b.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "9fa376efec79088477afc519990e9ea3"
  },
  {
    "url": "component---src-pages-software-mdx-ce07fe496d6c1eb5f403.js"
  },
  {
    "url": "page-data/software/page-data.json",
    "revision": "76babe0ab386c4de11bcf6e4a92960dc"
  },
  {
    "url": "component---src-pages-tools-mdx-3da819206d51a894ad57.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "5de6e479952534177d1c957f2122b654"
  },
  {
    "url": "page-data/reference/connector/page-data.json",
    "revision": "e37ec43dfdf44c76d2d014896826b83d"
  },
  {
    "url": "page-data/reference/design/page-data.json",
    "revision": "62422ab06cdea4482451085f9dabd9fe"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "e3b5cc2216650d6b3a5ed98158d0ee84"
  },
  {
    "url": "component---src-pages-reference-errors-mdx-b6ed7484950a6bc57875.js"
  },
  {
    "url": "page-data/reference/errors/page-data.json",
    "revision": "1d9c86c10fd1b2bc95dc5c28cb81f155"
  },
  {
    "url": "component---src-pages-reference-errors-microbit-invalid-memory-mdx-e4f2e5f294013a63162c.js"
  },
  {
    "url": "page-data/reference/errors/microbit/invalid-memory/page-data.json",
    "revision": "2654dc562f341bd4d00ce433343d5c0c"
  },
  {
    "url": "component---src-pages-reference-errors-microbit-jacdac-missing-mdx-6ada06e4afbc90bfb204.js"
  },
  {
    "url": "page-data/reference/errors/microbit/jacdac-missing/page-data.json",
    "revision": "d7303bf30cea7c74313190c7a0399065"
  },
  {
    "url": "component---src-pages-reference-errors-microbit-unknown-hardware-revision-mdx-52cda3114f0aa8f5831b.js"
  },
  {
    "url": "page-data/reference/errors/microbit/unknown-hardware-revision/page-data.json",
    "revision": "fa064756270a43853c67dda2c1e15026"
  },
  {
    "url": "component---src-pages-reference-errors-microbit-v-1-not-supported-mdx-c4528afad2ead0296e13.js"
  },
  {
    "url": "page-data/reference/errors/microbit/v1-not-supported/page-data.json",
    "revision": "d8d81692f17d0f099ffcbff0c39f4b66"
  },
  {
    "url": "component---src-pages-reference-errors-transport-device-locked-mdx-d63b4ad24bbb66bd1636.js"
  },
  {
    "url": "page-data/reference/errors/transport/device-locked/page-data.json",
    "revision": "7393707ae9291144a8a534d456a78c49"
  },
  {
    "url": "page-data/reference/firmware/page-data.json",
    "revision": "4d873dddf3504158ecdd7a839b12596d"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "43db3efb29137d5287dc399373355922"
  },
  {
    "url": "page-data/reference/hardware-specification/page-data.json",
    "revision": "b82a910feb3d96cb67936a731e69ac45"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "8ca2ab68ea139b70951412be1d47aa21"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "fc1d750dbce19a2f745e077c38fd2cd3"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "534452c3d9168e32ec11beded603ff2d"
  },
  {
    "url": "415e5afd6af8a12ca6c5720746515c500a21c5fb-b666d7314f461a653b21.js"
  },
  {
    "url": "82f7f99fb41100430f9ee2f3ed5cb3a15b0ac18d-4e804fd869d2729844b8.js"
  },
  {
    "url": "5ea684d28c6475c54e0f51739835d6c5d9aa1b1b-a5b0dc9aa9c2e77bf7b1.js"
  },
  {
    "url": "149f11818c122b40ce2932f15d148eda4aaa5f90-1358f5d4f4b23aae42e0.js"
  },
  {
    "url": "component---src-templates-service-tsx-0bbf8bb4a15c6dea93ea.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "3c2ea26832a8d52789fcd4bf8b523e49"
  },
  {
    "url": "component---src-templates-service-playground-tsx-a61e46f55e4ecd4e3074.js"
  },
  {
    "url": "page-data/services/_base/playground/page-data.json",
    "revision": "e49a87a09da453ab6d7621a298fd6509"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "d1a6caabd4ba45a13d702007925c278e"
  },
  {
    "url": "page-data/services/_sensor/playground/page-data.json",
    "revision": "e415c4be0e05b4957fa890d0b1d9d17c"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "00f8846991cf6d7ec5ddd80289af83bd"
  },
  {
    "url": "page-data/services/_system/playground/page-data.json",
    "revision": "686316308344f03a8151c0401e07158a"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "04e5c3e9f3c32c9a1cb5974d1c21ea8f"
  },
  {
    "url": "page-data/services/accelerometer/playground/page-data.json",
    "revision": "4b6e1e87bc477ca539e7fbb9afda1296"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "dffb5226008c7b3d8a2b2e312d0ce738"
  },
  {
    "url": "page-data/services/arcadegamepad/playground/page-data.json",
    "revision": "8e1bb051d0799accee79ec749d65ce6d"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "09f8372d4adbe77da4b0d2da7e86dfd1"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "cdf6be0db925fa64b82ddf2c08482cd0"
  },
  {
    "url": "page-data/services/azureiothubhealth/page-data.json",
    "revision": "607168a3de3821b7b24f5f29b9ab89fe"
  },
  {
    "url": "page-data/services/azureiothubhealth/playground/page-data.json",
    "revision": "eadacba098ade42befea59d9ffe51ffd"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "b0712dba29f497842ff51bc074f8b95d"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "a9caf3decec8d0642884a9f04f284d5f"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "203ebf744df932297c3c2b9f54a61311"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "4e8dee4070bcef8ab49312a69801dfac"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "7b3e999a97d8af9058fc4a23eb7b4dc8"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "33fc774d7ff4b03a766abc11f2ebbe8f"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "b18efacaaea8573fc6033662b70ac1a3"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "cef2699d3493058b2f3c7f660f620758"
  },
  {
    "url": "page-data/services/brailledisplay/page-data.json",
    "revision": "532006885edec2ad7932ed2760906589"
  },
  {
    "url": "page-data/services/brailledisplay/playground/page-data.json",
    "revision": "6dce2567cac049486e9b94f4cc118a95"
  },
  {
    "url": "page-data/services/bridge/page-data.json",
    "revision": "ed21259e1c7b636006018272a7cca18d"
  },
  {
    "url": "page-data/services/bridge/playground/page-data.json",
    "revision": "3e1a19c8cc7757ce9b8268c4f8a322f8"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "3f196d69257e2f87ec043c67a4cf1b47"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "dcb4c675a13d911c2f0808e822f2e116"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "e3660251c2abaf6e4227ba37f179ab2d"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "ac8ef27eb5aa086c054284bd30ad24fa"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "b9532d3545d71fb4ef06e7821b93828f"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "da7d22e3a0555a5fea1950c03aca2074"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "8972eab23e922c993532008ba8d960f6"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "0f1800e7cef97c7220b63a44bad85e0c"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "8ca30e45144eb864a663b5ed90a4d891"
  },
  {
    "url": "page-data/services/codalmessagebus/playground/page-data.json",
    "revision": "cc71b65db250d7db9f5e2ddf9da803e0"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "a5ea5b75fec417a7a4d60bc38da6ca52"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "79a33749722ac2548d0d6ef52c2a5d81"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "2fa8516b8739395a36d8dbdc348f2468"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "8f28ac2845a6e4afd9ad278a0b564469"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "d6390f983d087f9ffa0cb6bef1f5f81e"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "33841ec19b10dfbe635b779b363d7695"
  },
  {
    "url": "page-data/services/dashboard/page-data.json",
    "revision": "fd302a099cbbd5d38fa02a57fcdd51a6"
  },
  {
    "url": "page-data/services/dashboard/playground/page-data.json",
    "revision": "ae216ba77a32dd52006e55282b6fb950"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "6e911514678ab8b1f124a7052d1d98f4"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "c4ef896b189f2db78dd98310902781da"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "576b91ef3e0d0dd9cf676e57b4a6464a"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "de1683fda3ddcd112b6515f47ad6aa9e"
  },
  {
    "url": "page-data/services/dotmatrix/page-data.json",
    "revision": "13826edaad05458b2ec76339b291754a"
  },
  {
    "url": "page-data/services/dotmatrix/playground/page-data.json",
    "revision": "2cbe11acf75d13a2dce7b4ceb166f542"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "46fba7ef4d603c8314cc0157a896150b"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "2cd1b292357a862524e53bbe342c98b8"
  },
  {
    "url": "page-data/services/flex/page-data.json",
    "revision": "2faa33ca31005de2ba17f7941432ec0b"
  },
  {
    "url": "page-data/services/flex/playground/page-data.json",
    "revision": "9ca6482522fb987e805971685cbef9b2"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "1e5517553ac692b89486fcc6e9cbdd74"
  },
  {
    "url": "page-data/services/gamepad/playground/page-data.json",
    "revision": "47161514088447d239414f6b7187372f"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "7d48aaed46b4f8de4408e836b3fe5ab2"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "3b90d2e76db513f6b511a948f74b0854"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "3be7b76c47489c3d213729967b3d3ea6"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "39d304b279c6fa78675e9a4cdf98ed2e"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "55ed6ae991235c0cb45ddb6e965ccdfc"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "cfb6ae4de7f8c222b0de085f808e4e2d"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "a1ad3bf1e7a5cedff7613cf5123a3cc2"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "e87875a525b738f53b991c7b98e91a32"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "047384c203d6e8c233cba7be5237fc91"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "f6b823bde4c603b440be4b9a9499a3b6"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "048375116c4e6dbc58af379141995c00"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "8a81d1e3b6f0b3298a42c2c79f583b3c"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "973f3784813527cfcb2967f1a38d9344"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "9b5fb82681d54088896e67f4045161a6"
  },
  {
    "url": "page-data/services/infrastructure/page-data.json",
    "revision": "b3dbce5bfb93badbcc5383803b038402"
  },
  {
    "url": "page-data/services/infrastructure/playground/page-data.json",
    "revision": "bf7180127eee289e38d5aceeb998dae3"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "5158f8152c193065b9b8a836920525be"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "d0cdfa490be4847f90a07cc5300a14fe"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "97490b01e574184c3e513523d6063d81"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "f60234ca9a76d854a0d9f410223d5395"
  },
  {
    "url": "page-data/services/lightbulb/page-data.json",
    "revision": "2b524cb65c96fd73466fe3e55cf593e4"
  },
  {
    "url": "page-data/services/lightbulb/playground/page-data.json",
    "revision": "7efa9c8e58887229ae14e0a698333b4d"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "1d9295b10daf8355b32b46b5355d73df"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "f763f5e2631caed2ffb121096dbd4d7a"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "ac7d21c1ff00218e71a4c1024f0ae4d8"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "1c06061f7081f7f87a468154c7458c57"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "dd98b2d7521519d86914b07a6607c5b6"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "330d6a27ad80c466824bd33408b565f0"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "43d9c07d96a15caa0251f4f42492e2f5"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "25f94400066ca95bae03bfbad17ec9bb"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "7e319e0e55ce0bfbc0186deb520b4f71"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "41bc8189e1ef177651f7e999cf9a4e9a"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "d018b5948af34f27b70b770be2474ff4"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "bf8961eafae6061c1b95e490c942fbfd"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "5d2244f27f4e42757ccb5bab5a39ff75"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "020e03942583a36ec90b3f900f27d0d4"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "83af7633641e8a491207537284180697"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "cef85a3ba5133ed5d025f48d0208e458"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "815cf9e63725c1c6f1e27e29467d3f1d"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "9dcec1bacd815fc9d4470dc246493e3b"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "ee41fee355b0b4846c7d642cc2f6413d"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "341bc2ce8320277e443a1c6ccbe857cf"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "094188f04c7bb2762e79fda9bf9cb27d"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "59fed632766b9adc3b1dea429fa923c4"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "a34b308ceb8aa6a8ca3dd02f3c551b08"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "8dc0c466f7a627374523a99d04a5a64e"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "51bbb4607f0f343b664f52d4e2ca86fd"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "5f25dcbdf0548543cb7709ec31d8885f"
  },
  {
    "url": "page-data/services/proxy/page-data.json",
    "revision": "fcbcf545ea7a98c62b2e734bd36a6bb6"
  },
  {
    "url": "page-data/services/proxy/playground/page-data.json",
    "revision": "f830247adc61a9e15a53e37077dc5f94"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "95180d4e8550ddf209ac198a664bca39"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "f08b8a385d5cd6ea1f6b582efa3301e4"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "280dfc306f71aa6292d0d528f896119d"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "fc5ed347056d7b06ff8bbcc503cd7c19"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "470684dc1c9d743607e5a3eb55520928"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "3378c2f7bc449ff10a2a04e4251d2b0b"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "c19a152004a09a9f360f28573f7ba702"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "9bbfbfbb85696deb846aadabeed153f1"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "b98b009d9aacecfdcb7721e70b7ca06f"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "040b2387c582f8739ed8306d67f59115"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "ff924bd672d047ca618efdbadff31225"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "d4177cb0f6d4cf18b3e45eca49be77c9"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "5fe246a2a18479602e248d887cfcad4c"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "8a590e449f59c117c7a5586fbe93d218"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "09743753db71638840ad1004a583ea90"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "d3a3e520895f88f83ebaf0ee49b5b61c"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "21fee7ebad531c6d70e42a146c0ca10d"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "266b2a5c4b5e59bbbab9fbb85ed19cb1"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "518ed7964469f86fef0f70d769412187"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "99930adca144c4053228d4f71a74b76a"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "096a59a31a7c6f5e2cf678631e75c28a"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "2bb0d1aa418736b8420cccae8ca2a577"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "c1f940f212424c13a531f331ab2fe29f"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "d8cf9069151566a51f35346262d18034"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "c11f1f6b8159dd91587fd5180ea32236"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "bcc41d480c4a91dc30038af320a35934"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "596ac25279cf4c09e76a5abca11abc5a"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "081334f6bc630d6ea9f9234afd4995a2"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "1509ad7eeaeb32c7379f4bce99345f81"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "731e04f93e941fe6b323d51e2a38ff54"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "8de33442ca3df21f19505768aacf10ba"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "9052ee0037b44a38aecf8722ebbf9349"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "e132e040bfcab84520e8eb66fee6806d"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "4062a2f6bd748d59a838274debafea77"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "e241be0487dcc332c4528d58b28cf76c"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "12a72873336a5c37428a0615f08285bf"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "94498a48d55c2bc70e689a3826a35e70"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "fcedd4ca74fa769901e587146db8caad"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "a4bb340f385558ef5ddd9a19b7940653"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "37393fc5ce6a7420e5128c8a142a053e"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "ee04322185b93dd01af90708a81e05a8"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "7eeb53377445414f9eb4a211379eb24d"
  },
  {
    "url": "page-data/services/temperature/page-data.json",
    "revision": "3cad2d5932918d9203d9bb491c8615c9"
  },
  {
    "url": "page-data/services/temperature/playground/page-data.json",
    "revision": "d33ed75b7a0e98151244b74829d6b0fb"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "640d695bb3ff1979cd328a6368826d43"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "21656b85af7ea322ff38391c563a9a3e"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "b8cfc9c7905efe281e62783bd231b8ac"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "9c80de770b617fcca661584a53e981d1"
  },
  {
    "url": "page-data/services/uniquebrain/page-data.json",
    "revision": "0de53bfda81568817dffe097ce4429c0"
  },
  {
    "url": "page-data/services/uniquebrain/playground/page-data.json",
    "revision": "1f9662a8ba277eaeed2115362164a3c7"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "c4f2aa70fc9ff1df693a3603d1e57672"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "84dcff6a87569e49c39a32e807611a31"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "e549c091fa79aee0f691d411fb99386a"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "1fe2edafd683969e9438c39478fffaac"
  },
  {
    "url": "page-data/services/vibrationmotor/page-data.json",
    "revision": "2a0524f7015c5f6b3868cdaeac0bdac3"
  },
  {
    "url": "page-data/services/vibrationmotor/playground/page-data.json",
    "revision": "fcfebdd4e708e797fd2c61fe650723e0"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "13a8682e9bf1b825cc61d8ea66f8de5c"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "fc34a0ba2693f111254f59bf1981625c"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "71e0d65f4eff635fae77ebedbfeef9c9"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "135b709b85a43b1ea1f5cfe2d05766f9"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "75c679b9300b7ba8854804eb76eda419"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "0db3c54441be7cee7a8a9f79115e70c7"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "55ce82a3da19eca095c063535541daed"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "01e59416402838fb806e568d8751cf74"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "ca7010348acf32f276dbabf1e0aa8154"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "7c8570a283203dbe8c8d7348914551c3"
  },
  {
    "url": "component---src-templates-device-company-tsx-ba39774eb1453093603c.js"
  },
  {
    "url": "page-data/devices/microbit/page-data.json",
    "revision": "de00fab273e7a2f7bea76f03ebeeef09"
  },
  {
    "url": "page-data/devices/microbit/foundation/page-data.json",
    "revision": "5a13e431ac695da175d2bc029d89753e"
  },
  {
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-35974a25d898be55ea7e.js"
  },
  {
    "url": "component---src-templates-device-tsx-65c21cab393061b1d867.js"
  },
  {
    "url": "page-data/devices/microbit/foundation/microbitv2/page-data.json",
    "revision": "a3bf98d52b13eccfd2d8ac1975e647bb"
  },
  {
    "url": "page-data/devices/microsoft/page-data.json",
    "revision": "f9639a421d0b98f5fdee9d07469038f8"
  },
  {
    "url": "page-data/devices/microsoft/research/page-data.json",
    "revision": "03ab75d4549ca92eee571baf35649610"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdaccableextender38v10/page-data.json",
    "revision": "cea5121851e29c36810206b71f9912c8"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdacjoystick440344v03/page-data.json",
    "revision": "50bc1dcad8ac720ee5bb75268ba0d57a"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdacmicrobitshieldlp29v03/page-data.json",
    "revision": "fdfee4e05dd18a367e1a2ae5771f2974"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdacmotiondetection54v01/page-data.json",
    "revision": "7d0d16f98aa8c24482376d4ca67e671c"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdacpinheaders45v02/page-data.json",
    "revision": "2d099b1d8e294858ea1162f34481e091"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdactouchtest35v10/page-data.json",
    "revision": "b4d8f838f683a781442b7c793f78b657"
  },
  {
    "url": "page-data/devices/microsoft/research/jacdactouchtestelectrode36v10/page-data.json",
    "revision": "413e6ccf012056147eac4dd486f5c970"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v02/page-data.json",
    "revision": "dcf3251c987c3e57da3ba24e45bfd710"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometer30v10/page-data.json",
    "revision": "4b5c83c1f35bc3ba0202223cd8742668"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometerv20/page-data.json",
    "revision": "eede8dc11e51358a329ccde335fa8790"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchinput34v13/page-data.json",
    "revision": "087fd039e8bd170d5c251001a073f2ca"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchoutputv11/page-data.json",
    "revision": "90090f3428824f11a7262f9d8bc0a931"
  },
  {
    "url": "page-data/devices/microsoft/research/jmambientlight55v01/page-data.json",
    "revision": "e8dce49d2b5dc8408af9cc0423553c19"
  },
  {
    "url": "page-data/devices/microsoft/research/jmanalogjoystick44v02/page-data.json",
    "revision": "73653068ace9ccf50b4fd97760bb59f7"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadebtnv20/page-data.json",
    "revision": "b1312f162defa90172b57ac869178f34"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv20/page-data.json",
    "revision": "293f45cb1fe857f08a8e1d1ab44e83ee"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainesp3248v02/page-data.json",
    "revision": "2ea0c5a678a825d1ae32cca7120e0ab2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainesp3248v03/page-data.json",
    "revision": "01b9acb7aafafa704b98af8ac10c11cb"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainf441v02/page-data.json",
    "revision": "4c3e9c62642d6f50c7a14348fbbf7223"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbrainrp204059v01/page-data.json",
    "revision": "7f8bff52915bbabc8d601fd732b90ba9"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton10v13/page-data.json",
    "revision": "6113c280fddbc81d843d83b41946b3b3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbutton40v02/page-data.json",
    "revision": "1fde3a62ba5efd8dac8055e13e5ad800"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuttonterminal62v01/page-data.json",
    "revision": "7499acc0e9beb9c1d35cf0299a8be7d4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuzzerv20/page-data.json",
    "revision": "a10dc37664a4ffbe04bbe6f602adfb1c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcapacitivesoilmoisturev33/page-data.json",
    "revision": "ccca58d88c1cc1f8534ecabdfdd30dc3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickairquality4v32/page-data.json",
    "revision": "6afd0587c866e25729e781ed7e7ddaf3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickcolorv32/page-data.json",
    "revision": "ff9e50d9f004c4771826cb40ea5c183e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmco2tvoctemphumsgp30sht3066v37/page-data.json",
    "revision": "025365874fc8ab0106480fe77bd0fe73"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbuttonv20/page-data.json",
    "revision": "8d88f6e4bd5f386430b8c2de0b37d269"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv20/page-data.json",
    "revision": "da03629354e4699a8cea3273f87edce5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmdualkey69v37/page-data.json",
    "revision": "d52270e121e4c34dd202ec31ca7f224f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmflexv10/page-data.json",
    "revision": "ca5df23e3e74d2e545734cd26fa28394"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv20/page-data.json",
    "revision": "39753bea115c7252f4e21c6a3e7335d6"
  },
  {
    "url": "page-data/devices/microsoft/research/jmhapticmach101v10/page-data.json",
    "revision": "77c6b75c443b7954bae49f580d582fde"
  },
  {
    "url": "page-data/devices/microsoft/research/jmhub39v03/page-data.json",
    "revision": "c2d5aaf45a41aad07fc946d3ee181a25"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v10/page-data.json",
    "revision": "87cb2e5c193a1a21d1aff6d3cdde1bc0"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v11/page-data.json",
    "revision": "fa845e236748a09b1633205c852c5bdf"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyboardkey46v12/page-data.json",
    "revision": "826a3738ed368277e6aaa05201c3dcb1"
  },
  {
    "url": "page-data/devices/microsoft/research/jmkeyv3768v37/page-data.json",
    "revision": "5f014d7e1e5156ff375a5f1a21473544"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "1590fd1eaccd694df2fad90cb315e955"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmicrobitshieldlp29v05/page-data.json",
    "revision": "51f8597bc81b16eeeb9f1748ad8ffe8e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "fd2dc2be3ac89829fdc27e765e23755c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpinheader45v01/page-data.json",
    "revision": "101d94524fc5b80e7e74d6f50f280315"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpinheader45v02/page-data.json",
    "revision": "2e24f9eecdf35a348ae7b158eaa0f348"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpower/page-data.json",
    "revision": "547d4bed62f82ab448d865326536dfee"
  },
  {
    "url": "page-data/devices/microsoft/research/jmprotov20/page-data.json",
    "revision": "c4ba3289dccfee64f23c9500317bc39a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv20/page-data.json",
    "revision": "0e03b3c25ada3831767c9b39f62b1740"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmnpxv21/page-data.json",
    "revision": "480e60f2186d8689251e84acb31df6b2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov20/page-data.json",
    "revision": "9b07cbb5dcc4d64aa189913ce37dbca1"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "492d564b5ccece088004d46b87f67a02"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrelaymach01v10/page-data.json",
    "revision": "a389fa8a8a0dcf98f140f16b57310885"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledbar58v01/page-data.json",
    "revision": "80636b6b910b9d1fa3c4b4249d9243ed"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledgeneric60v01/page-data.json",
    "revision": "1544dbe481652c6584d2824a9df2dd1a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledring37v20/page-data.json",
    "revision": "1ae34f743418605d8e53c8e706b7a777"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledring37v21/page-data.json",
    "revision": "c437001b3b21553a09169aac27e22e4f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbring67v37/page-data.json",
    "revision": "e9688fa74680665bae1663772fbdfb7e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv10/page-data.json",
    "revision": "a31251452fcf2c5a5940b88e27d1304b"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv11/page-data.json",
    "revision": "73473afae2112d7685029315cf415abd"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsht30temperaturehumidity64v36/page-data.json",
    "revision": "c4b39cfd010aa95d5c5a16bdc46f2ed6"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsinglergbled42v01/page-data.json",
    "revision": "dd1a78b8f9f3a148bad0ead792a21ff6"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v10/page-data.json",
    "revision": "3a3ef0957ae8bc62ced82e78d1dfd8c5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v11/page-data.json",
    "revision": "97eb419948e150d108856609143c00d8"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv20/page-data.json",
    "revision": "a17661f81c6362b1a6440d44bbdb9b72"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsoiltemperatureds18b20v33/page-data.json",
    "revision": "f664a8d2e7cdca70ecfd762de8705a2f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmspeechsynthesis61v33/page-data.json",
    "revision": "c068ec7204f8dc0e87da1b85cc8f2a91"
  },
  {
    "url": "page-data/devices/microsoft/research/jmspibridgev37v37/page-data.json",
    "revision": "8bb4e370c8c5aebce430b1019f406e28"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v10a/page-data.json",
    "revision": "62d3160ad53b8fe2ff34d71e8c553b95"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v11/page-data.json",
    "revision": "a8965487d11a09cb71891b6c8f58ef38"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "3f89e5bca54d4e5b264cf0dbada6febb"
  },
  {
    "url": "page-data/devices/microsoft/research/jmuviilluminance65v3665v36/page-data.json",
    "revision": "721a9d1ea84222e7803fe62d7927ed01"
  },
  {
    "url": "page-data/devices/microsoft/research/mikrobuscarrierboard53v01/page-data.json",
    "revision": "49c6adbf00bb7b789767cd6e7c244214"
  },
  {
    "url": "4345cd43a9669cbe728debadba6874d54d45298f-e67025f121996e7e5dda.js"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-5078e35cad2b8012b3cd.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "92768273367104294986acc88ec00d16"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-6880a86174425c23c7e3.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "1c35ffcf0f0ac0dc38bb53b26db2d000"
  },
  {
    "url": "component---src-pages-tools-commissioner-tsx-b52c038fdc4e22c6661a.js"
  },
  {
    "url": "page-data/tools/commissioner/page-data.json",
    "revision": "9d54b6e930a9cf1b5ab38d1904080b93"
  },
  {
    "url": "component---src-pages-tools-device-qr-code-tsx-5c08511b627b31b57f92.js"
  },
  {
    "url": "page-data/tools/device-qr-code/page-data.json",
    "revision": "0c34810dda4d2a657060a0d8bde3901f"
  },
  {
    "url": "baf0fd2d778787cec7104fdce75a778b8b7a3d97-963a18b53e4d926fab43.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-21e1e313b04ae296458d.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "2a64e8fb61661be704225f1ab1fd769d"
  },
  {
    "url": "component---src-pages-tools-enclosure-mdx-52582eb45553722eb7b3.js"
  },
  {
    "url": "page-data/tools/enclosure/page-data.json",
    "revision": "96d3ca85d7767b315ffd4c936049e684"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-1c7b76d265af8dfa46df.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "1df962a80c37d74650936897474c2cfb"
  },
  {
    "url": "ae29c6db-c40fbb2e2ec77c9fb4ee.js"
  },
  {
    "url": "44af884afde6b670de5e788b48d81630ca88b89b-96b0c53b782f9ac46433.js"
  },
  {
    "url": "component---src-pages-tools-hid-events-tsx-f5bb899c0f99fb3c2707.js"
  },
  {
    "url": "page-data/tools/hid-events/page-data.json",
    "revision": "f5c8aca95f3f105b982e8a3b62095487"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-30e5be0cf62a0cd72eac.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "5a5c435aecd78b77b6434a7cc62fc843"
  },
  {
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-ab01ad0fe61b018cd76b.js"
  },
  {
    "url": "page-data/tools/lightsensor-accessible/page-data.json",
    "revision": "583c4e5fb7fe9663094f9f7cea680ab4"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-3a5f5a83b5ad54e7e5b8.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "5259ecf6e27418d425368ad8ecd638f5"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-0aecc42da72dc38ffa7e.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "6926bbf822b728d874dcfb2542c204d6"
  },
  {
    "url": "7628c7cf432e38cc6b3ac207aff24a39a272b1ce-0a63ea1e91d668bafe81.js"
  },
  {
    "url": "86ab0ffe4ebd6a8173cf195d01dfee36185fdf2b-deb82b739f414446fd7a.js"
  },
  {
    "url": "41a69591c06d74ab821d0a6f985f09ba8c9c9577-c47e21f4f75263b56465.js"
  },
  {
    "url": "component---src-pages-tools-model-editor-tsx-e940146da0b303929e38.js"
  },
  {
    "url": "page-data/tools/model-editor/page-data.json",
    "revision": "fd95b2991c2afcc4273ec25ffce12c42"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-79a18c0d8fc67b9377dc.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "a0975d4528cd6648a721d1fc68e60aa1"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-caec59f46538c7985de0.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "eaf34f65f2a5c20bdbdc80a168aeef3b"
  },
  {
    "url": "component---src-pages-tools-peers-tsx-07392279674a48d4cd71.js"
  },
  {
    "url": "page-data/tools/peers/page-data.json",
    "revision": "3f76611431c4e5837b741a23014b1eba"
  },
  {
    "url": "component---src-pages-tools-player-tsx-54d8e0be4edecfc70157.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "4ca402aaa3ab1d12a6fbb43226be55ac"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-bc56ba8dc788b7badbac.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "9b1de21dde90edf3900fbb092df0ae5f"
  },
  {
    "url": "component---src-pages-tools-qr-silk-tsx-8d1f07665b418f4fcb6d.js"
  },
  {
    "url": "page-data/tools/qr-silk/page-data.json",
    "revision": "d370aea594ecd08dd89caa412d491d52"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-b57fb7d15618a6eff321.js"
  },
  {
    "url": "page-data/tools/release-assets/page-data.json",
    "revision": "883a173c8d372d54ff3d27d534f3abd8"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-7e26a7b52b931667ccf0.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "ac2bf8cc0a642e7cf541c3c3773be158"
  },
  {
    "url": "component---src-pages-tools-settings-tsx-28eb23212ee55c787078.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "3c0770717930fccad86ecd029431ca21"
  },
  {
    "url": "component---src-pages-tools-speech-strings-tsx-cffc0675e873232fc606.js"
  },
  {
    "url": "page-data/tools/speech-strings/page-data.json",
    "revision": "6cf3f09ca0e76f08274a7f15f9b0897f"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-9983119221931e2afb65.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "dc8b3f4151b355ee896ac7e38770469f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d7d8285db6ef1cb904d8382b72c0ad7f"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-65fd614aba89ff26af9e.js`))) {
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
