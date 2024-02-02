import { connect } from 'react-redux';

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

}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabsContainer);
