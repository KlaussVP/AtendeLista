import React from 'react';
import AuthorshipContainer from './styles';
import { 
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

export default function Authorship() {
  return (
    <AuthorshipContainer>
      <p>Entre em contato:</p>
      <div>
        <a href="https://www.linkedin.com/in/klausscorrea/" target='blank'><FaLinkedin /></a>
        <a href="https://github.com/KlaussVP" target='blank'><FaGithub /></a>
        <a href="https://wa.me/5521988929720" target='blank'><FaWhatsapp /></a>
        <a href="https://www.instagram.com/klaussmbc/" target='blank'><FaInstagram /></a>
      </div>
    </AuthorshipContainer>
  );
}