import { Box, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";

export default () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Box
        bgcolor={"primary.main"}
        color={"black"}
        width={"100%"}
        height={{ md: 400, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        gap={2}
      >
        <Box ml={10} mb={5} >
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Apoio Institucional
          </Typography>
        </Box>
        <Box ml={10} mr={10} display={"flex"} justifyContent={"space-evenly"}>
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
        </Box>
      </Box>

      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={{ md: 420, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mb={5}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Objetivos e metas
          </Typography>
        </Box>
        <Box ml={20} mr={20} display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={"30%"}
            justifyContent={"center"}
          >
            <Image
              sx={{
                width: { md: "30%" },
              }}
              src="Ativos_Recicla_Mack/imagem-lixo.png"
              alt="Circuitos"
            />
            <Typography variant={"h5"}>Objetivo</Typography>
            <Typography variant={"body1"}>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica.
            </Typography>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={"30%"}
            justifyContent={"center"}
          >
            <Image
              sx={{
                width: { md: "30%" },
              }}
              src="Ativos_Recicla_Mack/imagem-lixo.png"
              alt="Circuitos"
            />
            <Typography variant={"h5"}>Objetivo</Typography>
            <Typography variant={"body1"}>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica.
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={"30%"}
            justifyContent={"center"}
          >
            <Image
              sx={{
                width: { md: "30%" },
              }}
              src="Ativos_Recicla_Mack/imagem-lixo.png"
              alt="Circuitos"
            />
            <Typography variant={"h5"}>Objetivo</Typography>
            <Typography variant={"body1"}>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        bgcolor={"#10B14A"}
        color={"black"}
        width={"100%"}
        height={{ md: 600, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mb={5}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Apoio Institucional
          </Typography>
        </Box>
        <Box ml={10} mr={10} display={"flex"} flexDirection={"row"} justifyContent={"space-around"}>
          <Box borderRadius={20}>
            <Box
              borderRadius={2}
              height={"20vh"}
              width={"20vw"}
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              alignItems={"center"}
              bgcolor={"#00844D"}
            >
              <Image
                sx={{
                  width: { md: "auto" },
                }}
                src="Ativos_Recicla_Mack/icone-imagem-duas-peassoas.png"
                alt="Circuitos"
              />
            </Box>
            <Box height={"20vh"} width={"20vw"} bgcolor={"primary.main"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"start"}
              padding={6} borderRadius={2}>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Nomes:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Curso:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Região:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box borderRadius={20}>
            <Box
              borderRadius={2}
              height={"20vh"}
              width={"20vw"}
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              alignItems={"center"}
              bgcolor={"#00844D"}
            >
              <Image
                sx={{
                  width: { md: "auto" },
                }}
                src="Ativos_Recicla_Mack/icone-imagem-duas-peassoas.png"
                alt="Circuitos"
              />
            </Box>
            <Box height={"20vh"} width={"20vw"} bgcolor={"primary.main"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"start"}
              padding={6} borderRadius={2}>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Nomes:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Curso:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Região:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box borderRadius={20}>
            <Box
              borderRadius={2}
              height={"20vh"}
              width={"20vw"}
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              alignItems={"center"}
              bgcolor={"#00844D"}
            >
              <Image
                sx={{
                  width: { md: "auto" },
                }}
                src="Ativos_Recicla_Mack/icone-imagem-duas-peassoas.png"
                alt="Circuitos"
              />
            </Box>
            <Box height={"20vh"} width={"20vw"} bgcolor={"primary.main"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"start"}
              padding={6} borderRadius={2}>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Nomes:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Curso:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Região:{" "}
                <Typography variant={"body1"} component={"span"}>
                  Fulano de tal
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
