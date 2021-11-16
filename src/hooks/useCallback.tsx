import { useEffect, useState } from "react";

interface IUseCallbackState<T> {
  response?: T;
  error?: any;
  isLoading: boolean;
}

const getDefaultValue = <T,>(): IUseCallbackState<T> => ({
  isLoading: true,
});
export const useCallback = <T,>(
  callback: Function,
  dependencies: Array<any> = []
) => {
  const [state, setState] = useState<IUseCallbackState<T>>(
    getDefaultValue<T>()
  );

  useEffect(() => {
    (async () => {
      try {
        setState({
          response: await callback(),
          isLoading: false,
        });
      } catch (err) {
        setState({
          error: err,
          isLoading: false,
        });
      }
    })();
  }, dependencies);
  return state;
};
