import { HelpCard } from "./HelpCard";
import first from './images/1.pngg.png';
import second from './images/2.pngg.png';
import third from './images/3.pngg.png';
import forth from './images/4.pngg.png';
import fives from './images/5.pngg.png';
import six from './images/6.pngg.png';
import seven from './images/7.pngg.png';
import eight from './images/8.pngg.png';
import nine from './images/9.pngg.png';
import css from './HelpCard/HelpCard.module.css'

function App() {
  return (
          <div className={css.App}>
            <div className={css.container}>
            < HelpCard width="200px" bg='#5df062' title="7:25" img={first} time="Boston" />
         < HelpCard bg='#5df062' title="8:15" img={second} time="Madrid" />
         < HelpCard bg='#5df062' title="Translate"img={third} time="Spanish"/>
         < HelpCard bg='#f5f76a' title="Bike" img={forth} time="13.1 miles"/>
         < HelpCard bg='#f5f76a' title="Boat" img={fives} time="90 Minutes"/>
         < HelpCard bg='#f5f76a' title="Drive" img={six} time="48 Miles"/>
         < HelpCard bg='#6684f2' title="Morning" img={seven} time="Coffee"/>
         < HelpCard bg='#6684f2' title="Arternoon" img={eight} time="Gym"/>
         < HelpCard bg='#6684f2' title="Night" img={nine} time="Hot Tub"/>
            </div>
        
          </div>
  );
}

export default App;
