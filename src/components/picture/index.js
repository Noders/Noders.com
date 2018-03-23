import { h, Component } from 'preact';

class Picture extends Component {
  render() {
    const { imageName, alt, folder, ...props } = this.props;
    const folderRoute = folder ? `${folder}/` : '';
    return (
      <picture {...props}>
        <source
          srcset={`../../assets/images/${folderRoute}${imageName}.webp`}
          type="image/webp"
        />
        <source
          srcset={`../../assets/images/${folderRoute}${imageName}.png`}
          type="image/webp"
        />
        <img
          src={`../../assets/images/${folderRoute}${imageName}.png`}
          type="image/webp"
          alt={alt}
        />
      </picture>
    );
  }
}

Picture.propTypes = {};

export default Picture;
