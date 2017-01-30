export const db = {
  host: process.env.EXPERTS_DB_URL || 'localhost',
  port: process.env.EXPERTS_DB_PORT || 28015,
  db: 'expertsdb',
};

export const auth = {
  passwordSalt: process.env.EXPERTS_AUTH_PASSALT || '3^V5.d%6GbjJe3998R6H2q~8sSdb.t7:|QW59U:gg;Hb%_tp-;!u--q*wN4.6!7A',
  sessionSecret: process.env.EXPERTS_AUTH_SESSECRET || 'cdFAu7s!gsV^*%!=%!H-.^.^5=p%:_U4^:~c4j~-EDmE%*;unkb;K-!_~-%!.g',
  jwtSecret: process.env.EXPERTS_AUTH_JWTSECRET || '.q$bd<$Y0j&(AC*n#Exu2rntt`()KmV]VTF^gD5w]XCD-&=sU>%I9[[?VvV]rC1p',
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID || '317524675296416',
    clientSecret:process.env.FACEBOOK_CLIENT_SECRET ||  '0607b7d95f057fe1d9c49ec5d7f7ce40',
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:8080/api/facebook/callback',
  },
    google: {
     clientID: process.env.GOOGLE_CLIENT_ID || '1050466959102-dmkb07p4am5ch07ch58hrmvm3j6motng.apps.googleusercontent.com',
     clientSecret: process.env.GOOGLE_CLIENT_SECRET || '1gsz_Yusfe833hnTv2WUiVn0',
     callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:8080/api/google/callback',
     scope: process.env.GOOGLE_SCOPE || ['profile'],
   },
};
