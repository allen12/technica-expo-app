/* react components */
import React, { Component } from 'react';
//import '../App.css';

const InvalidAccessErr = (
  <div className="alert alert-danger">
    <strong>Invalid access code! </strong>
      This access code is already in use. Please enter a different code.
  </div>
);

class CreateSponsorModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      access_code: '',
      invalid_access: false,
      company_name: '',
    };
  }

  saveSponsor(e) {
    let valid = true;

    if(valid) {
      // TODO: Send access code and company name to db if valid access code
      // TODO: Update state against db change
      // Reset state and close modal
      this.setState({
        access_code: '',
        invalid_access: false,
        company_name: '',
      });
      document.getElementById("btnHideCreateSponsorModal" + this.props.createID).click();
    } else {
      // Show errors
      this.setState({invalid_access: true});
    }
  }

  render() {
    return (
      <div className="modal fade" id={this.props.createID}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Sponsor</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

                <div className="form-group">
                  <label>Access Code</label>
                  <input type="text" className="form-control"
                    id="lblAccessCode"
                    placeholder="Enter an access code"
                    onChange = {(event) => this.setState({access_code:event.target.value})}/>
                  {this.state.invalid_access ? InvalidAccessErr : ""}
                </div>
                <div className="form-group">
                  <label>Sponsor Name</label>
                  <input type="text" className="form-control"
                    id="lblSponsorName"
                    placeholder="Enter the sponsor or company name"
                    onChange = {(event) => this.setState({company_name:event.target.value})}/>
                </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="button button-secondary"
                ID={"btnHideCreateSponsorModal" + this.props.createID}
                data-dismiss="modal">Cancel</button>
              <button type="button" className="button button-primary"
                onClick={(event) => {
                  this.saveSponsor(event);
                }}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default CreateSponsorModal;
