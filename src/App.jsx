import { useState } from "react";

import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import Differences from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";

function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('effect ')
  
  return (
    <>
     {visible && <Header />}
      <main>
        <IntroSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' && (<>
        <TeachingSection />
        <Differences />
        </>)}

        {tab === 'feedback' &&  (<FeedbackSection />)}

        {tab === 'effect' &&  (<EffectSection />)}

      </main>
    </>
  );
} 

export default App;
