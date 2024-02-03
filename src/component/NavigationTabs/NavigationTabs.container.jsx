import { connect } from 'react-redux';
import browserHistory from 'Util/History';
import { NavigationTabsMap } from './NavigationTabs.config';
import { appendWithStoreCode } from 'Util/Url';
import {
    NavigationTabsContainer as SourceNavigationTabsContainer,
    mapStateToProps,
    mapDispatchToProps,
    DEFAULT_NAVIGATION_TABS_STATE,
} from 'SourceComponent/NavigationTabs/NavigationTabs.container';

export {
    mapStateToProps,
    mapDispatchToProps,
    DEFAULT_NAVIGATION_TABS_STATE,
};

/** @namespace myFirstApp/Component/NavigationTabs/Container */
export class NavigationTabsContainer extends SourceNavigationTabsContainer {
    // TODO implement logic
    containerFunctions = {
        onMenuButtonClick: this.onMenuButtonClick.bind(this),
        onMyAccountButtonClick: this.onMyAccountButtonClick.bind(this),
        onMinicartButtonClick: this.onMinicartButtonClick.bind(this),
        onHomeButtonClick: this.onHomeButtonClick.bind(this),
    };

    onMenuButtonClick() {
        const { navigationState: { name } } = this.props;

        // TODO: resolve issue when coming from CMS page

        if (name === NavigationTabsMap.MENU_TAB) { // if we already are in menu
            browserHistory.push(appendWithStoreCode(''));
        } else if (this.lastSeenMenu <= 0) { // if we have not yet seen menu
            browserHistory.push(appendWithStoreCode(''));
        } else { // otherwise go to last remembered category
            browserHistory.go(-this.lastSeenMenu);
        }

        this.lastSeenMenu = 0;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabsContainer);
