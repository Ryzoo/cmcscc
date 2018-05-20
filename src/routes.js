import About from "./pages/About"
import Basic from "./pages/Basic"
import Typography from "./pages/Typography"
import Grid from "./pages/Grid"
import Colors from "./pages/Colors"

const router = [
    { path: '/', component: About },
    { path: '/podstawy', component: Basic },
    { path: '/typografia', component: Typography },
    { path: '/grid', component: Grid },
    { path: '/colors', component: Colors }
];

export default router;