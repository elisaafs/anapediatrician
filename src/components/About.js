import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="about-us">Quem somos?</div>
      <div className="intensive-doctor">
        Somos médicas intensivistas pediátricas com muitas histórias inusitadas
        do nosso dia-a-dia para compartilhar. Cuidamos de crianças a partir de
        28 dias de vida que se encontram gravemente doentes. Infelizmente,
        devido à doenças como bronquiolite e pneumonia, acidentes domésticos ou
        automotivos, afogamentos, infecções e doenças genéticas, nós temos
        trabalhado bastante.
      </div>
      <div className="wrapper-doctors">
        <img className="picture-doctors" alt="médica" src="/Ana.jpg" />
        <div className="wrapper-text-doctors">
          <div className="doctor-name">Dra. Ana Carolina Soub</div>
          <div className="doctor-crm">CRM-SP 165.107</div>
          <div className="linha" />
          <div className="doctor-description">
            Médica pediatra formada na Universidade de Brasilia, com residência
            em Pediatria pela Universidade Estadual de Campinas e especialidade
            em medicina intensiva pediátrica no mesmo local. Atualmente,
            trabalho no Hospital Estadual de Sumaré, Hospital Municipal de
            Jaguariúna e Centro Médico de Campinas.
          </div>
        </div>
      </div>
      <div className="wrapper-doctors">
        <div className="wrapper-text-doctors-right">
          <div className="doctor-name-right">Dra. Marina P. Giatti Gomes</div>
          <div className="doctor-crm">CRM-SP 162.605</div>
          <div className="linha" />
          <div className="doctor-description-right">
            Médica pediatra formada na Universidade Estadual de Campinas, com
            residência em Pediatria e especialidade em medicina intensiva
            pediátrica pela Universidade Estadual de Campinas. Atuo no Hospital
            Estadual de Sumaré, Hospital e Maternidade Celso Pierro PUC-Campinas
            e Centro Médico de Campinas. Mestranda em Saúde da Criança e do
            Adolescente também pela UNICAMP.
          </div>
        </div>
        <img className="picture-doctors" alt="médica" src="/medica.png" />
      </div>
      <div className="wrapper-doctors">
        <img className="picture-doctors" alt="médica" src="/medica.png" />
        <div className="wrapper-text-doctors">
          <div className="doctor-name">Dra. Ruane Figueiredo</div>
          <div className="doctor-crm">CRM-SP 105.224</div>
          <div className="linha" />
          <div className="doctor-description">
            Médica pediatra formada na PUC - Campinas, com residência em
            Pediatria e especialidade em Medicina Intensiva Pediátrica pela
            Universidade Estadual de Campinas. Mestranda em Saúde da Criança e
            do Adolescente também pela UNICAMP. Pediatra da atenção básica da
            Prefeitura de Jaguariúna, plantonista do Hospital Unimed Americana e
            da Fundação Centro Médico de Campinas.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
