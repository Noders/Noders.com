import { h, Component } from 'preact';
class Picture extends Component {
  state = { load: false };

  componentDidMount() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.setState({ load: true });
          observer.unobserve(entry.target);
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
      <div className={className} ref={c => (this.ref = c)}>
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
