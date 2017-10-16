import React, {Component} from 'react';
import axios from 'axios';


class GuestBook extends Component {

  constructor(props){
    super(props);
    this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);

    this.state = {
      SignatureOfGuest: "",
      MessageofGuest: "",
    };


  }

  handleSignatureOfGuest(event) {
    console.log('==>' + event.target.value);

    this.setState({ SignatureOfGuest: event.target.value });
  }
  handleMessageofGuest(event) {
    console.log('==>' + event.target.value);

      this.setState({ MessageofGuest: event.target.value });
    }

    addToGuestBook = event => {
        event.preventDefault();
        this.setState({
          SignatureOfGuest: event.target.value,
          MessageofGuest: event.target.value,
    });



axios.post('https://warm-mesa-85711.herokuapp.com/api/signatures', {
        SignatureOfGuest: this.state.SignatureOfGuest,
        MessageofGuest: this.state.MessageofGuest,
      })
    .then(response => {
      console.log(response, 'Signature added!');
    })
    .catch(err => {
      console.log(err, 'Signature not added, try again');
    });



}



render(){

  return (
    <div>
    <input
           onChange={this.handleSignatureOfGuest}
           name="SignatureOfGuest"
           className="NameinputForm"
           value={this.state.SignatureOfGuest}
           placeholder="Enter your name"
            />
  <textarea
              onChange={this.handleMessageofGuest}
              name="MessageofGuest"
              className="MessageinputForm"
              value={this.state.MessageofGuest}
              placeholder="Type a message"
               />

               <button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
              >
            Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
            </button>

               </div>
  );




}


}

export default GuestBook;
