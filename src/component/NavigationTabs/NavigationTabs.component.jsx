import {
    NavigationTabsComponent as SourceNavigationTabsComponent,
} from 'SourceComponent/NavigationTabs/NavigationTabs.component';

/** @namespace myFirstApp/Component/NavigationTabs/Component */
export class NavigationTabsComponent extends SourceNavigationTabsComponent {
    // TODO implement logic

    renderMap = {
        home: this.renderHomeButton.bind(this),
        account: this.renderAccountButton.bind(this),
        minicart: this.renderMinicartButton.bind(this),
    };
}

export default NavigationTabsComponent;
