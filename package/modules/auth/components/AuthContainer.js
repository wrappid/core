import React, {useContext} from 'react';

import CoreBox from '../../../components/layouts/CoreBox';
import CoreSection from '../../../components/layouts/CoreSection';
import CoreClasses from '../../../styles/CoreClasses';

import {nativeUseNavigate} from '@wrappid/styled-components';
import {useSelector} from 'react-redux';
import CoreComponent from '../../../components/CoreComponent';
import CoreImageBackground from '../../../components/layouts/CoreImageBackground'
import {CoreResourceContext, ThemeContext} from '../../../config/contextHandler';
import CoreImage from '../../../components/dataDisplay/CoreImage';
import {mergedResourceRegistry} from '../../../layout/PageContainer';
import CoreThemeProvider from '../../../theme/CoreThemeProvider';
import { AUTH_THEME } from './authTheme';

export const AuthContainer = props => {
  const navigate = nativeUseNavigate();
  const auth = useSelector(state => state.auth);
  const requestUrl = useSelector(state => state?.manageAssistant?.requestUrl);
  const resourceContext = useContext(CoreResourceContext);
  const logo = resourceContext?.logo;

  React.useEffect(() => {
    console.log('Logo: ', logo);
    if (auth.uid) {
      if (requestUrl) {
        navigate(requestUrl.requestUrl);
      } else if (
        auth.sessionExpired &&
        auth.sessionDetail &&
        auth.accessToken &&
        auth.refreshToken
      ) {
        let path = auth.sessionDetail?.location?.pathname;

        navigate('/', {state: {recalledPath: path}});
      } else {
        navigate('/');
      }
    }
  });
  return (
    <ThemeContext.Provider value={AUTH_THEME}>
      <CoreThemeProvider>
        <CoreImageBackground
          source={mergedResourceRegistry?.authBackground}
          resizeMode="cover">
          <CoreBox styleClasses={[CoreClasses?.AUTH?.WRAPPER]}>
              <CoreSection
                elevated={false}
                styleClasses={[
                  CoreClasses?.UTILS?.FIT_CONTENT_WIDTH,
                  CoreClasses?.UTILS?.FIT_CONTENT_HEIGHT,
                  CoreClasses?.AUTH?.CARD_MIN_WIDTH,
                  CoreClasses?.AUTH?.CARD_MAX_WIDTH,
                  CoreClasses?.AUTH?.CARD
                ]}>
                <CoreBox
                  styleClasses={[
                    CoreClasses?.LAYOUT?.FULL_WIDTH,
                    CoreClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER,
                    CoreClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
                    CoreClasses?.MARGIN?.MB5,
                  ]}>
                  {/* <CoreComponent componentName="AppLogo" /> */}
                  {mergedResourceRegistry?.appLogo && (
                    <CoreImage
                      src={mergedResourceRegistry?.appLogo}
                      styleClasses={[CoreClasses?.AUTH?.LOGO]}
                    />
                  )}
                </CoreBox>
                {props.children}
              </CoreSection>
          </CoreBox>
        </CoreImageBackground>
      </CoreThemeProvider>
    </ThemeContext.Provider>
  );
};
