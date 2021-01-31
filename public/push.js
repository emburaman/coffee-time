var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BJdxXtQEhXNW_7UB16Xk-2F4hTOl83ob4sbmKdcvFuSTJOy4-862K7DMVdaBkn01LuUvfYpo1stYiSbFHt2_3kI",
  privateKey: "XVJwPlhpUHQDys8WQ5DYR1lps1K2-KD9CGt_oya7J68",
};

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
  endpoint:
    "https://bn3p.notify.windows.com/w/?token=BQYAAAC0zy2kQwFMsXYTTMgUjGm8oM3Ytp9oRtm4XO%2bKU7oaUw9P1PWQfRQdfnXUwzR1vO6fm50SL5XQJMFKO7v9%2fRXIjUasUO2N8dLRZZTSH1vZYwUCDgbdl9oStiN%2bR10ZvdMBNOM1vZkHHEOJjz2omxeaCg%2fgcxS64tbIrb9EqLiKypY4vN9c4Jt01%2b2mGtuFif5%2fqh%2f1x%2f2DjZ29FY3kqFD9mHiCEX06PzjlTzuq%2ffeGFM0tlOXgfigz7bCFb5i5m5KoTy22rw2iaMPTmzRyXFaF4ov6SjOSr0LcPe3B1n1%2b7R8rLiPQifD6WIRTASkbg1%2fZuaQ6QqT4Fz0ZRDIqkV3T",
  expirationTime: null,
  keys: {
    p256dh:
      "BHF84xXq4SWFMcLoPFzz3v1TNZoYYihoU2tjVR-3EVOtgmGdqBb675w78ubxwMZ8d9XmDsPsRPFhbSpAsgFSCDc",
    auth: "sb0i2Uu2wz4T8jpsOBH1AQ",
  },
};
push.sendNotification(sub, 'test message')