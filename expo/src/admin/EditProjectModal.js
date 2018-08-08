/* react components */
import React, { Component } from 'react';

class EditProjectModal extends Component {

  // Expect the project ID from this.props as projectID
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal fade" id={this.props.editID}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Project</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              replace this

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default EditProjectModal;
