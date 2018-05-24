import About from "./pages/About"
import Cards from "./pages/Cards"
import Forms from "./pages/Forms"
import Navigations from "./pages/Navigations"
import Typography from "./pages/Typography"
import Grid from "./pages/Grid"
import Buttons from "./pages/Buttons"
import Icons from "./pages/Icons"
import Colors from "./pages/Colors"
import Additional from "./pages/Additional"
import Modals from "./pages/Modals"

const router = [
    { path: '/', component: About },
    { path: '/karty', component: Cards },
    { path: '/formularze', component: Forms },
    { path: '/nawigacje', component: Navigations },
    { path: '/typografia', component: Typography },
    { path: '/siatka', component: Grid },
    { path: '/kolory', component: Colors },
    { path: '/ikony', component: Icons },
    { path: '/przyciski', component: Buttons },
    { path: '/modal', component: Modals },
    { path: '/dodatki', component: Additional }
];

export default router;