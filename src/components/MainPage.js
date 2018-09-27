import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="child-wrapper">
        <img className="child" alt="criança" src="/Child.jpg" />
      </div>
      <div className="fundo-wrapper">
        <div className="wrapper-text">
          <div className="title">Sejam bem-vindos!</div>
          <div className="subtitle">
            Deve ser mania de médico, mas como a maioria, nos dedicamos muito
            mais a estudar as enfermidades do que a saúde. Na dura rotina da
            UTI, em que a doença está presente todos os dias, acabamos
            encontrando conclusões para as situações mais graves que acometem os
            pacientes. Entretanto, eis que ficamos sem a resposta perfeita para
            as dúvidas mais cotidianas dos pais: o que eu faço para meu filho
            comer? E para ele dormir? Para quem não está vivendo na pele esse
            verdadeiro desafio que é criar um filho, a resposta pode parecer
            simples e mágica, mas sabemos que não é bem assim. Não temos e não
            pretendemos ter a solução para todas essas questões, porém, baseado
            em ciência, queremos tirar dúvidas, desmistificar mitos e dar
            sugestões de como criar seu filho sem crise.
          </div>
          <Link className="link" to="/sobre">
            <div className="fake-buttom">Sobre nós</div>
          </Link>
        </div>
        <img className="fundo" alt="fundo" src="/family.png" />
      </div>
      <div className="menu-bottom">
        <div className="infos-bottom blue">
          <Link className="link" to="/dicas">
            <i className="far fa-lightbulb icons-bottom" />
            <div className="title-bottom">Dicas</div>
          </Link>

          <div className="subtitle-bottom">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </div>
        </div>
        <div className="infos-bottom red">
          <Link className="link" to="/noticias">
            <i className="far fa-newspaper icons-bottom" />
            <div className="title-bottom">Notícias</div>
          </Link>
          <div className="subtitle-bottom">
            A mídia nos bombardeia de informações a respeito de doenças,
            tratamentos e causas todos os dias. Mas afinal, o que é verdade?
          </div>
        </div>
        <div className="infos-bottom yellow">
          <Link className="link" to="/cronicas">
            <i className="fas fa-pen pen" />
            <div className="title-bottom">Crônicas</div>
          </Link>
          <div className="subtitle-bottom">
            A vida em uma Unidade de Tratamento Intensiva Infantil não é fácil.
            As nossas experiências, entretanto, são ricas e merecem ser
            divididas.
          </div>
        </div>
        <div className="infos-bottom green">
          <Link className="link" to="/indicacoes">
            <i className="fas fa-video video" />
            <div className="title-bottom">Indicações</div>
          </Link>

          <div className="subtitle-bottom">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
