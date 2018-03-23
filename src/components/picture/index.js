import { h, Component } from 'preact';

class Picture extends Component {
  render() {
    const { imageName, folder, className } = this.props;
    const [image, extension] = imageName.split('.');
    const folderRoute = folder ? `${folder}/` : '';
    console.log(image, extension)
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
