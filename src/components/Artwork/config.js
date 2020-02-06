import runtimeEnv from '@mars/heroku-js-runtime-env'

let env = runtimeEnv();
const config = {
    API_KEY: env.TRANSLATE_API_KEY
    //process.env.TRANSLATE_API_KEY
}

export default config;