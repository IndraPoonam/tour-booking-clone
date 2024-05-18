// import React, { Component } from 'react';

// class MyForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       class: '',
//       rollNo: ''
//     };
//     // Binding functions
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     // Update state when input fields change
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   handleSubmit(event) {
//     // Handle form submission
//     event.preventDefault();
//     // Do something with the form data, like submitting to a server
//     console.log('Submitted data:', this.state);
//     // Clear form fields after submission
//     this.setState({
//       name: '',
//       class: '',
//       rollNo: ''
//     });
//   }

// handleSubmit(event) {
//     event.preventDefault();
//     const formData = {
//       name: this.state.name,
//       class: this.state.class,
//       rollNo: this.state.rollNo
//     };
  
//     fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Data posted successfully:', data);
//       // Clear form fields after successful submission
//       this.setState({
//         name: '',
//         class: '',
//         rollNo: ''
//       });
//     })
//     .catch(error => console.error('Error posting data:', error));
//   }


// //   handleSubmit(event) {                                                   //data not get from API
// //     event.preventDefault();
// //     const formData = {
// //       name: this.state.name,
// //       class: this.state.class,
// //       rollNo: this.state.rollNo
// //     };
  
// //     fetch('https://jsonplaceholder.typicode.com/users', {
// //       method: 'GET', // Corrected to 'GET'
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify(formData)
// //     })
// //     .then(response => response.json())
// //     .then(data => {
// //       console.log('Data posted successfully:', data);
// //       // Clear form fields after successful submission
// //       this.setState({
// //         name: '',
// //         class: '',
// //         rollNo: ''
// //       });
// //     })
// //     .catch(error => console.error('Error posting data:', error));
// // }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Class:
//           <input
//             type="text"
//             name="class"
//             value={this.state.class}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Roll No:
//           <input
//             type="text"
//             name="rollNo"
//             value={this.state.rollNo}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default MyForm;




/////////////////////////////////////////////////////////////USING MATERIAL UI/////////////////////////////////////////////////

import React, { Component } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', this.state);
  }

  render() {
    return (
      <Container maxWidth="sm" style={{  background: '' }}>
        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: 'green', textAlign: 'center' }}>
          My Form
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="firstName"
            label="First Name"            value={this.state.firstName}
            onChange={this.handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            value={this.state.message}
            onChange={this.handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            // color="primary"
            style={{ backgroundColor: 'red', color: 'white' }} 
          >
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}

export default MyForm;
