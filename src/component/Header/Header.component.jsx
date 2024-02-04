import Link from 'Component/Link';
import { Suspense } from 'react';
import MenuIcon from 'Component/MenuIcon';
import Overlay from 'Component/Overlay';
import MenuPage from 'Route/MenuPage';

import { HeaderComponent as SourceHeaderComponent } from 'SourceComponent/Header/Header.component';

/** @namespace myFirstApp/Component/Header/Component */
export class HeaderComponent extends SourceHeaderComponent {
    renderLogo(isVisible = false) {
        const { isLoading, device, onMenuButtonClick } = this.props;

        if (isLoading) {
            return null;
        }

        return (
            <>
             <Suspense fallback={ <div block="CategoryPage" elem="FilterPlaceholder" /> }>

                    <button
                      onClick={ onMenuButtonClick }
                    >

             { device.isMobile && <MenuIcon /> }
                    </button>
             </Suspense>
             <Suspense fallback={ <div block="CategoryPage" elem="FilterPlaceholder" /> }>
             <Overlay
               mix={ { block: 'CategoryFilterOverlay' } }
               id="TEST"
               isRenderInPortal={ false }
             >
                <div block="CategoryFilterOverlay" elem="Wrapper">
                   <MenuPage />
                </div>
             </Overlay>
             </Suspense>
             <Link
               to="/"
               aria-label="Go to homepage by clicking on ScandiPWA logo"
               aria-hidden={ !isVisible }
               tabIndex={ isVisible ? 0 : -1 }
               block="Header"
               elem="LogoWrapper"
               mods={ { isVisible } }
               key="logo"
             >
                 { this.renderLogoImage() }
             </Link>
            </>
        );
    }
}

export default HeaderComponent;
