import { server } from 'universal-webpack/config'
import settings from './universal-webpack-settings'
import configuration from './webpack.config'


console.log("+++++++++++++++++++++++");
console.log(configuration);
console.log("+++++++++++++++++++++++");
console.log(settings);
console.log("+++++++++++++++++++++++");

export default server(configuration, settings)