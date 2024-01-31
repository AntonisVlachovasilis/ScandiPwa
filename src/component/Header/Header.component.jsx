import Link from 'Component/Link';
import MenuIcon from 'Component/MenuIcon';
import { HeaderComponent as SourceHeaderComponent } from 'SourceComponent/Header/Header.component';

/** @namespace myFirstApp/Component/Header/Component */
export class HeaderComponent extends SourceHeaderComponent {
    renderLogo(isVisible = false) {
        const { isLoading, device } = this.props;

        if (isLoading) {
            return null;
        }
        console.log(device.isMobile);

        return (
            <>
             { device.isMobile && <MenuIcon /> }
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
