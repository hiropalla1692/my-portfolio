import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "../components/layout"
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import Modal from 'react-modal';

const Container = styled.div`
  display: flex;
  align-items: top;
`
const Block = styled.div`
  margin: 1em 1em;
`
const Styledh5 = styled.h5`
  margin: 2em 0 0.5em 0;
`
const ModalButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 11rem;
  background: black;
  color: white;
  border: 2px solid black;

  ${props => props.open && css`
      background: transparent;
      color: white;
      border: 2px solid white;
      &:hover {
        background-color: white;
        color: #3e3047;
        }
  `}
`

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    background            : '#dcf7bf',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('*');

function ModalWindow(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <StaticQuery
      query={query}
      render={ data => (
        <div>
        <ModalButton open onClick={openModal}>>> Go into details</ModalButton>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Container>
            <Block>
              <h1 ref={_subtitle => (subtitle = _subtitle)}>{props.name}</h1>
              <Img fixed={data.vocamy.childImageSharp.fixed} />
            </Block>
            <Block>
              <Styledh5>使用技術：</Styledh5>
              {props.tech}
              <Styledh5>詳細：</Styledh5>
              {props.detail}
              <Styledh5>こだわった点、苦労した点：</Styledh5>
              {props.point}
              <ModalButton onClick={closeModal}>✖︎ close</ModalButton>
            </Block>
          </Container>
        </Modal>
      </div>
      )}
      />
  )
}

const query = graphql`
    query {
        vocamy: file(relativePath: {eq: "vocamy_screenshot.png"}) {
            childImageSharp{
                fixed(width: 450, quality: 100)
                  {
                    ...GatsbyImageSharpFixed
                  }
            }
        },
        myportfolio: file(relativePath: {eq: "myportfolio_screenshot.png"}) {
            childImageSharp{
                fixed(width: 450, quality: 100)
                  {
                    ...GatsbyImageSharpFixed
                  }
            }
        }
    }
`

export default ModalWindow;