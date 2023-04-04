
import { ReactComponent as main } from "../assets/icon/main.svg"
import { ReactComponent as shorts } from "../assets/icon/shorts.svg"
import { ReactComponent as library } from "../assets/icon/kitab.svg"
import { ReactComponent as history } from "../assets/icon/kechmish.svg"
import { ReactComponent as yourvideo } from "../assets/icon/video.svg"
import { ReactComponent as later } from "../assets/icon/sonra.svg"
import { ReactComponent as liked } from "../assets/icon/like.svg"
import { ReactComponent as deploy } from "../assets/icon/abon.svg"
import { ReactComponent as Subs } from "../assets/icon/abon.svg"


const data = [
    {
      id: 1,
      name: 'Home',
      Icon: main,
      child:[],
      
    },
    {
      id: 2,
      name: 'Shorts',
      Icon: shorts,
    },
    {
      id: 3,
      name: 'Subscription',
      Icon: Subs,
    },
    {
      id: 4,
      name: 'Library',
      Icon: library,
      child:[],
    },
    {
      id: 5,
      name: 'History',
      Icon: history,
      child:[]
     
    },
    {
      id: 6,
      name: 'Your videos',
      Icon: yourvideo,
    },
    {
      id: 7,
      name: 'Watch later',
     Icon: later,
    },
    {
      id: 8,
      name: 'Liked',
     Icon: liked
     ,
    },
    {
      id: 9,
      name: 'Deploy',
     Icon: deploy}

    ];
export  {data}