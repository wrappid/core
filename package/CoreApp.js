import React from 'react'
import CoreAppDiv from './components/layouts/CoreAppDiv'
import AppContainer from './layout/AppContainer'
import CoreNavigation from "./CoreNavigation";

export default function CoreApp() {
    return (
        <React.StrictMode>
            <CoreAppDiv>
                <AppContainer>
                    <CoreNavigation />
                </AppContainer>
            </CoreAppDiv>
        </React.StrictMode>
    );
}
