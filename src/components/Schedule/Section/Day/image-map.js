import AnjanaVakilImg from '../../../../assets/images/Speakers/speaker-anjana.jpg'
import RyanFlorenceImg from '../../../../assets/images/Speakers/speaker-ryan.jpg'
import JanaBeckImg from '../../../../assets/images/Speakers/speaker-jana.jpg'
import CassidyWilliamsImg from '../../../../assets/images/Speakers/speaker-cassidy.jpg'
import WesBosImg from '../../../../assets/images/Speakers/speaker-wes.jpg'
import KentCDoddsImg from '../../../../assets/images/Speakers/speaker-kent.jpg'
import TejasKumarImg from '../../../../assets/images/Speakers/speaker-tejas.jpg'
import AlexKrolickImg from '../../../../assets/images/Speakers/speaker-alex.jpg'
import JJKasperImg from '../../../../assets/images/Speakers/speaker-jj.jpg'
import SwizecTellerImg from '../../../../assets/images/Speakers/speaker-swizec.jpg'
import LaurenTanImg from '../../../../assets/images/Speakers/speaker-lauren.jpg'
import BrianLerouxImg from '../../../../assets/images/Speakers/speaker-brian.jpg'
import BenAwadImg from '../../../../assets/images/Speakers/speaker-ben.jpg'
import RyanBurgessImg from '../../../../assets/images/Speakers/speaker-ryan-burgess.jpg'
import TanmaiGopalImg from '../../../../assets/images/Speakers/speaker-tanmai.jpg'
import EveProcelloImg from '../../../../assets/images/Speakers/speaker-eve.jpg'
import LeeByronImg from '../../../../assets/images/Speakers/speaker-lee.jpg'
import ChrisOnCodeImg from '../../../../assets/images/Speakers/speaker-chris.jpg'
import NaomiMeyerImg from '../../../../assets/images/Speakers/speaker-naomi.jpg'
import DariaCarawayImg from '../../../../assets/images/Speakers/speaker-daria.jpg'
import DavidKhourshidImg from '../../../../assets/images/Speakers/speaker-david.jpg'
import EvanBaconImg from '../../../../assets/images/Speakers/speaker-evan.jpg'
import BeccaBaileyImg from '../../../../assets/images/Speakers/speaker-becca.jpg'
import LydiaHallieImg from '../../../../assets/images/Speakers/speaker-lydia.jpg'
import ScottTolinskiImg from '../../../../assets/images/Speakers/speaker-scott.jpg'
import BryanManueleImg from '../../../../assets/images/Speakers/speaker-bryan.jpg'
import ChrisNwambaImg from '../../../../assets/images/Speakers/speaker-chris-nwamba.jpg'
import SpeakerTBD from '../../../../assets/images/Speakers/speaker-tbd.jpg'
import SyntaxImg from '../../../../assets/images/Speakers/speaker-syntax.jpg'
import SwyxImg from '../../../../assets/images/Speakers/speaker-swyx.jpg'
import LeerobImg from '../../../../assets/images/Speakers/speaker-leerob.jpg'
import RobSutterImg from '../../../../assets/images/Speakers/speaker-rob.jpg'
import ShrutiKapoorImg from '../../../../assets/images/Speakers/speaker-shruti.jpg'
import JennCreightonImg from '../../../../assets/images/Speakers/speaker-jenn.jpg'
// import TbdImg from '../../../../assets/images/Speakers/speaker-tbd.jpg'
import GantJamonImg from '../../../../assets/images/Speakers/speaker-gantjamon.jpg'
import MichaelChanImg from '../../../../assets/images/Speakers/speaker-michael.jpg'
import SimonaCotinImg from '../../../../assets/images/Speakers/speaker-simona.jpg'
import ServerlessPanelImg from '../../../../assets/images/Speakers/speaker-serverless-panel.jpg'
import FarrahCampbellImg from '../../../../assets/images/Speakers/speaker-farrah.jpg'
import ErikRasmussenImg from '../../../../assets/images/Speakers/speaker-erik.jpg'
import KristiPerreaultImg from '../../../../assets/images/Speakers/speaker-kristi.jpg'
import JeremyDalyImg from '../../../../assets/images/Speakers/speaker-jeremy.jpg'
import RishiDivateImg from '../../../../assets/images/Speakers/speaker-rishi.jpg'
import RuneBottenImg from '../../../../assets/images/Speakers/speaker-rune.jpg'
import TheoBrowneImg from '../../../../assets/images/Speakers/speaker-theo.jpg'
import ColinSidotiImg from '../../../../assets/images/Speakers/speaker-colin.jpg'
import ShaundaiPersonImg from '../../../../assets/images/Speakers/speaker-shaundai.jpg'
import JeffEscalanteImg from '../../../../assets/images/Speakers/speaker-jeff.jpg'
import FredSchottImg from '../../../../assets/images/Speakers/speaker-fred.jpg'

const SpeakerImageMap = {
  'anjana-vakil': AnjanaVakilImg,
  'erik-rasmussen': ErikRasmussenImg,
  'kristi-perreault': KristiPerreaultImg,
  'gant-laborde-and-jamon-holmgren': GantJamonImg,
  'matt-biilmann,-brian-leroux,-and-jeremy-daly': ServerlessPanelImg,
  'farrah-campbell': FarrahCampbellImg,
  'simona-cotin': SimonaCotinImg,
  'michael-chan': MichaelChanImg,
  // 'speaker-tbd': TbdImg,
  'jenn-creighton': JennCreightonImg,
  'shruti-kapoor': ShrutiKapoorImg,
  'rob-sutter': RobSutterImg,
  'ryan-florence': RyanFlorenceImg,
  'jana-beck': JanaBeckImg,
  'cassidy-williams': CassidyWilliamsImg,
  'wes-bos': WesBosImg,
  'kent-c.-dodds': KentCDoddsImg,
  'tejas-kumar': TejasKumarImg,
  'alex-krolick': AlexKrolickImg,
  'jj-kasper': JJKasperImg,
  'swizec-teller': SwizecTellerImg,
  'lauren-tan': LaurenTanImg,
  'brian-leroux': BrianLerouxImg,
  'ben-awad': BenAwadImg,
  'ryan-burgess': RyanBurgessImg,
  'tanmai-gopal': TanmaiGopalImg,
  'eve-porcello': EveProcelloImg,
  'lee-byron': LeeByronImg,
  'chris-on-code': ChrisOnCodeImg,
  'naomi-meyer': NaomiMeyerImg,
  'daria-caraway': DariaCarawayImg,
  'david-khourshid': DavidKhourshidImg,
  'evan-bacon': EvanBaconImg,
  'becca-bailey': BeccaBaileyImg,
  'lydia-hallie': LydiaHallieImg,
  'scott-tolinski': ScottTolinskiImg,
  'bryan-manuele': BryanManueleImg,
  'christian-nwamba': ChrisNwambaImg,
  'speaker-tbd': SpeakerTBD,
  'wes-bos-and-scott-tolinski': SyntaxImg,
  'shawn-swyx-wang': SwyxImg,
  'lee-robinson': LeerobImg,
  'jeremy-daly': JeremyDalyImg,
  'rishi-divate': RishiDivateImg,
  'rune-botten': RuneBottenImg,
  'theo-browne': TheoBrowneImg,
  'colin-sidoti': ColinSidotiImg,
  'shaundai-person': ShaundaiPersonImg,
  'jeff-escalante': JeffEscalanteImg,
  'fred-schott': FredSchottImg,
}

export default SpeakerImageMap
