import React from 'react';

import { Button, Modal, Popover, Tooltip } from 'react-bootstrap';

class Grapher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showModal : false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false});
  }

  openModal() {
    this.setState({ showModal:true});
  }

  render() {
    let popover = <Popover title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;

    return (
      <div>

        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.openModal}>
          Grapher
        </Button>

        <Modal
          show={this.state.showModal}
          onHide={this.closeModal}
          dialogClassName="grapher-modal"
          >

          <Modal.Header closeButton>
            <Modal.Title>Grapher via Geogebra</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <iframe scrolling="no" src="https://www.geogebra.org/material/iframe/id/1863325/width/1456/height/706/border/888888/rc/false/ai/true/sdz/true/smb/true/stb/true/stbh/true/ld/false/sri/true/at/auto" > </iframe>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }

}

export default Grapher;
