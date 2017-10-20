function componentFactory(ReactBackend, Component, defaultProps = {}) {
  return (customProps = {}) => {
    const props = { ...defaultProps, ...customProps };
    const { children } = props;
    return ReactBackend.createElement(Component, props, children);
  };
}

export default componentFactory;
