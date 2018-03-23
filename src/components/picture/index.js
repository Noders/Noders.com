import { h, Component } from 'preact';

class Picture extends Component {
  extensions = ['webp', 'jpg', 'png']

  renderSources = () => {
    const { imageName, folder } = this.props;
    const folderRoute = folder ? `${folder}/` : '';
    return Picture.extensions.map(extension => {
      return (
        <source
          srcset={`../../assets/images/${folderRoute}${imageName}.${extension}`}
          type={`image/${extension}`}
        />
      )
    })
  }
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <picture>
          { this.renderSources() }
        </picture>
      </div>
    );
  }
}

Picture.propTypes = {};

export default Picture;
