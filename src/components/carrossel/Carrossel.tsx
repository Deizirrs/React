// import { Box, Button, Grid, Typography } from "@material-ui/core";
// import React from "react";
// import "./Carrossel.css";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Importando os estilos do Swiper
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Importando seu CSS
// import "./Carrossel.css";

// // Importanto Componentes do Swiper
// import { Autoplay, Pagination, Navigation } from "swiper";
// import { useNavigate } from "react-router-dom";

// function Carrossel() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate("/login");
//   };

//   const handleSignup = () => {
//     navigate("/cadastrar");
//   };

//   return (
//     <>
//     <Grid container spacing={2} style={{ backgroundColor: "#F4ECF7" }}>
//         <Grid item xs={12} md={6}>
//           <Box
//             style={{
//               backgroundColor: "#F4ECF7",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "10px",
//             }}
//           >
//             <Typography
//               variant="h4"
//               gutterBottom
//               color="textPrimary"
//               component="h6"
//               align="center"
//               style={{
//                 color: "#3c096c",
//                 fontWeight: "bold",
//                 fontSize: "24px",
//               }}
//             >
//               Bem-vinda à nossa comunidade!
//             </Typography>

//             <Typography
//               variant="h6"
//               gutterBottom
//               color="textPrimary"
//               component="h6"
//               style={{
//                 color: "#3c096c",
//                 fontWeight: "bold",
//                 marginTop: "20px",
//                 textAlign: "justify",
//                 fontSize: "20px",
//               }}
//             >
//               Uma rede social dedicada ao empoderamento feminino, ao apoio mútuo e
//               ao crescimento profissional. Aqui, você encontrará um espaço acolhedor
//               e inspirador, onde mulheres de todas as áreas podem se conectar,
//               aprender e se desenvolver. Nossa missão é fornecer um ambiente seguro e
//               inclusivo, onde você possa compartilhar suas conquistas, desafios e
//               aspirações. Estamos aqui para encorajá-la a alcançar seus sonhos,
//               independentemente do setor em que deseja atuar.
//             </Typography>

//             <Box display="flex" justifyContent="center" marginTop="20px">
//               <Button
//                 className="botao"
//                 variant="contained"
//                 color="primary"
//                 onClick={handleLogin}
//                 style={{ marginRight: "10px" }}
//               >
//                 Login
//               </Button>
//               <Button
//                 className="botao"
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleSignup}
//               >
//                 Cadastre-se
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
        
      
          
      
//       {/* <Grid container spacing={2} style={{
//               backgroundColor: "#F4ECF7"}} >
//         <Grid item xs={12} md={6} >
//           <Box
//             style={{
//               backgroundColor: "#F4ECF7",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "50px",
//             }}
//           >
//             <Typography
//               variant="h4"
//               gutterBottom
//               color="textPrimary"
//               component="h6"
//               align="center"
//               style={{ color: "#3c096c", fontWeight: "bold", fontSize: "24px" }}
//             >
//               Bem-vinda à nossa comunidade!
//             </Typography>

//             <Typography
//               variant="h6"
//               gutterBottom
//               color="textPrimary"
//               component="h6"
//               style={{
//                 color: "#3c096c",
//                 fontWeight: "bold",
//                 marginTop: "20px",
//                 textAlign: "justify",
//                 fontSize: "20px"
//               }}
//             >
//               Uma rede social dedicada ao empoderamento feminino, ao apoio mútuo e
//               ao crescimento profissional. Aqui, você encontrará um espaço acolhedor
//               e inspirador, onde mulheres de todas as áreas podem se conectar,
//               aprender e se desenvolver. Nossa missão é fornecer um ambiente seguro e
//               inclusivo, onde você possa compartilhar suas conquistas, desafios e
//               aspirações. Estamos aqui para encorajá-la a alcançar seus sonhos,
//               independentemente do setor em que deseja atuar.
//             </Typography>
//           </Box>
//         </Grid> */}

//         <Grid item xs={12} md={6}>
//           <Box style={{ backgroundColor: "#F4ECF7" }}>
//             <Swiper
//               slidesPerView={1}
//               spaceBetween={10}
//               loop={true}
//               pagination={{
//                 clickable: true,
//               }}
//               autoplay={{
//                 delay: 5000,
//                 disableOnInteraction: false,
//               }}
//               navigation={true}
//               modules={[Autoplay, Pagination, Navigation]}
//               className="mySwiper"
//             >
//               <SwiperSlide>
//                 <img src="../../../src/assets/images/mulheres.png" alt="Imagem" />
//               </SwiperSlide>

//               <SwiperSlide>
//                 <img src="../../../src/assets/images/home.jpg" alt="Imagem" />
//               </SwiperSlide>
//             </Swiper>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default Carrossel;