import Revol, { RevolElement, Component, ComponentOptions, rerender, onInit } from '@evolutionmedia/revolts';

interface ITestComponentProps {
    text: string;
}

@ComponentOptions({
    elementTag: 'test'
})
export default class testComponent extends Component<ITestComponentProps> implements onInit {
    @rerender
    private idk: string = 'IDK!';

    template(): RevolElement[] {
        return [
            <idk>
                { this.props ?  this.props.text : 'textless' }<br />
                { this.idk }
            </idk>
        ];
    }

    onInit() {
        const seconds: number = 10;
        for(let i = 1; i <= seconds; i++) setTimeout(() => this.idk = 'Rerender ' + i + '!', i*1000);
        setTimeout(() => this.idk = 'Klaar!', (seconds+1)*1000);
    }
}