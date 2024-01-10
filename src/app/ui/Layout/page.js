import { AppBar, CssBaseline, GlobalStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//components
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';

export default function Layout({ children }) {
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    )
}
