import { IApp } from '@evolutionmedia/revolts';
import RevoltsApp from './main';

const rApp: RevoltsApp = new RevoltsApp();
const app: IApp = (rApp as IApp);

app.render();
