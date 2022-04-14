import { Container, Typography, Grid, Avatar, Box } from "@mui/material";

function App() {
  return (
    <Container sx={{ bgcolor: "#cfe8fc", minHeight: "100vh" }} maxWidth="md">
      <Box sx={{ padding: "3em 0" }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography align="center" variant="h2" component="h1">
              Jeremy Richardson
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} align="center">
            <Avatar
              alt="Jeremy Richardson"
              src="/img/jeremy-profile@2x.png"
              sx={{ width: "200px", height: "200px", background: "white" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Typography align="center" variant="h4" component="h2">
        I'm a web developer from Iowa
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        rhoncus nulla sed orci laoreet pharetra. Suspendisse vitae eros
        tristique, tincidunt nisl eget, viverra justo. Aliquam vitae velit
        facilisis, dapibus est vitae, consequat tellus. Curabitur id luctus
        magna. Aenean tempus nec massa id porta. Donec pretium vitae leo a
        malesuada. Proin vel egestas mauris, interdum pretium eros. Suspendisse
        faucibus laoreet lectus, eget scelerisque dolor tempor ut. Praesent
        varius metus tellus, quis scelerisque nisl eleifend sit amet. Integer id
        rhoncus metus. Aliquam a ipsum quis dui consectetur luctus. Ut sit amet
        lobortis sem. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Nunc condimentum dui at augue
        consectetur, eu vehicula risus commodo. Suspendisse erat diam, sagittis
        eget convallis quis, iaculis et tellus. Morbi pellentesque massa ut
        laoreet aliquam.
      </Typography>
    </Container>
  );
}

export default App;
