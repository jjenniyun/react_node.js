const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증처리 하는 곳
  // 클라이언트 쿠키에서 토큰을 가져옴
  let token = req.cookies.x_auth;

  // 토큰을 복호화 한 후 유저 찾기
  User.findByToken(token, (err, user) => {
    // 유저 있으면 인증 okay
    // 유저가 없으면 인증 no!
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    // 미들웨어에서 갈 수 있게 하도록 메서드 사용
    next();
  });
};

module.exports = { auth };
