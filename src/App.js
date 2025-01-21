import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/section/Main';

// lazy() -> 컴포넌트를 동적으로 로드
// 즉, 필요할 때에만 해당 컴포넌트의 코드를 로드하여 초기 로딩 시간을 줄임
// 애플리케이션 성능 개선
// lazy()와 Suspense는 함께 사용해야 올바르게 동작하며, 사용자 경험을 향상시킬 수 있습니다.
const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Webd = lazy(() => import('./pages/Webd'));
const Website = lazy(() => import('./pages/Website'));
const Gsap = lazy(() => import('./pages/Gsap'));
const Port = lazy(() => import('./pages/Port'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/webd" element={<Webd />} />
          <Route path="/website" element={<Website />} />
          <Route path="/gsap" element={<Gsap />} />
          <Route path="/port" element={<Port />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelID" element={<Channel />} />
          <Route path="/video/:videoID" element={<Video />} />
          <Route path="/search/:searchID" element={<Search />} />
          <Route path="/*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
