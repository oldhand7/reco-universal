/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <h1>NavLink</h1>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    //in our link we spread all the other properties we are passing from our component, and the path for each specific link. If there are children, then display the children, else the label we are passing in to the anchor tag. So if theres a logo, display the logo. Else display text.
    <A {...rest} href={path}>
      {children || label}
    </A>
  );
}
