import test from 'ava';
import componentFactory from './';

const ReactBackend = {
  createElement: (Component, props, children) => ({
    Component,
    props,
    children,
  }),
};

test('should return a function', t => {
  const getComponent = componentFactory(ReactBackend, '');
  const actual = typeof getComponent;
  const expected = 'function';
  t.is(actual, expected);
});

test('returned function should return Component', t => {
  const getComponent = componentFactory(ReactBackend, 'Component');
  const actual = getComponent().Component;
  const expected = 'Component';
  t.is(actual, expected);
});

test('returned function should return merged props', t => {
  const getComponent = componentFactory(ReactBackend, '', {
    defaultProps: true,
  });
  const actual = getComponent({ customProps: true }).props;
  const expected = { defaultProps: true, customProps: true };
  t.deepEqual(actual, expected);
});

test('returned function should return children', t => {
  const getComponent = componentFactory(ReactBackend, '', { children: 'Bob' });
  const actual = getComponent().children;
  const expected = 'Bob';
  t.is(actual, expected);
});
