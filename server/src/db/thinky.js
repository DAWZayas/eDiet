// npm packages
import initThinky from 'thinky';

// our packages
import dbConfig from '../../config';

// init thinky
const thinky = initThinky(dbConfig);
const {r} = thinky;

// export
export default {thinky, r};
