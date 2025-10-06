import logo from "../../assets/IceCreamLogo.png";
import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Box, Button, IconButton, Typography } from "@mui/material";

export default function NavBar() {
    const pages = [
        { name: "Projects", path: "/projects" },
    ];

    return (
        <>
            <AppBar position="static" color="transparent" sx={{ backgroundColor: "#4f86f7", width: "100vw" }}>
                <Container maxWidth={false} disableGutters>
                    <Toolbar>
                        <IconButton component={Link} to="/" disableRipple>
                            <img src={logo} alt="Preplit Logo" className="logo-image" />
                        </IconButton>
                        <Typography
                            variant="h4"
                            component={Link}
                            to="/"
                            className="logo-text"
                        >
                            <strong>Preplit</strong>
                        </Typography>
                        <Box sx={{ flexGrow: 1, marginLeft: "1.5rem" }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    disableRipple
                                    sx={{ color: "white" }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}