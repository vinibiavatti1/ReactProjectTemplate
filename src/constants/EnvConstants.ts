import EnvEnum from '../enums/EnvEnum'
import EnvService from '../services/EnvService'

const env = EnvService.getEnv()
let constants: { [key: string]: any } = {} // eslint-disable-line
if (env == EnvEnum.PRODUCTION) {
    constants = import('../envs/production.json')
} else if (env == EnvEnum.TEST) {
    constants = import('../envs/test.json')
} else {
    constants = import('../envs/development.json')
}
export default constants
