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
    "url": "webpack-runtime-8a9a2efaa0353fcb1b95.js"
  },
  {
    "url": "styles.cf776cbbb2b3996bedba.css"
  },
  {
    "url": "framework-99fb5450f6efdbe4b5cc.js"
  },
  {
    "url": "09ed088d5c7a914b7ee738d21fa5a6d03bb6dd65-6181e704774b681a64eb.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cd5833232b70fd986639001522fa0dd2"
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
    "revision": "dd804ab69e03e6757bd3874218eda6ae"
  },
  {
    "url": "page-data/sq/d/2648275777.json",
    "revision": "2a37c9d7ea6f99bf055a540547e335b1"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "07481a909520648667b9604cf1ad0728"
  },
  {
    "url": "page-data/sq/d/3823652713.json",
    "revision": "18b51b16f957283715aab8ec302b82a0"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "c7d81a90ac0bd9cae168a298751c0bdf"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "38aa1b3078b197ca2f5f22bd2b016aba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "711ce37c1f9cfa817d5d8a222041ea46"
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
    "url": "830485e4a01eef9412f4754ecfe08bd6e6417633-77004fd74a29d97f7d1f.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-43563561911336650814.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "e5a9f2826036b5d69544b107c27eeeb8"
  },
  {
    "url": "component---src-pages-devices-tsx-945db6f474a9a93ff043.js"
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
    "revision": "3e1a2040571c6c7e056b909c73d8fd55"
  },
  {
    "url": "component---src-pages-services-tsx-cd773e8f240dd38fd4ed.js"
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
    "url": "component---src-pages-traces-mdx-6c0b1f0e09067f4beae4.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "3ce9aa48e33f30419a829b51400954cf"
  },
  {
    "url": "page-data/reference/connector/page-data.json",
    "revision": "f6ee1d405a0486318a0ac35a782a7c04"
  },
  {
    "url": "page-data/reference/design/page-data.json",
    "revision": "55d5461cec0cf58e258e0fcf0d48dce5"
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
    "revision": "443f3c8f5b752e4a50ebd288e7f26435"
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
    "url": "b4041f57cede5b7e3b1bea304d75a219087809dc-079197b6585cd05a96fb.js"
  },
  {
    "url": "82f7f99fb41100430f9ee2f3ed5cb3a15b0ac18d-4e804fd869d2729844b8.js"
  },
  {
    "url": "5ea684d28c6475c54e0f51739835d6c5d9aa1b1b-a5b0dc9aa9c2e77bf7b1.js"
  },
  {
    "url": "149f11818c122b40ce2932f15d148eda4aaa5f90-8cfc52ece329c431c9cf.js"
  },
  {
    "url": "component---src-templates-service-tsx-daac78e9d529d3f006ee.js"
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
    "revision": "70f76ee42268c5b68a5d58d0306e0168"
  },
  {
    "url": "page-data/services/arcadesound/playground/page-data.json",
    "revision": "c54fe9dd30531d131819e1a49d9bf281"
  },
  {
    "url": "page-data/services/azureiothubhealth/page-data.json",
    "revision": "f6ba16113713abd25dedf8575fa04370"
  },
  {
    "url": "page-data/services/azureiothubhealth/playground/page-data.json",
    "revision": "7fe33678b456aca2cca3befc372bfe40"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "f0558052ae74f4d6addc98358ba77de5"
  },
  {
    "url": "page-data/services/barcodereader/playground/page-data.json",
    "revision": "a9caf3decec8d0642884a9f04f284d5f"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "a70fd2f2ed46505d2b66c4d77b53a6c0"
  },
  {
    "url": "page-data/services/barometer/playground/page-data.json",
    "revision": "20723e0fbb5f102feb6b2ba88f514484"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "fc71299bd8630ddf3fd1ceca3852c84c"
  },
  {
    "url": "page-data/services/bitradio/playground/page-data.json",
    "revision": "9af9e22e0fdea154be25f0804259c569"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "bf33501d4cb5e75fabdbf16ee07988cb"
  },
  {
    "url": "page-data/services/bootloader/playground/page-data.json",
    "revision": "78f1fe48a9cc37eb21887afc2cfb5ae4"
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
    "url": "page-data/services/button/page-data.json",
    "revision": "337a9ebbfe4053294a86ee5091822c3f"
  },
  {
    "url": "page-data/services/button/playground/page-data.json",
    "revision": "b2d6c4e22b24785bb3106332b93e68c0"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "8afbca9d37419e0b71543791087d47c5"
  },
  {
    "url": "page-data/services/buzzer/playground/page-data.json",
    "revision": "7d0ee79386f9520d80517c5048e2df24"
  },
  {
    "url": "page-data/services/capacitivebutton/page-data.json",
    "revision": "f63c8b1df7245d1dd5fcf16eef9e9be3"
  },
  {
    "url": "page-data/services/capacitivebutton/playground/page-data.json",
    "revision": "e79bb7797fcb229821b2e8a868f87618"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "30b5a822e0d32fdb9a5d7660e13a6011"
  },
  {
    "url": "page-data/services/characterscreen/playground/page-data.json",
    "revision": "65e1d944972cfdc243e1bb20703178a3"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "bacc559a4b8c7ffc4ac54ca5553707a6"
  },
  {
    "url": "page-data/services/codalmessagebus/playground/page-data.json",
    "revision": "c66f4b3685f3be9119ea1726ebd6f028"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "8232278ab293403e7371f466723ac733"
  },
  {
    "url": "page-data/services/color/playground/page-data.json",
    "revision": "79a33749722ac2548d0d6ef52c2a5d81"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "66e78b9590cef980bd904bac757e13fb"
  },
  {
    "url": "page-data/services/compass/playground/page-data.json",
    "revision": "5345d78ed71aa87eb9105edde9a74cf3"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "29b2ac2f71646dfc05c3da7e2b04b804"
  },
  {
    "url": "page-data/services/control/playground/page-data.json",
    "revision": "c7ecf36405b5d76a3a15ab80bd8748bd"
  },
  {
    "url": "page-data/services/dashboard/page-data.json",
    "revision": "04c2fa44d9f0cfb432a84e7aebafa4ea"
  },
  {
    "url": "page-data/services/dashboard/playground/page-data.json",
    "revision": "54078c0ea9ae4eb6cc65c1dd28aa1f73"
  },
  {
    "url": "page-data/services/dimmer/page-data.json",
    "revision": "6c29c95a9093906347d4787fc5b522da"
  },
  {
    "url": "page-data/services/dimmer/playground/page-data.json",
    "revision": "35d21aac7caf32d1f31bc2766e6c21be"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "be89290cd96d15bac1930e882da47ab0"
  },
  {
    "url": "page-data/services/distance/playground/page-data.json",
    "revision": "8e573d1925c9d84bda67522e3a42f62c"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "6cb337224e338ba9650362789ddd6858"
  },
  {
    "url": "page-data/services/dmx/playground/page-data.json",
    "revision": "43f60e98fb461d54e28846d3613a1a8b"
  },
  {
    "url": "page-data/services/dotmatrix/page-data.json",
    "revision": "b5f7ec846ad7ff9732186e19440eba52"
  },
  {
    "url": "page-data/services/dotmatrix/playground/page-data.json",
    "revision": "ffb8aef748cc17e2bfc4f41b76a2ed29"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "9d2890736b6a723a652df448e7c004d3"
  },
  {
    "url": "page-data/services/eco2/playground/page-data.json",
    "revision": "ad6ca6ba9ca48c5ea5d2dc1e88edf0d4"
  },
  {
    "url": "page-data/services/flex/page-data.json",
    "revision": "d13a29a24d02d2df5df5ae3f6e9e9d76"
  },
  {
    "url": "page-data/services/flex/playground/page-data.json",
    "revision": "390dfc12b275cacd06fb9c319896d990"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "0232a64d8051eb827c26d9b39979932d"
  },
  {
    "url": "page-data/services/gyroscope/playground/page-data.json",
    "revision": "2f0b4e4a21265954aa72c0c30011453e"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "2631b4619292de5d43a8d677bcd84c18"
  },
  {
    "url": "page-data/services/heartrate/playground/page-data.json",
    "revision": "39d304b279c6fa78675e9a4cdf98ed2e"
  },
  {
    "url": "page-data/services/hidadapter/page-data.json",
    "revision": "42f8a2f223dbda7d23b10578114c32fb"
  },
  {
    "url": "page-data/services/hidadapter/playground/page-data.json",
    "revision": "ff998abc6ef656a3045353deaaaf17d5"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "6238251f4599d1c4539387f0052cf5ed"
  },
  {
    "url": "page-data/services/hidkeyboard/playground/page-data.json",
    "revision": "3ef672074008be3f4b3894e6b94135ba"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "b9cb77925fa5a73823c6da78ea407b2d"
  },
  {
    "url": "page-data/services/hidmouse/playground/page-data.json",
    "revision": "16d0367ff3c4a760dd526aab615d1f40"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "a16723e5192e96ddca05a199ea55dee4"
  },
  {
    "url": "page-data/services/humidity/playground/page-data.json",
    "revision": "a6cca7977f5628c317418abcb980dd22"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "10a06186d84c0d32b2518716716f6af3"
  },
  {
    "url": "page-data/services/illuminance/playground/page-data.json",
    "revision": "a51e1e5d2307297af421fc2163a72da5"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "3d18a0bb56e0fdb2cd353d14c898970c"
  },
  {
    "url": "page-data/services/indexedscreen/playground/page-data.json",
    "revision": "6ed81b219c68ce435f3cfdc3c7c94060"
  },
  {
    "url": "page-data/services/infrastructure/page-data.json",
    "revision": "49ac67c044340addcdb94b04da72db37"
  },
  {
    "url": "page-data/services/infrastructure/playground/page-data.json",
    "revision": "4c15ae6bb7acf89ab6dbdb0bc5b647f7"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "54c5c1800eb935a7ccc476624fb4d888"
  },
  {
    "url": "page-data/services/joystick/playground/page-data.json",
    "revision": "e0e3f2a8cfc665d2a7a3ac7df5e30869"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "b05de881c231f105ceae3da122dbf35b"
  },
  {
    "url": "page-data/services/led/playground/page-data.json",
    "revision": "5a69bdbabd7c33d42711d83d7f1740ef"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "4cfd2fdd10660cb76ae780f28b976f6c"
  },
  {
    "url": "page-data/services/ledpixel/playground/page-data.json",
    "revision": "ad07d71f3d852e04779c5535d1004d7e"
  },
  {
    "url": "page-data/services/lightbulb/page-data.json",
    "revision": "44355bb1cbb7db1380c511c184e1cb2f"
  },
  {
    "url": "page-data/services/lightbulb/playground/page-data.json",
    "revision": "102f1a563c772f392dbc3fc53d07892c"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "760269dff500c733b41ed3ff0fbf85d5"
  },
  {
    "url": "page-data/services/lightlevel/playground/page-data.json",
    "revision": "de5bb0bcea2717d3cdfb84e2ea6ddc31"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "0e12b7e2411a5f3802096f6bf6ba9a05"
  },
  {
    "url": "page-data/services/logger/playground/page-data.json",
    "revision": "ffc918463fde661bf1d225060494e190"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "c0ddae09c05303ebc7fdf078b9ae5186"
  },
  {
    "url": "page-data/services/magnetomer/playground/page-data.json",
    "revision": "ed4ba4f7131d44d3b176d0719216bcec"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "ec9e74351cea32f5312c1344c0b5fdf4"
  },
  {
    "url": "page-data/services/matrixkeypad/playground/page-data.json",
    "revision": "25f94400066ca95bae03bfbad17ec9bb"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "c84fef75e38fe6608c6abd494bf22acd"
  },
  {
    "url": "page-data/services/microphone/playground/page-data.json",
    "revision": "41bc8189e1ef177651f7e999cf9a4e9a"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "003ff13e9bad52328e863694c661c78f"
  },
  {
    "url": "page-data/services/midioutput/playground/page-data.json",
    "revision": "bf8961eafae6061c1b95e490c942fbfd"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "ca1ede6eccc6828ba34a1835864917d4"
  },
  {
    "url": "page-data/services/modelrunner/playground/page-data.json",
    "revision": "020e03942583a36ec90b3f900f27d0d4"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "fcc45267787caf52f1a7f53aa794d895"
  },
  {
    "url": "page-data/services/motion/playground/page-data.json",
    "revision": "cef85a3ba5133ed5d025f48d0208e458"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "768227976f9b547be7365137645aa1b8"
  },
  {
    "url": "page-data/services/motor/playground/page-data.json",
    "revision": "5b51e5e9c1f0fd76cd2417a1a8346551"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "2d449e25994ff01b1bb97d5e02f0707e"
  },
  {
    "url": "page-data/services/multitouch/playground/page-data.json",
    "revision": "23366c1328e3b5bf38c053b7e97dd5ed"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "db02bd2508d99f63e30712918552f32f"
  },
  {
    "url": "page-data/services/potentiometer/playground/page-data.json",
    "revision": "f002a00734ce8c000bd3d577f9ba1000"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "9cb24758fbeec1f0ff919f6c192fe7f4"
  },
  {
    "url": "page-data/services/power/playground/page-data.json",
    "revision": "59fed632766b9adc3b1dea429fa923c4"
  },
  {
    "url": "page-data/services/pressurebutton/page-data.json",
    "revision": "e3862b45767744f0a8f51971ebb0ecdc"
  },
  {
    "url": "page-data/services/pressurebutton/playground/page-data.json",
    "revision": "1be20c32ce50c3ca3ed6cd1f4158ce0d"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "63a3bb7d652705fb2006d9883ac3c0e5"
  },
  {
    "url": "page-data/services/prototest/playground/page-data.json",
    "revision": "2f97d0f80faa27699486625b84a6d9a3"
  },
  {
    "url": "page-data/services/proxy/page-data.json",
    "revision": "9e1f00f8a015f210965ed553c6f196d1"
  },
  {
    "url": "page-data/services/proxy/playground/page-data.json",
    "revision": "2c41f2680a311ab2f4e3c13ce12c5635"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "e61e946073ed698d9d0a6dd32c302cd5"
  },
  {
    "url": "page-data/services/pulseoximeter/playground/page-data.json",
    "revision": "1846b699510008d375c99e54a31d6aab"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "8d8bbb958afa3f188d28d7d11bc64177"
  },
  {
    "url": "page-data/services/raingauge/playground/page-data.json",
    "revision": "a7a44b3381f3a3ae6c5f39c2234aaff6"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "8a910d5bc75c899911ad72a0ed9b5aa1"
  },
  {
    "url": "page-data/services/realtimeclock/playground/page-data.json",
    "revision": "7c6201d759db382d5e79548617eb70a6"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "02e3f45c852ffc478737b6aa30ae75b2"
  },
  {
    "url": "page-data/services/reflectedlight/playground/page-data.json",
    "revision": "5a52694cc5b1c99261327b3d19317d59"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "ec6f97fc167218ef9dc37199ada7fba7"
  },
  {
    "url": "page-data/services/relay/playground/page-data.json",
    "revision": "5ad6a9e62e83a3aef0ff06dd7bf60b76"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "e833b450d1315f06eaa410051d138954"
  },
  {
    "url": "page-data/services/rng/playground/page-data.json",
    "revision": "6d5ce6485acec9c4dc8e2c055a941ed1"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "28b62ce1b05d365f5491bf70ad7297a4"
  },
  {
    "url": "page-data/services/rolemanager/playground/page-data.json",
    "revision": "7bcfead548f20a5036c78121c2323a5c"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "af7bda6cde56690e3b4d8fead1e43f82"
  },
  {
    "url": "page-data/services/rotaryencoder/playground/page-data.json",
    "revision": "4e09541b11c188c7e9a44e63a17333b7"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "37a7abd5b61a47ff06e05a6d9463190f"
  },
  {
    "url": "page-data/services/rover/playground/page-data.json",
    "revision": "266b2a5c4b5e59bbbab9fbb85ed19cb1"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "6256501cc260d1e7707e1a3c78e6dc68"
  },
  {
    "url": "page-data/services/sensoraggregator/playground/page-data.json",
    "revision": "99930adca144c4053228d4f71a74b76a"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "39fc67828227761a7248e343a5bec204"
  },
  {
    "url": "page-data/services/servo/playground/page-data.json",
    "revision": "250aa291078f4fb9427af4b53c79713f"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "87c8ca9dfcd91ea531beebe7532faadd"
  },
  {
    "url": "page-data/services/settings/playground/page-data.json",
    "revision": "d8cf9069151566a51f35346262d18034"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "4cf0b90d9ed8bea506efdf467c9a29dd"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/playground/page-data.json",
    "revision": "610bcb1ba5ae67dbdf94c5ffc9d23cf1"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "d96010110ac2a54b50f9679de5f06751"
  },
  {
    "url": "page-data/services/soilmoisture/playground/page-data.json",
    "revision": "f10b004de62b65944a6a8b2c31991063"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "a70fa36afa82637fa93548b457d0cb24"
  },
  {
    "url": "page-data/services/solenoid/playground/page-data.json",
    "revision": "917c0291db81c155812bd97b5bb60b75"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "b620ff1c5175688f5bf3c3ab94cd8286"
  },
  {
    "url": "page-data/services/soundlevel/playground/page-data.json",
    "revision": "0c9d67ba357a3670eaa8d1192e825160"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "917037f156219f36744ddd698064b38a"
  },
  {
    "url": "page-data/services/soundplayer/playground/page-data.json",
    "revision": "2f076318514e124df935af60d143774a"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "999e1f7f40de14f5bc111341fe3b2c63"
  },
  {
    "url": "page-data/services/soundspectrum/playground/page-data.json",
    "revision": "7cae074279d5e0b89f0f86136c36e4c0"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "95536e4a62f6d579cdcbe44954eb3261"
  },
  {
    "url": "page-data/services/speechsynthesis/playground/page-data.json",
    "revision": "64baa8a9ae980592033cb4fcebe984b9"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "759f1a8954952a376e9c504106994513"
  },
  {
    "url": "page-data/services/switch/playground/page-data.json",
    "revision": "60a9f700f71805686036806005842ccb"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "433c5ece1e019b0fd02991c9f0804b36"
  },
  {
    "url": "page-data/services/tcp/playground/page-data.json",
    "revision": "7eeb53377445414f9eb4a211379eb24d"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "6e2ce9449b06d37c81b365552696731c"
  },
  {
    "url": "page-data/services/thermocouple/playground/page-data.json",
    "revision": "15518e57edec5d32719dd4bd549664eb"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "fe82295c6e122dbb818ea6d72cb325b7"
  },
  {
    "url": "page-data/services/thermometer/playground/page-data.json",
    "revision": "5e67200db48d65d1074ef12cdf69d03e"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "6fd077282d1281ab64f7801bb4b738a4"
  },
  {
    "url": "page-data/services/trafficlight/playground/page-data.json",
    "revision": "eeb98da3dd10f41e15c16f0201ad1117"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "4a06f71a0a01ef72f5835fbaf1071236"
  },
  {
    "url": "page-data/services/tvoc/playground/page-data.json",
    "revision": "03a0184b217dcd5e0e655057a7bc5ce1"
  },
  {
    "url": "page-data/services/uniquebrain/page-data.json",
    "revision": "8f9b1b623c256ced44ec83ff16d768cb"
  },
  {
    "url": "page-data/services/uniquebrain/playground/page-data.json",
    "revision": "e2e6c4f1ef134dd292a238f23796c506"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "e1e8273b9be13798b6c2cab568092a77"
  },
  {
    "url": "page-data/services/uvindex/playground/page-data.json",
    "revision": "94508651add5c0d46ff19df866854b80"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/page-data.json",
    "revision": "3c703c61af951707da7dc322141505d4"
  },
  {
    "url": "page-data/services/verifiedtelemetrysensor/playground/page-data.json",
    "revision": "1fe2edafd683969e9438c39478fffaac"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "37b2d1db885c4728e710de80c323d9c3"
  },
  {
    "url": "page-data/services/vibration/playground/page-data.json",
    "revision": "7dba21a171ea82dd857e80bc8ca9b178"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "e892c1db1373a60f0531e80fefac2fc4"
  },
  {
    "url": "page-data/services/waterlevel/playground/page-data.json",
    "revision": "6755398edeccc08fa1c3089c92574842"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "d25b7f4c0a39f062f4d85daab1b8b167"
  },
  {
    "url": "page-data/services/weightscale/playground/page-data.json",
    "revision": "9f40032360d314150142afd890e31b0a"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "c16987c25a10142b7582c8be228a285e"
  },
  {
    "url": "page-data/services/wifi/playground/page-data.json",
    "revision": "fb231088f0a14e190158c66a690fcb75"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "38dda35070d61a2e6348c88bb0d5ca96"
  },
  {
    "url": "page-data/services/winddirection/playground/page-data.json",
    "revision": "afe123305669e6e598c781ff16e73180"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "f5cc80858938e4fb9af6033bf51d0f3c"
  },
  {
    "url": "page-data/services/windspeed/playground/page-data.json",
    "revision": "912b8acb5e6524ac204f296a267e3148"
  },
  {
    "url": "component---src-templates-device-company-tsx-6e83f48b39f4ee0cdca2.js"
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
    "url": "913832d59ba65bf5a995efa1c4e48fc9101c7c83-d9f41c12f2a393cf065c.js"
  },
  {
    "url": "component---src-templates-device-tsx-eb6348049554c5146114.js"
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
    "revision": "80f7e4c8b7da0c52f26f8f709d5c9c68"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccelerometerv20/page-data.json",
    "revision": "958cef19b8ef630a440565948865e3c4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchinput34v13/page-data.json",
    "revision": "1fa89cc58abbcc3782ea59ec09c13d7c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmaccessswitchoutputv11/page-data.json",
    "revision": "cbef650a1dcfad5fa723cabbecba350f"
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
    "revision": "2dab16a24546ff6a4b7da20f0c744b30"
  },
  {
    "url": "page-data/devices/microsoft/research/jmarcadecontrolsv20/page-data.json",
    "revision": "bc5f390ad5768aaf100019e86222fa4c"
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
    "revision": "ebba9aa1008660162ac43e1e3d09cac3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuttonterminal62v01/page-data.json",
    "revision": "7499acc0e9beb9c1d35cf0299a8be7d4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmbuzzerv20/page-data.json",
    "revision": "d8478be0217be11cec32a5ca2b7f0ae0"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcapacitivesoilmoisturev33/page-data.json",
    "revision": "750472110df3c83d9930b56aeed66df2"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickairquality4v32/page-data.json",
    "revision": "acb00de53bf8a0b58f1b923dab5ccab5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmclickcolorv32/page-data.json",
    "revision": "9ceec15c5d00ba635319ab19bdfc4a9c"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankbuttonv20/page-data.json",
    "revision": "8c497d1142f373c954c7457b81b3e074"
  },
  {
    "url": "page-data/devices/microsoft/research/jmcrankv20/page-data.json",
    "revision": "870c5832a0bead12ddf7ff364d89f9f4"
  },
  {
    "url": "page-data/devices/microsoft/research/jmflexv10/page-data.json",
    "revision": "81fb9725f501c7f82dac869c43407688"
  },
  {
    "url": "page-data/devices/microsoft/research/jmgamepadv20/page-data.json",
    "revision": "e97cbc1b8f4ad8a6a51d0e28503e068d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmhapticmach101v10/page-data.json",
    "revision": "bae7a13a1df26d78c0e2d40ed300c299"
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
    "url": "page-data/devices/microsoft/research/jmmachinelearning/page-data.json",
    "revision": "1590fd1eaccd694df2fad90cb315e955"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmicrobitshieldlp29v05/page-data.json",
    "revision": "51f8597bc81b16eeeb9f1748ad8ffe8e"
  },
  {
    "url": "page-data/devices/microsoft/research/jmmotorv21/page-data.json",
    "revision": "436d1408cc20c0dc26eb78af1e70f0db"
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
    "revision": "a62d0ef4cf4d261c72e3611303d5ca77"
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
    "revision": "45a53067e010bba617c31750ff168808"
  },
  {
    "url": "page-data/devices/microsoft/research/jmpwmservov21/page-data.json",
    "revision": "f15f4677c9580c4b5c1cc7bc0fa950ac"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrelaymach01v10/page-data.json",
    "revision": "f6fbe35ed5a9bd81806dc68a5c79b3a0"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledbar58v01/page-data.json",
    "revision": "12101a51c8e4c0fc9ba3d845d6466d7f"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledgeneric60v01/page-data.json",
    "revision": "25ee76d2b48b1f647624f8b0c521d365"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledring37v20/page-data.json",
    "revision": "acbea0a6cafc5c22983db163b080d389"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrgbledring37v21/page-data.json",
    "revision": "28e24a3db25449274e9da49e143f4944"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv10/page-data.json",
    "revision": "ad92b448e2876c7ead6d85b7b0dd3a63"
  },
  {
    "url": "page-data/devices/microsoft/research/jmrotarycontrolbuttonv11/page-data.json",
    "revision": "4dc30e84208cb25c4937f8096134f0a5"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsinglergbled42v01/page-data.json",
    "revision": "dd1a78b8f9f3a148bad0ead792a21ff6"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v10/page-data.json",
    "revision": "968ece1080da761dbd37c16e0bbbef4a"
  },
  {
    "url": "page-data/devices/microsoft/research/jmslider49v11/page-data.json",
    "revision": "b50abc777aa22d042a9c04d6be3fa224"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsliderv20/page-data.json",
    "revision": "2043672df89b2538b0bbc567993db4d3"
  },
  {
    "url": "page-data/devices/microsoft/research/jmsoiltemperatureds18b20v33/page-data.json",
    "revision": "ed4fbdc4a88683ffc0550f17f81780de"
  },
  {
    "url": "page-data/devices/microsoft/research/jmspeechsynthesis61v33/page-data.json",
    "revision": "96f89382ad32d5ce44fccef0c61ce684"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v10a/page-data.json",
    "revision": "1ac68ee5200052c278906f6a20ac7a24"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtemperaturehumidity18v11/page-data.json",
    "revision": "8b0f580f5825a5320f0ad440c9936f8d"
  },
  {
    "url": "page-data/devices/microsoft/research/jmtouchprotov20/page-data.json",
    "revision": "0bc95693a096bb3e5746e006930d882c"
  },
  {
    "url": "page-data/devices/microsoft/research/mikrobuscarrierboard53v01/page-data.json",
    "revision": "49c6adbf00bb7b789767cd6e7c244214"
  },
  {
    "url": "component---src-pages-tools-accelerometer-theremin-tsx-6efa8603122addd5cf01.js"
  },
  {
    "url": "page-data/tools/accelerometer-theremin/page-data.json",
    "revision": "92768273367104294986acc88ec00d16"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-f5c1999b85ae18e4b356.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "1c35ffcf0f0ac0dc38bb53b26db2d000"
  },
  {
    "url": "component---src-pages-tools-commissioner-tsx-13c09b872d94065de26f.js"
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
    "url": "baf0fd2d778787cec7104fdce75a778b8b7a3d97-001ca48861c230af7d4e.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-049fd00693659f51920a.js"
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
    "url": "component---src-pages-tools-flood-test-tsx-7854c3cf160aaf227807.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "1df962a80c37d74650936897474c2cfb"
  },
  {
    "url": "ae29c6db-446fabb0062d0532aaa8.js"
  },
  {
    "url": "component---src-pages-tools-hid-events-tsx-83ad3e0581549eef14d7.js"
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
    "url": "component---src-pages-tools-lightsensor-accessible-tsx-e6fb69e014e6bba39a66.js"
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
    "url": "41a69591c06d74ab821d0a6f985f09ba8c9c9577-6d425a51fc1c204edb75.js"
  },
  {
    "url": "component---src-pages-tools-model-editor-tsx-21f2d9d62f2b33077b7f.js"
  },
  {
    "url": "page-data/tools/model-editor/page-data.json",
    "revision": "fd95b2991c2afcc4273ec25ffce12c42"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-1bd7c7eb38738497c75b.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "a0975d4528cd6648a721d1fc68e60aa1"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-ecec198c4d8629a8a747.js"
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
    "url": "component---src-pages-tools-player-mdx-3208e8d7c21e57d2391f.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "86d9dccc406ee9ae771fe4504cda1c2e"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-9a0cafe1ff9a12c48748.js"
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
    "revision": "fc93aeab9b5fd3395a79a76d5be80382"
  },
  {
    "url": "component---src-pages-tools-release-assets-tsx-5872ffece6d90f0d80f9.js"
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
    "url": "component---src-pages-tools-settings-tsx-0e23fad4e7357ff674c3.js"
  },
  {
    "url": "page-data/tools/settings/page-data.json",
    "revision": "3c0770717930fccad86ecd029431ca21"
  },
  {
    "url": "component---src-pages-tools-speech-strings-tsx-957c17c8d231e90957b3.js"
  },
  {
    "url": "page-data/tools/speech-strings/page-data.json",
    "revision": "6cf3f09ca0e76f08274a7f15f9b0897f"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-0fe115f750b8e0d6be8c.js"
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
  if (!resources || !(await caches.match(`/jacdac-docs/app-3bbe8341e49b97685d20.js`))) {
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
