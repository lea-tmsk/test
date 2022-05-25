import './App.css';
import { BackgroundCirclesSvg } from './BackgroundCirclesSvg/BackgroundCirclesSvg';
import { ChatBlock } from './ChatBlock/ChatBlock';
import { GraphicBlock } from './GraphicBlock/GraphicBlock';
import { Header } from './Header/Header';
import { ListeningBlock } from './ListeningBlock/ListeningBlock';
import { PlayButtonSvg } from './PlayButtonSvg/PlayButtonSvg';
import { StatisticsBlock } from './StatisticsBlock/StatisticsBlock';

function App() {
return (
    <div className="App">
        <header>
            <Header />
        </header>
        <div className='Body'>
            <div className='USP'>
                <div className='Arch'></div>
                <div className='MainText'>
                    Языковая платформа для вузов и школ
                </div>
                <div className='Paragraph'>
                    Онлайн-платформа, соединяющая свободу инновационного творчества частной языковой школы с потребностями и традициями вуза.
                </div>
                <button className='CTA'>
                    <div className='BtnText'>Смотреть демо</div>
                    <div className='PlayBtn'>
                        <PlayButtonSvg color='#00E5CC'/>
                    </div>
                </button>
            </div>
            <div className='Blocks'>
                <GraphicBlock />
                <div className='Listening'>
                    <ListeningBlock />
                </div>
                <div className='Statistics'>
                    <StatisticsBlock />
                </div>
                <div className='Chat'>
                    <ChatBlock />
                </div>
            </div>
        </div>
    </div>
);
}

export default App;
