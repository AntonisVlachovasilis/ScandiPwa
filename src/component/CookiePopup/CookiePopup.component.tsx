/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */

import Link from 'Component/Link';
import { CookiePopupComponent as SourceCookiePopupComponent } from 'SourceComponent/CookiePopup/CookiePopup.component';
import { ReactElement } from 'Type/Common.type';

import './CookiePopup.style';
import './CookiePopup.override.style';

/** @namespace myFirstApp/Component/CookiePopup/Component */
export class CookiePopupComponent extends SourceCookiePopupComponent {
    renderCookieLink(): ReactElement {
        const { cookieLink } = this.props;

        if (!cookieLink) {
            return null;
        }

        return (
            <Link
              block="CookiePopup"
              elem="Link"
              to={ cookieLink }
            >
                { __('Learn more') }
            </Link>
        );
    }

    renderCookieText(): ReactElement {
        return (
            <p block="CookiePopup" elem="Content">
                { __('We use cookies to improve your experience! ') }
                { this.renderCookieLink() }
                { __(' about GDPR rules in the terms of use') }
            </p>
        );
    }

    renderCTA(): ReactElement {
        return (
            <div
              block="CookiePopup"
              elem="CTA"
              onClick={ this.acceptCookies }
              onKeyDown={ this.acceptCookies }
              role="button"
              tabIndex={ 0 }
            >
                { __('Accept') }
            </div>
        );
    }

    render(): ReactElement {
        const { cookieText } = this.props;
        const { isAccepted } = this.state;

        if (!cookieText || isAccepted) {
            return null;
        }

        return (
            <div block="CookiePopup">
                { this.renderCookieText() }
                { this.renderCTA() }
            </div>
        );
    }
}

export default CookiePopupComponent;
