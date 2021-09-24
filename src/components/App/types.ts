export interface ProviderProp {
  children: JSX.Element;
}

export interface ThemeType {
  breakpoints: {
    up(breakpoint: string): string;
    down(breakpoint: string): string;
  };
  mixins: {
    toolbar: { [key: string]: string };
  };
  spacing(em1: number, em2?: number, em3?: number): number;
  palette: {
    divider: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      paper: string;
    };
    error: {
      main: string;
    };
  };
  shadows: any;
}

export interface classesProps extends React.CSSProperties {
  [x: string]: any;
}