import HTMLFlipBook from 'react-pageflip';
import { useRef } from 'react';
import RegisterForm from './Register';
import LoginForm from './LoginForm';

export default function AuthBook() {
  const flipBookRef = useRef();

  // Manual flip controls
  const flipNext = () => flipBookRef.current?.flipNext();
  const flipBack = () => flipBookRef.current?.flipBack();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <HTMLFlipBook
        width={400}
        height={500}
        showCover={true}
        mobileScrollSupport={true}
        ref={flipBookRef}
        className="auth-book shadow-2xl rounded-lg"
        clickEventForward={false}
        disableFlipOnClick={false}
        useMouseEvents={false}
        useTouchEvents={false}
      >
        {/* Pages remain the same */}
        <div className="bg-white p-8">
          <RegisterForm flipBookRef={flipBookRef} flipNext={flipNext} />
        </div>
        <div className="bg-white p-8 ">
          <LoginForm flipBookRef={flipBookRef} flipBack={flipBack} />
        </div>
      </HTMLFlipBook>
    </div>
  );
}
