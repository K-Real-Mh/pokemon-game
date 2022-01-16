import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import {useRouteMatch} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import cn from "classnames";
import Footer from "./components/Footer/Footer";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import {AboutPage, ContactPage, GamePage, HomePage, NotFound} from "./routes";
import s from "./App.module.css";

function App() {
    const match = useRouteMatch('/');

    return (
        <Switch>
            <Route path="/404" component={NotFound}/>
            <Route>
                <MenuHeader bgActive={!match.isExact}/>
                <div className={cn(s.wrap, {
                    [s.isHomePage]: match.isExact
                })}>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/game" exact component={GamePage}/>
                        <Route path="/contact" exact component={ContactPage}/>
                        <Route path="/about" exact component={AboutPage}/>
                        <Route render={() => (
                            <Redirect to="/404"/>
                        )}/>
                    </Switch>
                </div>
                <Footer/>
            </Route>
        </Switch>
    );
}

export default App;