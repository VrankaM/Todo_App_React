import { Stack, Typography } from "@mui/material";

function Footer(){
    return(
        <footer>
            <Stack
                direction="row"
                justifyContent="center"
                py={4}
            >
                <Typography
                    variant="h5"
                    component="p"    
                >
                    That's all for now :)
                </Typography>
            </Stack>
        </footer>
    )
}

export default Footer