var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BJdxXtQEhXNW_7UB16Xk-2F4hTOl83ob4sbmKdcvFuSTJOy4-862K7DMVdaBkn01LuUvfYpo1stYiSbFHt2_3kI",
  privateKey: "XVJwPlhpUHQDys8WQ5DYR1lps1K2-KD9CGt_oya7J68",
};

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ex3IHN9qoNg:APA91bE4mcdC22adk-LTd8pHtPxRTDk1OBcxghod4cYiGapjwNA7UIzxQsdmhC6jcl940wKRtK8ccXWNb-oPbqlh4N-qd5jJVeKYfIiokrdIOxDIkr9VLvEuffxc5gcZdUZfXIl0pRvM",
  expirationTime: null,
  keys: {
    p256dh:
      "BJaKtt5lCSLMAKojvQaVzwWGXx2BD1or78SyeL_eBtP5CCfFJYihUUamOExX0n8igicI4gAu6mgGo5mY2apLT68",
    auth: "JF_kEnTcrfEsXOzi-d0d8Q",
  },
};

push.sendNotification(sub, 'test message')