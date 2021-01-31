var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BJdxXtQEhXNW_7UB16Xk-2F4hTOl83ob4sbmKdcvFuSTJOy4-862K7DMVdaBkn01LuUvfYpo1stYiSbFHt2_3kI",
  privateKey: "XVJwPlhpUHQDys8WQ5DYR1lps1K2-KD9CGt_oya7J68",
};

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}
push.sendNotification(sub, 'test message')