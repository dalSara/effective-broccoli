import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import replaceQueryParameters from '@creuna/utils/replace-query-parameters';

import Image from '../image';

class ResponsiveImage extends React.Component {
  static propTypes = {
    alt: PropTypes.string,
    initialQueryParameters: PropTypes.shape({
      transform: PropTypes.string,
      width: PropTypes.number
    }),
    resolution: PropTypes.number,
    src: PropTypes.string.isRequired
  };

  static defaultProps = {
    initialQueryParameters: {
      transform: 'DownFit',
      width: 3
    },
    resolution: 100
  };

  state = {
    src: replaceQueryParameters(
      this.props.src,
      this.props.initialQueryParameters
    ),
    width: this.props.initialQueryParameters.width
  };

  handleResize = () => {
    if (!this.container) {
      return;
    }

    const newWidth =
      Math.ceil(
        (this.container.offsetWidth * (window.devicePixelRatio || 1)) /
          this.props.resolution
      ) * this.props.resolution;

    this.setState(previousState => {
      if (previousState.width >= newWidth) {
        return {};
      }

      const newSrc = replaceQueryParameters(
        this.props.src,
        Object.assign({}, this.props.initialQueryParameters, {
          width: newWidth
        })
      );

      return {
        src: newSrc,
        width: newWidth
      };
    });
  };

  debouncedHandleResize = debounce(this.handleResize, 300);

  componentDidMount() {
    this.debouncedHandleResize();
    window.addEventListener('resize', this.debouncedHandleResize);
    this.setState({ componentDidMount: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleResize);
  }

  render() {
    return (
      <div
        className="responsive-image"
        data-original-src={this.props.src}
        ref={d => (this.container = d)}
      >
        {this.state.componentDidMount && (
          <Image alt={this.props.alt} src={this.state.src} />
        )}
      </div>
    );
  }
}

export default ResponsiveImage;
