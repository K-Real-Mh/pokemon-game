import {useState} from "react";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";

function MenuHeader() {
    const [open, setOpen] = useState(null);

    const handleToggleMenu = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <>
            <NavBar onClick={handleToggleMenu} active={open}/>
            <Menu active={open}/>
        </>
    );
}

export default MenuHeader;