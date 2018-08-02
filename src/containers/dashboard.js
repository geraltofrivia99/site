import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import tw3 from '../img/tw3.jpg';
import scrollToComponent from 'react-scroll-to-component';
import { MouseDown } from '../components/Scroll/MouseDown';
import { MouseUp } from '../components/Scroll/MouseUp';
import { SectionNormal } from '../components/Sections/NormalSec';
import { VhSection } from '../components/Sections/VhSection';
import bottle from '../img/bottle.jpg';

// import ScrollList from '../components/Scroll/ScrollList';
// import { loadSections } from '../redux/actions/sections';


const Wrapper = styled.div`
  height: 100vh;
  background-color: #000;
`;
const Vidwrap = styled.div`
  background-image: url(${tw3});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  
  
`;
  const Title = styled.div`
    color: #fff;
    margin: 4rem;

  `;
  const ContentWrap = styled.div`
    height: 100vh;
  `;
  const Content = styled.div`
    padding: 2rem;
    text-align: center;
    height: 100vh;
  `;
  

class Dash extends Component {
  componentDidMount = () => {
    
  }
  scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }
  
  render() {
    const { offset, sections } = this.props
    
    return (
      <Wrapper>
          <Vidwrap>
            <Title>
              <h1>
                Lauren Schmidt
              </h1>
            {offset <= 200 && 
              <MouseDown
              toElScrol={() => scrollToComponent(this.One, { offset: -200, align: 'top', duration: 1500, ease:'inExpo'})}
            />
            }
            </Title>
          </Vidwrap>
            <ContentWrap>
              <div>
                <SectionNormal ref={node => this.One = node} >
                  Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                  Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                  Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                  Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                  Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                  Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                </SectionNormal>
                <VhSection ref={node => this.Two = node} bgcImg={bottle}>
                  Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                    Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                    Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                    Irure adipisicing cupidatat in consectetur ad Lorem aliqua aliquip velit aliqua do excepteur aliquip. Est laborum consequat non proident cupidatat ut laboris ipsum ad. Aliquip mollit eu sint veniam nisi enim duis culpa consequat est mollit magna cillum.
                </VhSection>
              </div>
            </ContentWrap>
        {/* {offset > 620 && <ScrollList sections={sections} Num={this.Two}/>} */}
        {offset > 805 && <MouseUp onClick={() => this.scrollUp()}/>}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  offset: state.scroll.offset,
  section: state.sections
});
const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash)