import Logger from './Logger';
import { ComponentLoader } from './ComponentLoader';
import { Clock } from './components/Clock'

const loader = new ComponentLoader();

loader.register(new Clock());
loader.start();