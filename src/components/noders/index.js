import { h, Component } from 'preact';
import style from './style';
import Member from './member';
import { classJoin } from '../../helpers';

export default class Noders extends Component {
  static triggers = ['scroll', 'resize', 'load'];
  static scrollOffset = 150;

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      scrollOffset: 150,
      noders: [],
      hexagons: []
    };
  }

  shuffleArray = oldArray => {
    const array = [...oldArray];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  componentWillMount() {
    import('./data.json').then(data =>
      this.setState({
        noders: this.shuffleArray(data.users)
      })
    );
  }

  componentWillUnmount() {
    this.stopListening();
  }

  componentDidMount() {
    this.startListening();
  }

  startListening = () => {
    if (this.state.ready) {
      return;
    }
    Noders.triggers.forEach(event => {
      window.addEventListener(event, this.checkComponent, { passive: true });
    });
    this.checkComponent();
  };

  stopListening = () => {
    Noders.triggers.forEach(event => {
      window.removeEventListener(event, this.checkComponent);
    });
  };

  checkComponent = () => {
    const { scrollOffset } = Noders;
    if (!this.containerRef) {
      return null;
    }
    const windowHeight = window.outerHeight;
    const { bottom } = this.containerRef.getBoundingClientRect();
    if (bottom - scrollOffset < windowHeight) {
      this.setState({
        ready: true
      });
    }
    this.recalculateHexagons();
  };

  recalculateHexagons = () => {
    if (!this.hexagonsRef) {
      return;
    }
    const hexagonWidth = this.getHexagonsWidth();
    const { width } = this.hexagonsRef.getBoundingClientRect();
    let evenRow = Math.floor(width / hexagonWidth) - 1;

    if (width < 833 && width > 613) {
      evenRow = evenRow - 1;
    }
    const oddRow = evenRow - 1;

    this.setState(
      {
        hexagonWidth,
        width,
        evenRow,
        oddRow
      },
      this.renderHexagons
    );
  };

  getHexagonsWidth = () => {
    if (!this.hexagonsRef) {
      return;
    }
    const { width } = this.hexagonsRef.getBoundingClientRect();
    if (width > 768) {
      return 100;
    }
    if (width > 425) {
      return 80;
    }
    return 60;
  };
  renderHexagons = () => {
    const hexagons = [];
    const { evenRow, oddRow, noders } = this.state;
    let isEvenRow = false;
    let currentNode = [];
    if (!evenRow || !oddRow) {
      return;
    }
    noders.forEach((member, index) => {
      const currentRowWidth = isEvenRow ? evenRow : oddRow;
      if (currentNode.length === currentRowWidth) {
        isEvenRow = !isEvenRow;
        hexagons.push(
          <div className={style.nodersRow}>{[...currentNode]}</div>
        );
        currentNode = [];
      }

      currentNode.push(
        <Member
          username={member.username}
          image={member.image}
          id={`${index}-${hexagons.length}`}
        />
      );
    });

    // Si hay exagonos que no se han agregado al array, agregarlos
    if (currentNode.length) {
      const isPreviousRowEven =
        hexagons[hexagons.length - 1].children.length % 2 === 0;
      const isLastRowEven = currentNode.length % 2 === 0;
      const shouldAddFakeHexagon = isPreviousRowEven && isLastRowEven;
      // Si la ultima fila es par (o impar) y la anterior tambien es par (o impar), agregar un padding para 'finjir' otro elemento, y que el css se encargue de hacer caer loshexagonos correctamente
      const lastRowClasses = classJoin(
        style.nodersRow,
        shouldAddFakeHexagon && style.addFakeHexagon
      );
      hexagons.push(<div className={lastRowClasses}>{[...currentNode]}</div>);
    }
    this.setState({ hexagons });
  };

  render() {
    const { ready } = this.state;
    return (
      <section
        ref={c => {
          this.containerRef = c;
        }}
        className={'section'}
      >
        <div className="container">
          <a name="comunidad" />
          <div className="section-title">
            <h1 className="title" id="comunidad">
              Comunidad
            </h1>
            <hr />
          </div>
          {ready && (
            <div
              class={classJoin('level', style.flexContainer)}
              ref={c => (this.hexagonsRef = c)}
            >
              {this.state.hexagons}
            </div>
          )}
        </div>
      </section>
    );
  }
}
