import * as React from 'react';
import './Loading.css';

interface Props {
  styleOverrides?: React.CSSProperties;
}

export const Loading: React.SFC<Props> = ({styleOverrides}) => (
  <div style={{...styleOverrides}} className="cssload-loader">
    <div className="cssload-inner cssload-one" />
    <div className="cssload-inner cssload-two" />
    <div className="cssload-inner cssload-three" />
  </div>
);
