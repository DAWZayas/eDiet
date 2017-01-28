export const db = {
  host: 'localhost',
  port: 28015,
  db: 'expertsdb',
};

export const auth = {
  passwordSalt: '3^V5.d%6GbjJe3998R6H2q~8sSdb.t7:|QW59U:gg;Hb%_tp-;!u--q*wN4.6!7A',
  sessionSecret: 'cdFAu7s!gsV^*%!=%!H-.^.^5=p%:_U4^:~c4j~-EDmE%*;unkb;K-!_~-%!.g',
  jwtSecret: '.q$bd<$Y0j&(AC*n#Exu2rntt`()KmV]VTF^gD5w]XCD-&=sU>%I9[[?VvV]rC1p',
  facebook: {
    clientID: '317524675296416',
    clientSecret:  '0607b7d95f057fe1d9c49ec5d7f7ce40',
    callbackURL:  'http://localhost:8080/api/facebook/callback',
  },
    google: {
     clientID: process.env.GOOGLE_CLIENT_ID || '1050466959102-dmkb07p4am5ch07ch58hrmvm3j6motng.apps.googleusercontent.com',
     clientSecret: process.env.GOOGLE_CLIENT_SECRET || '1gsz_Yusfe833hnTv2WUiVn0',
     callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:8080/api/google/callback',
     scope: process.env.GOOGLE_CALLBACK_URL || ['profile'],
   },
};
