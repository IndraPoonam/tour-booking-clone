import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { id: 1, name: 'John Doe', age: 20, course: 'Computer Science' },
        { id: 2, name: 'Jane Smith', age: 22, course: 'Mathematics' },
        { id: 3, name: 'Alice Johnson', age: 21, course: 'Physics' },
        { id: 4, name: 'Bob Brown', age: 23, course: 'Chemistry' },
        { id: 5, name: 'Charlie Davis', age: 24, course: 'Biology' },
        { id: 6, name: 'Diana Evans', age: 25, course: 'English' },
        { id: 7, name: 'poorvi singh', age: 30, course: 'Hindi' },
        { id: 8, name: 'Dipti pandey', age: 28, course: 'SST' }
      ],
      columns: [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'age', headerName: 'Age', width: 100 },
        { field: 'course', headerName: 'Course', width: 150 }
      ]
    };
  }

  render() {
    return (
      <Box sx={{ height: 400, width: '100%' }}>
        <Typography variant="h4" align="center"  gutterBottom style={{color: 'violet'}}>
          STUDENT DETAILS
        </Typography>
        <DataGrid
          rows={this.state.rows}
          columns={this.state.columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    );
  }
}

export default StudentDetails;



// import React, { Component } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Typography } from '@mui/material';
// import { red } from '@mui/material/colors';

// class StudentDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rows: [
//         { id: 1, name: 'John Doe', age: 20, course: 'Computer Science' },
//         { id: 2, name: 'Jane Smith', age: 22, course: 'Mathematics' },
//         { id: 3, name: 'Alice Johnson', age: 21, course: 'Physics' },
//         { id: 4, name: 'Bob Brown', age: 23, course: 'Chemistry' },
//         { id: 5, name: 'Charlie Davis', age: 24, course: 'Biology' },
//         { id: 6, name: 'Diana Evans', age: 25, course: 'English' },
//         { id: 7, name: 'poorvi singh', age: 30, course: 'Hindi' },
//         { id: 8, name: 'Dipti pandey', age: 28, course: 'SST' }
//       ],
//       columns: [
//         { field: 'id', headerName: 'ID', width: 70 },
//         { field: 'name', headerName: 'Name', width: 150 },
//         { field: 'age', headerName: 'Age', width: 100 },
//         { field: 'course', headerName: 'Course', width: 150 }
//       ]
//     };
//   }

//   render() {
//     return (
//       <Box sx={{
//         height: 400,
//         width: '100%',
//         '@media (max-width: 600px)': {
//           height: 'auto',
//           width: '90vw',
//           margin: 'auto',
//         },
//       }}>
//         <Typography variant="h4" align="center" gutterBottom style={{ color: 'red' }}>
//           STUDENT DETAILS
//         </Typography>
//         <DataGrid
//           rows={this.state.rows}
//           columns={this.state.columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 }
//             }
//           }}
//           pageSizeOptions={[5, 10]}
//           checkboxSelection
//         />
//       </Box>
//     );
//   }
// }

// export default StudentDetails;
