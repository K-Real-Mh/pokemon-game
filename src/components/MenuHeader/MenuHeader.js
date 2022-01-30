import {useState} from "react";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";

function MenuHeader({bgActive = false}) {
    const [open, setOpen] = useState(null);

    const handleToggleMenu = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <>
            <NavBar onClick={handleToggleMenu} active={open} bgActive={bgActive}/>
            <Menu active={open} onClick={handleToggleMenu}/>
        </>
    );
}

export default MenuHeader;