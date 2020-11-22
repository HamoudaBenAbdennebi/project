import React from 'react'
import { Router, Route, Switch } from "react-router";
import OnlinePage from './OnlinePage';
import Bots from './rooms/Bots';
import General from './rooms/General'
import Memes from './rooms/Memes';
import Vip from './rooms/Vip';
import RoomsPage from './RoomsPage';
import ServersSelection from './ServersSelection';
import Settings from './Settings';
const Main = () => {
    return (
        <div>
             <Route path="/general" component={General} />
             <Route path="/memes" component={Memes} />
             <Route path="/bots" component={Bots} />
             <Route path="/vip-room" component={Vip} />
             <Route path="/settings" component={Settings} />
             <Route path="/servers" component={ServersSelection} />
             <Route path="/servs" component={RoomsPage}/>
             <Route path="/online-members" component={OnlinePage} />
        </div>
    )
}

export default Main
