import { RouteComponentProps } from "react-router-dom";
import { ReactNode } from "react";

export interface IPageBundle<P = {}> {
  path: string | Array<string>;
  render: (props: RouteComponentProps<{}, any, any>) => ReactNode;
}
