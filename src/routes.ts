import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import NotesPage from "./pages/NotesPage";
import SignUpPage from "./pages/SignUpPage";

type A = {
    path: string;
    Component: React.ReactElement
}

export const publicRoutes = [
    { path: "/", Component: HomePage },
    { path: "/signup", Component: SignUpPage },
    { path: "/login", Component: LogInPage },
];

export const privateRoutes = [{ path: "/notes", Component: NotesPage }];
