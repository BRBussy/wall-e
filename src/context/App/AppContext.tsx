import React, {useContext, useState, useEffect} from 'react';
import Core from 'wallE/Core';

interface AppContext {
    appContextLoading: boolean;
    appContextWallECore: Core;
}

const Context = React.createContext({} as AppContext);

const App: React.FC = ({children}: { children?: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [wallECore, setWallECore] = useState(new Core());

    useEffect(() => {
        // on open check for a stored wallECore
        chrome.storage.sync.get('wallECore', (data) => {
            if (data.wallECore) {
                // if there is one then try and construct a wallECore
                setWallECore(new Core(data.wallECore));
            } else {
                // otherwise initialise state with new wallECore
                chrome.storage.sync.set({wallECore: new Core()});
            }
        });
    }, []);

    return (
        <Context.Provider
            value={{
                appContextLoading: loading,
                appContextWallECore: wallECore
            }}
        >
            {children}
        </Context.Provider>
    );
};

const useAppContext = () => useContext(Context);

export {
    useAppContext
};

export default App;
