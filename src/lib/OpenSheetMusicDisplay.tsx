import React, {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
  PropsWithChildren,
  memo,
} from "react";
import { OpenSheetMusicDisplay as OSMD } from "opensheetmusicdisplay";

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const OpenSheetMusicDisplay = (props: PropsWithChildren<any>) => {
  const { drawTitle, autoResize } = props;

  const prevDrawTitle = usePrevious({
    drawTitle,
    autoResize,
  });
  const divRef = useRef();

  const [, setState] = useState({
    dataReady: false,
    osmd: undefined,
    divRef: useRef(),
  });

  let osmd = OpenSheetMusicDisplay;

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const setupOsmd = () => {
    const options = {
      autoResize: autoResize !== undefined ? autoResize : true,
      drawTitle: drawTitle !== undefined ? drawTitle : true,
    };
    osmd = new OSMD(divRef.current, options);
    osmd.load(file).then(() => osmd.render());
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", forceUpdate);
    return () => window.removeEventListener("resize", forceUpdate);
  }, []);

  useEffect(() => {
    if (drawTitle !== prevDrawTitle) {
      setupOsmd();
    } else {
      osmd.load(file).then(() => osmd.render());
    }
    return () => {
      window.addEventListener("resize", forceUpdate);
    };
  }, []);

  // Called after render
  useEffect(() => {
    setupOsmd();
  }, []);

  return <div ref={divRef} />;
};

export default OpenSheetMusicDisplay;
