"use client";

import { Box, Typography, Avatar, Stack, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Grid } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export interface Review {
  name: string;
  review: string;
  rating: number;
  link?: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewCard({ name, review, rating, link }: Review) {
  const firstInitial = name.charAt(0).toUpperCase();

  return (
    <Link href={link || "#"} target="_blank" style={{ textDecoration: "none" }}>
      <Box
        sx={{
          backgroundColor: "#1a1a1a",
          color: "white",
          borderRadius: 2,
          p: 2,
          maxWidth: 400,
          cursor: "pointer",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="flex-start" mb={1}>
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems="center"
            textAlign={"center"}
          >
            <Avatar sx={{ bgcolor: "#7e57c2" }}>{firstInitial}</Avatar>
            <Typography variant="h6" fontWeight="bold" fontSize={12}>
              {name}
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Typography variant="body1" fontStyle="italic">
              {review.split(" ").map((word, i) => {
                const highlightWords = ["profissional", "detalhes"];
                const cleanWord = word.toLowerCase().replace(/[^\w]/g, "");

                if (highlightWords.includes(cleanWord)) {
                  return <strong key={i}>{word} </strong>;
                }

                return word + " ";
              })}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {Array.from({ length: rating }).map((_, i) => (
                <StarIcon key={i} sx={{ color: "#fdd835", fontSize: 20 }} />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
}

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <Container sx={{ py: 4, backgroundColor: "#f5e6d3" }} id="avaliacoes">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#8B4513", fontWeight: "bold" }}
      >
        Avaliações dos Pacientes no Google
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        paragraph
        sx={{ color: "#8B4513" }}
      >
        Cuidamos da sua saúde e estética bucal com excelência.
      </Typography>

      <Grid container spacing={2}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
