import {runtimeEnv as env} from '@mars/heroku-js-runtime-env'


const config = {
    API_KEY: env.TRANSLATE_API_KEY
    //process.env.TRANSLATE_API_KEY
}

export default config;