var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)t\.co$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.co\.jp$/.test(host)) return "+proxy";
        if (/(?:^|\.)zhihu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)letscorp\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)icbc\.com\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)51credit\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)weibo\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qq\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ruanyifeng\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)goo\.gl$/.test(host)) return "+proxy";
        if (/(?:^|\.)wsj\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ift\.tt$/.test(host)) return "+proxy";
        if (/(?:^|\.)xixitalk\.github\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)coding\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)juejin\.im$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)westca\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)medium\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)frontbin\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)vimeo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)instagram\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)paypal\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)kaptcha\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pbc\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)rishiqing\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)baidu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)w3school\.com\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)virmach\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)imooc\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)kixeye\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)taobao\.com$/.test(host)) return "DIRECT";
        if (host[host.length - 1] >= 0 && isInNet(host, "10.200.1.238", "255.255.255.255")) return "DIRECT";
        if (host[host.length - 1] >= 0 && isInNet(host, "10.200.1.237", "255.255.255.255")) return "DIRECT";
        if (host[host.length - 1] >= 0 && isInNet(host, "192.168.254.199", "255.255.255.255")) return "DIRECT";
        if (host[host.length - 1] >= 0 && isInNet(host, "10.200.0.116", "255.255.255.255")) return "DIRECT";
        if (/blog\.csdn\.net$/.test(host)) return "DIRECT";
        if (host[host.length - 1] >= 0 && isInNet(host, "10.200.0.237", "255.255.255.255")) return "DIRECT";
        if (host[host.length - 1] >= 0 && isInNet(host, "192.168.0.200", "255.255.255.255")) return "DIRECT";
        if (/(?:^|\.)runoob\.com$/.test(host)) return "DIRECT";
        if (host[host.length - 1] >= 0 && isInNet(host, "192.168.254.133", "255.255.255.255")) return "DIRECT";
        if (/taobao\.com/.test(host)) return "DIRECT";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080";
    }
});