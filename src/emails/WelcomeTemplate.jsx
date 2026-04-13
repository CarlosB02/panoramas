import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

export const WelcomeEmail = ({ userEmail = 'leitor@exemplo.com' }) => (
  <Html>
    <Head />
    <Preview>Bem-vindo ao Panoramas — Informação de Confiança</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={logo}>PANORAMAS</Heading>
            <Text style={tagline}>Informação de Confiança</Text>
          </Section>
          
          <Section style={content}>
            <Heading style={h1}>Obrigado por se juntar a nós!</Heading>
            <Text style={text}>
              Olá,
            </Text>
            <Text style={text}>
              É com grande satisfação que lhe damos as boas-vindas à nossa comunidade. A partir de agora, terá acesso direto às análises mais profundas, notícias de última hora e reportagens exclusivas do <strong>Panoramas</strong>.
            </Text>
            <Text style={text}>
              O nosso compromisso é com o rigor, a independência e a verdade. Esperamos que a nossa informação seja uma ferramenta útil no seu dia-a-dia.
            </Text>
            
            <Section style={buttonContainer}>
              <Link href="https://panoramas.pt" style={button}>
                Explorar as Últimas Notícias
              </Link>
            </Section>
            
            <Text style={footerText}>
              Recebeu este email porque se inscreveu na newsletter do Panoramas através do endereço <strong>{userEmail}</strong>.
            </Text>
          </Section>
          
          <Section style={footer}>
            <Text style={footerLabel}>&copy; 2026 Panoramas. Todos os direitos reservados.</Text>
            <Text style={footerLabel}>
              <Link href="https://panoramas.pt/politica-de-privacidade" style={footerLink}>Política de Privacidade</Link>
              {' • '}
              <Link href="https://panoramas.pt/termos-e-condicoes" style={footerLink}>Termos e Condições</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '580px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
};

const header = {
  padding: '32px',
  borderBottom: '1px solid #e6ebf1',
  textAlign: 'center',
};

const logo = {
  fontSize: '28px',
  fontWeight: '900',
  color: '#0d47a1',
  margin: '0',
  letterSpacing: '1px',
};

const tagline = {
  fontSize: '12px',
  textTransform: 'uppercase',
  color: '#d4a017',
  marginTop: '4px',
  letterSpacing: '2px',
  fontWeight: '600',
};

const content = {
  padding: '40px',
};

const h1 = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#1a1a2e',
  marginBottom: '24px',
};

const text = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#484848',
  marginBottom: '16px',
};

const buttonContainer = {
  textAlign: 'center',
  marginTop: '32px',
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#0d47a1',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  padding: '12px 24px',
  display: 'inline-block',
};

const footerText = {
  fontSize: '12px',
  color: '#9ca3af',
  marginTop: '40px',
  fontStyle: 'italic',
};

const footer = {
  textAlign: 'center',
  padding: '0 40px',
};

const footerLabel = {
  fontSize: '11px',
  color: '#9ca3af',
  lineHeight: '18px',
  margin: '8px 0',
};

const footerLink = {
  color: '#9ca3af',
  textDecoration: 'underline',
};
