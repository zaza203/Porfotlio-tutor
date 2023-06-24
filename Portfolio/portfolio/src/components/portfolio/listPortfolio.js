// import React, {useEffect, useState} from 'react';
// import axios from 'axios'


// const ListPortfolio = () => {

//     const [data, setData] = useState([]);

//     useEffect(()=>{
//         axios.get("https://powerful-cyan-underwear.cyclic.app/api/portfolio").then(response => {
//             const formattedData = response.data.data.map(item => ({
//                 id:item._id,
//                 image: item.image,
//                 title: item.title,
//                 github: item.github,
//                 demo: item.demo
//             }));
//             setData(formattedData)            
//         }).catch(error => {
//             console.log("Error fetching portfolio data", error);
//         })
//         getPortfolio()
//     }, []);

//     const getPortfolio = async() =>{
//         const response = await axios.get("/api/project/projects");
//         setData(response.data.project)
//     }
//     console.log(data)
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default ListPortfolio;
