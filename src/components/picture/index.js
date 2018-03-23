import { h, Component } from 'preact';
// const myImg = document.querySelector('.animate-me');

// observer = new IntersectionObserver((entry, observer) => {
//   console.log('entry:', entry);
//   console.log('observer:', observer);
// });

// observer.observe(myImg);

class Picture extends Component {
  state = { load: false };

  componentDidMount() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          console.log('in the view');
          this.setState({ load: true });
          observer.unobserve(entry.target);
        } else {
          console.log('out of view');
        }
      });
    });
    this.observer.observe(this.ref);
  }

  render() {
    const { imageName, folder, className } = this.props;
    const [image, extension] = imageName.split('.');
    const folderRoute = folder ? `${folder}/` : '';
    return (
      <div className={className}>
        <picture>
          <source
            srcset={`../../assets/images/${folderRoute}${image}.webp`}
            type="image/webp"
          />
          <source
            srcset={`../../assets/images/${folderRoute}${image}.${extension}`}
            type={`image/${extension}`}
          />
          <img
            src={`../../assets/images/${folderRoute}${image}.${extension}`}
          />
        </picture>
      </div>
    );
  }
}

Picture.propTypes = {};

export default Picture;
