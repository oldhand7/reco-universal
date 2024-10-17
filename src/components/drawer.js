import React, { Fragment } from 'react';
import { Box } from 'theme-ui';
import RcDrawer from 'rc-drawer';

export default function Drawer ({ 
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer 
        open={open}
        onClose={toggleHandler}
        //if theres an additional className, show that className, else show an empty string. We trim it so there are no issues when we call the className
        className={`drawer ${className || ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={'0.4s'}
        {...props}
      >
      {closeButton && (
        <Box as='div' onClick={toggleHandler} sx={closeBtnStyle} >
          {closeButton}
        </Box>
      )}
      {/* So whatever we pass into this drawer component, we will display/render it as children */}
      <Box sx={drawerStyle}>{children}</Box>  
      </RcDrawer>
      <Box className="drawer__handler" style={{display: 'inline-block'}} onClick={toggleHandler}>
        {drawerHandler}
      </Box>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};