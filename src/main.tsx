import Revol, { App } from '@evolutionmedia/revolts';
import testComponent from './components/testComponent';
import { idkComponent } from './components/idkComponent';

@App({
    root: '#root',
    load: [testComponent, idkComponent],
    bootstrap: <test text={"Example text"} />
})
export default class RevoltsApp { }
