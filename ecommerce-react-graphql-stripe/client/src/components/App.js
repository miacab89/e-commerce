import React from 'react';
import { Container, Box, Heading } from "gestalt"; 
import './App.css';



// const apiUrl = process.env.API_URL || 'http://172.20.10.2:3000/'; 
// const strapi = new Strapi(apiUrl); 

 function App() {
  
// useEffect(() => {
//   async function DidMount() {
//     const response = await strapi.request('POST', '/graphql',
//     {
//       data: {
//         query: `query {
//           brands {
//             _id
//             name
//             description
//             createdAt
//             image {
//               name 
//             }
//           }
//         }`
//       }
//     }
//     )
//     console.log(response); 
//   } DidMount(); 
// },[]); 
  

    return (
      <Container>
        <Box display="flex" justifycontent="center" marginBottom={2}>
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
      </Container>) 
    
}

export default App;
