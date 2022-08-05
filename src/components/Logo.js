import { Stack, Typography } from "@mui/material";

function Logo(){
    return(
        <Stack
            direction="row"
            alignContent="center"
            justifyContent="center"
            spacing={2}
            pt={2}
        >
            <Typography 
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                    fontFamily: "sans-serif"
                }}
            >
                React ToDo App
            </Typography>
        </Stack>
    )
}

export default Logo