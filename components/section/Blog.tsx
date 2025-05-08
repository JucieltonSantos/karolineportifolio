// react
import * as React from "react";
// next
import { useRouter } from "next/router";
// @mui
import { Box, Grid, Grow, Typography } from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
// custom context
import ConstantsContext from "context/constantsContext";
import ProjectCard from "components/common/ProjectCard";
// type
interface BlogProps {}

const Blog: React.FunctionComponent<BlogProps> = (props) => {
  const { blogPosts } = React.useContext(ConstantsContext);
  const [projectsToRender, setProjectsToRender] = React.useState(blogPosts);
  const router = useRouter();

  return (
    <>
      <Typography
        component="h2"
        variant="h3"
        textAlign="center"
        marginTop="150px"
      >
        Posts
      </Typography>
      <Box
        color="text.secondary"
        sx={{ textAlign: "center", marginTop: "1rem" }}
      ></Box>
      <ContainerGrid
        justifyContent={
          projectsToRender?.length === 1 ? "center" : "flex-start"
        }
        sx={{
          padding: {
            xs: "0 1rem",
            sm: "0 2rem",
          },
        }}
      >
        {projectsToRender
          ? projectsToRender.map((blogPosts, index) => (
              <Grow
                in={true}
                key={blogPosts.title + index}
                timeout={(index + 1) * 500}
              >
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <ProjectCard
                    imageAlt={blogPosts.image.alt}
                    imageSrc={blogPosts.image.src}
                    title={blogPosts.title}
                    likes={blogPosts.image.likes}
                    onClick={() => {
                      {
                        router.push(`/posts/${blogPosts.id}`);
                        console.log(blogPosts.id);
                      }
                    }}
                    sx={{
                      maxWidth: "21rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Grid>
              </Grow>
            ))
          : "no project"}
      </ContainerGrid>
    </>
  );
};

export default Blog;
