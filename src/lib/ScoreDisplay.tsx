import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { OpenSheetMusicDisplay as OSMD } from "opensheetmusicdisplay";

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const ScoreDisplay = (props: PropsWithChildren<any>, ref: any) => {
  const { drawTitle, autoResize, file, osmd } = props;

  const [, setState] = useState({
    dataReady: false,
    osmd: undefined,
    divRef: useRef(),
  });

  const prevDrawTitle = usePrevious({
    drawTitle,
    autoResize,
  });

  const divRef = useRef();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const setupOsmd = () => {
    const options = {
      autoResize: autoResize !== undefined ? autoResize : true,
      drawTitle: drawTitle !== undefined ? drawTitle : true,
    };
    osmd = new OSMD(ref.current, options);
    osmd.load(file).then(() => osmd.render());
  };

  const resize = () => {
    forceUpdate();
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (drawTitle !== prevDrawTitle) {
      setupOsmd();
    } else {
      osmd.load(file).then(() => osmd.render());
    }
    return () => {
      window.addEventListener("resize", resize);
    };
  }, []);

  // Called after render
  useEffect(() => {
    setupOsmd();
  }, []);

  return <div ref={divRef} />;
};

const forwardedScoreDisplay = React.forwardRef(ScoreDisplay);

export default forwardedScoreDisplay;
