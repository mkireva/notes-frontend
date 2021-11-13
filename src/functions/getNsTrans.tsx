import {DefaultNamespace, Namespace, TFuncKey, Trans, TransProps} from "react-i18next";

export const getNSTrans = (ns: string) =>
        ({children, ...props}: Omit<TransProps<any,DefaultNamespace,HTMLDivElement>, 'ns'>) =>
            (
                <Trans ns={ns} {...props}>
                    {children}
                </Trans>
            );
