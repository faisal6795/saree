import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LanguageContext } from '../../../containers/Language';
import logoIcon from '../../../assets/images/logo.svg';
import { StyledFooterContainer, StyledFooterDesc, StyledFooterLogo, StyledFooterPhone, StyledFooterWhatsapp, StyledLogoContainer, StyledLogoSubtitle, StyledLogoTitle, StyledWrapper } from './Footer.styles';

function Footer() {

    const { dictionary } = useContext(LanguageContext);
    const history = useHistory();
    const [footerClass, setFooterClass] = useState(history.location.pathname.toLowerCase().includes('cart') ? 'hide' : '');
    const title = 'Malabis';
    const subtitle = 'Collection';

    useEffect(() => {
        return history.listen((location) => {
            setFooterClass(location.pathname.toLowerCase().includes('cart') ? 'hide' : '');
        });
    }, [history]);

    return <StyledWrapper className={footerClass} >
        <Link to="/">
            <StyledFooterLogo src={logoIcon} alt={title} />
            <StyledLogoContainer>
                <StyledLogoTitle>{title}</StyledLogoTitle>
                <StyledLogoSubtitle>{subtitle}</StyledLogoSubtitle>
            </StyledLogoContainer>
        </Link>
        <StyledFooterContainer>
            <StyledFooterPhone />
            <StyledFooterWhatsapp />
        </StyledFooterContainer>
        <StyledFooterDesc>{dictionary.ownerName}</StyledFooterDesc>
        <StyledFooterDesc>{dictionary.address}</StyledFooterDesc>
    </StyledWrapper>;
}

export default Footer;