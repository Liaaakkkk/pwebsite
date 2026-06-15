const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cluster0.fy8jfr9.mongodb.net",
  (err, records) => {
    console.log("Erro:", err);
    console.log("Records:", records);
  }
);