function a0_0x24eb(_0x2cf9d1, _0x8d8c8e) {
  const _0x3472eb = a0_0x3472();
  return (
    (a0_0x24eb = function (_0x24eb2a, _0x167bb3) {
      _0x24eb2a = _0x24eb2a - 0x6f;
      let _0xe75899 = _0x3472eb[_0x24eb2a];
      return _0xe75899;
    }),
    a0_0x24eb(_0x2cf9d1, _0x8d8c8e)
  );
}
const a0_0x3209a2 = a0_0x24eb;
(function (_0x39b353, _0x4f2457) {
  const _0x4b4238 = a0_0x24eb,
    _0x5bef59 = _0x39b353();
  while (!![]) {
    try {
      const _0x5f430c =
        (-parseInt(_0x4b4238(0x91)) / 0x1) * (parseInt(_0x4b4238(0x9f)) / 0x2) +
        (parseInt(_0x4b4238(0xa2)) / 0x3) * (parseInt(_0x4b4238(0x88)) / 0x4) +
        parseInt(_0x4b4238(0x93)) / 0x5 +
        (-parseInt(_0x4b4238(0x9c)) / 0x6) * (parseInt(_0x4b4238(0x98)) / 0x7) +
        -parseInt(_0x4b4238(0x73)) / 0x8 +
        -parseInt(_0x4b4238(0x8f)) / 0x9 +
        (-parseInt(_0x4b4238(0xa6)) / 0xa) * (-parseInt(_0x4b4238(0x78)) / 0xb);
      if (_0x5f430c === _0x4f2457) break;
      else _0x5bef59["push"](_0x5bef59["shift"]());
    } catch (_0x2ed2a1) {
      _0x5bef59["push"](_0x5bef59["shift"]());
    }
  }
})(a0_0x3472, 0x98565);
const { execSync } = require(a0_0x3209a2(0x83)),
  fs = require("fs"),
  path = require(a0_0x3209a2(0x75));
function a0_0x3472() {
  const _0x5ad9d6 = [
    "application/json",
    "7101054ehgdNj",
    "parse",
    "82nWyYlj",
    "forEach",
    "3774120TCEplp",
    "cwd",
    "trim",
    "Your\x20token\x20may\x20have\x20expired\x20or\x20be\x20incorrect.\x20Kindly\x20reach\x20out\x20to\x20Spartify\x20support\x20for\x20assistance.:\x20",
    "error",
    "1393Yebjkl",
    "unlinkSync",
    "No\x20.env\x20file\x20found.\x20Using\x20CI/CD\x20environment\x20variables.",
    "@spartify.io/spartify-engine",
    "18060CGdQCg",
    "existsSync",
    "slice",
    "29418CqkGsh",
    "resolve",
    "filter",
    "16116FPIXTR",
    "--openTest",
    "SPARTIFY_KEY",
    "split",
    "18670OWyaZP",
    "env",
    "npx\x20cypress\x20open\x20--config-file\x20spartify.config.ts\x20",
    "startsWith",
    "npx\x20cypress\x20run\x20--config-file\x20spartify.config.ts\x20",
    "5623360lDxddd",
    "includes",
    "path",
    "utf8",
    "argv",
    "18623xBoUOC",
    "@spartify.io/spartify-engine\x20version\x20not\x20found\x20in\x20package.json",
    "text",
    "join",
    "readFileSync",
    "--runTest",
    "devDependencies",
    "log",
    "Empty\x20token\x20received",
    "POST",
    "HTTP\x20error!\x20Status:\x20",
    "child_process",
    "--initialize",
    "npm\x20install\x20--registry=https://registry.npmjs.org/\x20--//registry.npmjs.org/:_authToken=",
    "inherit",
    "exit",
    "4lxdtRo",
    "message",
    "package.json",
    "status",
    "map",
    "Using\x20environment\x20variables\x20from\x20CI/CD.",
  ];
  a0_0x3472 = function () {
    return _0x5ad9d6;
  };
  return a0_0x3472();
}
loadEnv();
const args = process[a0_0x3209a2(0x77)][a0_0x3209a2(0x9e)](0x2);
function getFrameworkVersion() {
  const _0x543469 = a0_0x3209a2,
    _0x13325b = path[_0x543469(0x7b)](__dirname, _0x543469(0x8a));
  if (!fs[_0x543469(0x9d)](_0x13325b))
    throw new Error("package.json\x20file\x20not\x20found");
  const _0x50deb9 = JSON[_0x543469(0x90)](
      fs[_0x543469(0x7c)](_0x13325b, _0x543469(0x76))
    ),
    _0x138ea7 = _0x50deb9[_0x543469(0x7e)]?.[_0x543469(0x9b)];
  if (!_0x138ea7) throw new Error(_0x543469(0x79));
  return _0x138ea7;
}
async function getToken(_0x217b34, _0x2e4f84) {
  const _0xd6c7e3 = a0_0x3209a2;
  try {
    const _0x6854a = await fetch(
      "https://dev-portal.spartify.io/spartify-cli-token/generation",
      {
        method: _0xd6c7e3(0x81),
        headers: { "Content-Type": _0xd6c7e3(0x8e) },
        body: JSON["stringify"]({
          apiKey: _0x217b34,
          frameworkVersion: _0x2e4f84,
        }),
      }
    );
    if (!_0x6854a["ok"])
      throw new Error(_0xd6c7e3(0x82) + _0x6854a[_0xd6c7e3(0x8b)]);
    const _0x35defe = await _0x6854a[_0xd6c7e3(0x7a)]();
    if (!_0x35defe) throw new Error(_0xd6c7e3(0x80));
    return _0x35defe;
  } catch (_0x22cb7a) {
    throw new Error(_0xd6c7e3(0x96) + _0x22cb7a[_0xd6c7e3(0x89)]);
  }
}
async function getConfig() {
  const _0x2e8e1a = a0_0x3209a2,
    _0x543416 = process[_0x2e8e1a(0x6f)][_0x2e8e1a(0xa4)];
  if (!_0x543416)
    throw new Error(
      "API\x20key\x20is\x20missing\x20in\x20environment\x20variables"
    );
  const _0x26bf29 = getFrameworkVersion(),
    _0x55e1ca = await getToken(_0x543416, _0x26bf29);
  return { apiKey: _0x543416, token: _0x55e1ca };
}
function deletePackageLock() {
  const _0x53abff = a0_0x3209a2,
    _0x506105 = path[_0x53abff(0x7b)](
      process[_0x53abff(0x94)](),
      "package-lock.json"
    );
  if (fs[_0x53abff(0x9d)](_0x506105))
    try {
      fs[_0x53abff(0x99)](_0x506105);
    } catch (_0x27cc9f) {
      process["exit"](0x1);
    }
}
async function runI() {
  const _0xa4e885 = a0_0x3209a2;
  try {
    deletePackageLock();
    const _0x1910c2 = await getConfig(),
      _0x30d372 = args["filter"]((_0x5c8d31) => _0x5c8d31 !== _0xa4e885(0x84))[
        _0xa4e885(0x7b)
      ]("\x20");
    execSync(_0xa4e885(0x85) + _0x1910c2["token"] + "\x20" + _0x30d372, {
      stdio: _0xa4e885(0x86),
    });
  } catch (_0x581b05) {
    console[_0xa4e885(0x97)](
      "Error\x20during\x20installation:",
      _0x581b05[_0xa4e885(0x89)]
    ),
      process[_0xa4e885(0x87)](0x1);
  }
}
async function runTest() {
  const _0x1815e2 = a0_0x3209a2;
  try {
    const _0x5d0988 = args[_0x1815e2(0xa1)](
      (_0x30030a) => _0x30030a !== _0x1815e2(0x7d)
    )[_0x1815e2(0x7b)]("\x20");
    execSync(_0x1815e2(0x72) + _0x5d0988, { stdio: _0x1815e2(0x86) });
  } catch (_0x54c84d) {
    console[_0x1815e2(0x97)](_0x54c84d[_0x1815e2(0x89)]);
  }
}
async function openTest() {
  const _0x255929 = a0_0x3209a2;
  try {
    const _0xadd7dc = args[_0x255929(0xa1)](
      (_0x35451a) => _0x35451a !== "--openTest"
    )["join"]("\x20");
    execSync(_0x255929(0x70) + _0xadd7dc, { stdio: _0x255929(0x86) });
  } catch (_0x17ae6f) {
    console[_0x255929(0x97)](_0x17ae6f[_0x255929(0x89)]);
  }
}
function loadEnv(_0xc768a3 = ".env") {
  const _0x3bf6c6 = a0_0x3209a2;
  try {
    const _0x1e0740 = path[_0x3bf6c6(0xa0)](_0xc768a3);
    if (process[_0x3bf6c6(0x6f)][_0x3bf6c6(0xa4)]) {
      console[_0x3bf6c6(0x7f)](_0x3bf6c6(0x8d));
      return;
    }
    if (fs[_0x3bf6c6(0x9d)](_0x1e0740)) {
      const _0x2468e2 = fs["readFileSync"](_0x1e0740, _0x3bf6c6(0x76)),
        _0x6927c7 = _0x2468e2[_0x3bf6c6(0xa5)]("\x0a");
      _0x6927c7[_0x3bf6c6(0x92)]((_0x2d81e5) => {
        const _0x5aceef = _0x3bf6c6;
        if (_0x2d81e5[_0x5aceef(0x95)]() && !_0x2d81e5[_0x5aceef(0x71)]("#")) {
          const [_0x4543e6, _0x26d13b] = _0x2d81e5["split"]("=")[
            _0x5aceef(0x8c)
          ]((_0x5bfa47) => _0x5bfa47[_0x5aceef(0x95)]());
          _0x4543e6 &&
            _0x26d13b &&
            !process[_0x5aceef(0x6f)][_0x4543e6] &&
            (process[_0x5aceef(0x6f)][_0x4543e6] = _0x26d13b);
        }
      });
    } else console["log"](_0x3bf6c6(0x9a));
  } catch (_0x400e7d) {
    console[_0x3bf6c6(0x97)](
      "Error\x20loading\x20.env\x20file:",
      _0x400e7d[_0x3bf6c6(0x89)]
    );
  }
}
if (args[a0_0x3209a2(0x74)](a0_0x3209a2(0x84))) runI();
else {
  if (args[a0_0x3209a2(0x74)](a0_0x3209a2(0x7d))) runTest();
  else args[a0_0x3209a2(0x74)](a0_0x3209a2(0xa3)) && openTest();
}
