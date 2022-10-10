import React from 'react'
import {FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo,SocialMedia,SocialMediaWrap, WebsiteRights} from './FooterStyles'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Me
                        </FooterLinkTitle>
                        <FooterLink to='/signin'>Paragraph1</FooterLink>
                        <FooterLink to='/signin'>Paragraph2</FooterLink>
                        <FooterLink to='/signin'>Paragraph3</FooterLink>
                        <FooterLink to='/signin'>Paragraph4</FooterLink>
                        <FooterLink to='/signin'>Paragraph5</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Me2
                        </FooterLinkTitle>
                        <FooterLink to='/signin'>Paragraph1</FooterLink>
                        <FooterLink to='/signin'>Paragraph2</FooterLink>
                        <FooterLink to='/signin'>Paragraph3</FooterLink>
                        <FooterLink to='/signin'>Paragraph4</FooterLink>
                        <FooterLink to='/signin'>Paragraph5</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Me3
                        </FooterLinkTitle>
                        <FooterLink to='/signin'>Paragraph1</FooterLink>
                        <FooterLink to='/signin'>Paragraph2</FooterLink>
                        <FooterLink to='/signin'>Paragraph3</FooterLink>
                        <FooterLink to='/signin'>Paragraph4</FooterLink>
                        <FooterLink to='/signin'>Paragraph5</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Me4
                        </FooterLinkTitle>
                        <FooterLink to='/signin'>Paragraph1</FooterLink>
                        <FooterLink to='/signin'>Paragraph2</FooterLink>
                        <FooterLink to='/signin'>Paragraph3</FooterLink>
                        <FooterLink to='/signin'>Paragraph4</FooterLink>
                        <FooterLink to='/signin'>Paragraph5</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>FENKO</SocialLogo>
                    <WebsiteRights>FENKO © {new Date().getFullYear()}All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        <SocialIconLink href="//www.youtube.com/" target="_blank"
                        aria-label="YouTube"><FaYoutube/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer