import { useState } from "react";
import { FaHome, FaSearch, FaWindowMaximize, FaWindowMinimize } from "react-icons/fa";

const SideNav = () => {

    const [collapsed, setCollapsed] = useState(false);

    console.log('render', collapsed);

    return (
        
        <aside className= {`h-full text-slate-50 text-xl  ${collapsed ? 'w-[3.6rem] overflow-hidden' : 'basis-1/4'}`}>
            <div className="flex flex-col gap-2">
                <ul className="flex flex-col gap-2 bg-neutral-900 rounded py-4 px-5">
                    <li className="h-12 flex items-center">
                        <span className="mr-[1.2rem]">
                            <FaHome />
                        </span>
                        Home
                    </li>
                    <li className="h-12 flex items-center">
                        <span className="mr-[1.2rem]">
                            <FaSearch />
                        </span>
                        Search
                    </li>
                </ul>
                <ul className="flex flex-col gap-2 bg-neutral-900 rounded py-3 px-5">
                    <li className="h-12 flex items-center" onClick={() => setCollapsed(!collapsed)}>
                        <span className="mr-[1.2rem]">{collapsed ? <FaWindowMaximize/> : <FaWindowMinimize />}</span>Expand/Collapse Playlist
                    </li>
                    <li className="item5 h-12 flex items-center">Playlist1</li>
                    <li className="item4 h-12 flex items-center">Playlist2</li>
                    <li className="item3 h-12 flex items-center">Playlist3</li>
                    <li className="item2 h-12 flex items-center">Playlist4</li>
                    <li className="item1 h-12 flex items-center">Playlist5</li>
                </ul>
            </div>
        </aside>
    )
};


export default SideNav;