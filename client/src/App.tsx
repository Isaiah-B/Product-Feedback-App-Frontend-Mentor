import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Home from './pages/home/home-page';
import FeedbackPage from './pages/feedback/feedback-page';
import RoadmapPage from './pages/roadmap/roadmap-page';
import LoginModal from './components/signup-modal/signup-modal.component';
import AddFeedbackPage from './pages/add-feedback/add-feedback.page';
import EditFeedbackPage from './pages/edit-feedback/edit-feedback.page';
import NotFoundPage from './pages/not-found/not-found.page';

import { CurrentUserState, FeedbackState, ModalState } from './recoil/store';
import { getUser } from './service/user-service';
import { getAllFeedback } from './service/feedback-service';
import ScrollToTop from './helpers/scroll-to-top';

import { GlobalStyle } from './index.styles';

function App() {
  const setFeedbackState = useSetRecoilState(FeedbackState);
  const setCurrentUser = useSetRecoilState(CurrentUserState);
  const modalState = useRecoilValue(ModalState);

  const getData = async () => {
    const allFeedback = await getAllFeedback();
    setFeedbackState(allFeedback.data);
  };

  const checkUser = async () => {
    if (localStorage.getItem('feedback-token')) {
      const token = localStorage.getItem('feedback-token');
      const res = await getUser();
      const user = res.data;
      setCurrentUser({ ...user, token });
    }
  };

  useEffect(() => {
    getData();
    checkUser();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path=":id" element={<FeedbackPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="create-feedback" element={<AddFeedbackPage />} />
        <Route path="edit-feedback/:id" element={<EditFeedbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {
        modalState.isOpen
          ? <LoginModal />
          : null
      }
    </>
  );
}

export default App;
