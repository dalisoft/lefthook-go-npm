import { prepare, maps } from "binary2npm";

maps.arch.arm64 = "arm64";
maps.vendor = {};
maps.os = {
  darwin: "MacOS",
  win32: "Windows",
  linux: "Linux",
  freebsd: 'FreeBSD'
};

await prepare({
  remote: "github",
  author: "evilmartians",
  repository: "lefthook",
  remoteToken: process.env.GITHUB_TOKEN,
  binary: "lefthook",
  stableOnly: false,
  orders: ["binary", "version", "os", "arch"],
});
