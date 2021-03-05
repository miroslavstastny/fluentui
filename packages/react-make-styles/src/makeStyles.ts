import { makeStyles as vanillaMakeStyles, MakeStylesDefinition, MakeStylesOptions } from '@fluentui/make-styles';
import { useFluent } from '@fluentui/react-provider';
import { useTheme } from '@fluentui/react-theme-provider';
import { Theme } from '@fluentui/react-theme';

import { useRenderer } from './useRenderer';

export function makeStyles<Selectors>(definitions: MakeStylesDefinition<Selectors, Theme>[], debugId?: string) {
  // DEBUG // console.log('react:makeStyles', debugId ?? 'unknown');
  const getStyles = vanillaMakeStyles(definitions);

  if (process.env.NODE_ENV === 'test') {
    return () => '';
  }

  return function useClasses(selectors: Selectors) {
    const { dir, document, telemetry } = useFluent();
    const theme = useTheme();

    // DEBUG // console.log(`react:useStyles[${debugId ?? 'unknown'}]`, telemetry ?? 'no telemetry');

    const debug: MakeStylesOptions<Theme>['debug'] = {
      debugId: debugId ?? 'unknown',
      tokens: {},
    };

    const renderer = useRenderer(document);
    const options: MakeStylesOptions<Theme> = {
      tokens: theme as Theme,
      renderer,
      rtl: dir === 'rtl',
      ...(telemetry && {
        debug,
      }),
    };

    const ret = getStyles(selectors, options);

    if (telemetry?.tokens && debug?.tokens) {
      Object.keys(debug.tokens).forEach(token => {
        telemetry.tokens[token] = (telemetry.tokens[token] ?? false) || debug.tokens![token];
      });
    }

    return ret;
  };
}
