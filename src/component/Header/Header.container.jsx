import { connect } from 'react-redux';

import {
    mapStateToProps as sourceMapStateToProps,
    mapDispatchToProps as sourceMapDispatchToProps,
    DEFAULT_HEADER_STATE as SOURCE_DEFAULT_HEADER_STATE,
    HeaderContainer as SourceHeaderContainer,
} from 'SourceComponent/Header/Header.container';

// TODO: implement DEFAULT_HEADER_STATE
export const DEFAULT_HEADER_STATE = SOURCE_DEFAULT_HEADER_STATE;

/** @namespace myFirstApp/Component/Header/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

/** @namespace myFirstApp/Component/Header/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({

    ...sourceMapDispatchToProps(dispatch),

    // TODO extend mapDispatchToProps
});

/** @namespace myFirstApp/Component/Header/Container */
export class HeaderContainer extends SourceHeaderContainer {
    // TODO implement logic
    onMenuButtonClick() {
        // eslint-disable-next-line no-console
        const { showOverlay } = this.props;

        showOverlay('TEST');
    }

    containerFunctions = {
        onBackButtonClick: this.onBackButtonClick.bind(this),
        onCloseButtonClick: this.onCloseButtonClick.bind(this),
        onSearchBarFocus: this.onSearchBarFocus.bind(this),
        onClearSearchButtonClick: this.onClearSearchButtonClick.bind(this),
        onMyAccountButtonClick: this.onMyAccountButtonClick.bind(this),
        onSearchBarChange: this.onSearchBarChange.bind(this),
        onEditButtonClick: this.onEditButtonClick.bind(this),
        onMinicartButtonClick: this.onMinicartButtonClick.bind(this),
        onOkButtonClick: this.onOkButtonClick.bind(this),
        onCancelButtonClick: this.onCancelButtonClick.bind(this),
        onSearchOutsideClick: this.onSearchOutsideClick.bind(this),
        onMyAccountOutsideClick: this.onMyAccountOutsideClick.bind(this),
        onMinicartOutsideClick: this.onMinicartOutsideClick.bind(this),
        onSignIn: this.onSignIn.bind(this),
        shareWishlist: this.shareWishlist.bind(this),
        hideActiveOverlay: this.props.hideActiveOverlay,
        onMenuButtonClick: this.onMenuButtonClick,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
