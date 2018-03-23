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
    const { load } = this.state;
    const { imageName, folder, alt, className } = this.props;
    const [image, extension] = imageName.split('.');
    const folderRoute = folder ? `${folder}/` : '';
    console.log(image, extension)
    return (
      <div className={className} ref={c => (this.ref = c)}>
        <picture>
          {load && (
            <source
              srcset={`../../assets/images/${folderRoute}${image}.webp`}
              type="image/webp"
              alt={alt}
            />
          )}
          {load && (
            <source
              srcset={`../../assets/images/${folderRoute}${image}.${extension}`}
              type={`image/${extension}`}
              alt={alt}
            />
          )}
          {load && (
            <img
              src={`../../assets/images/${folderRoute}${image}.${extension}`}
              alt={alt}
            />
          )}
        </picture>
      </div>
    );
  }
}

Picture.propTypes = {};

export default Picture;
