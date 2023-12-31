import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import QuizDet from './components/QuizDet';
function App() {
  const [showQuestions, setShowQuestions] = useState(false);
  return (
    
    <Router>
      <div className='App'>
      <img className="shape-top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVXSURBVHgB7d3tcRNHGMDx59YDJjN8cCrAVIBVQZwOQgUhFcRUkKQCkwpiKgipAHcguwLoIPmQTLAY3bK71gnL1tu97N6+/H8zEEBkhg//efZWWt1VsqA/Tc9EqXMBAlB3fnUpQCDV3d/o2fXf5j9HAnimVn6n678ECGA1vJrlFmGshvdE3pmf/xHAs5XwqmpiotNXAnimHvzJXL8VwLOH4bHcIoAH4d0utzVTD16ptX86d1MP8Kba9IKeXb03L58K4IHa+EqteTMZ3mwO71AuhE0GPNkYnttk6Pp3ATyotr2o9fRIPqsPwsEBDExte5GpB1+qXX+BqQcf1K6/wNSDDzsnnsXUw9B2TjzLTb26/k2Agew18Rr65vqD+T+OBehpr4m3VNc/CTCAVuFV30wuzQUfBwjQW7uJZ9X6tfBRGnpqHZ6Zeh/ZaKCvVpuLuzg2hT7aL7WNubYbDZZcdNI5PJZc9NF5qW2w5KKL7kttgyUXHfQOzy25mjeW0U7/iWdUhxPzpjInWLC/3td4DXeCZaamfJaLfQwy8azFCZbvhes97GGw8Cx3vTevXwuww6DhWSa+C673sMtg13j38f4ethl84i090i9Fy0cB1vAWnttsfK5fCpsNrOFv4hnV08kVmw2s4zU8y202NIcJsMrb5uI+PZu+MZ3/LIAEDM9ip4uG96V2BTtdLAQNb/mxGvEVL+hS29D/T4/lQE2FW2IUK+xSu+A+051xoKBko4Rn8R5f2UYLz3Lv8dXEV6JRw7OqJ5M3vMFcnlE2F+vom+mvUqlfBEWIJjyL+MoRVXiWvrm+MP+qHwVZiy48i/jyF2V4FvHlbfRd7UaP6zPzM08Lz1S0E89a3G3+vfnliSArUYdnEV+eog/PIr78JBGexS0y8hLv5uIezvLlJZmJ13Bn+ZRZdpl8SUsuPIv40pdkeBbxpS3Z8CziS1fS4VnEl6bkw7OILz1ZhGcRX1qyCc8ivnRkFZ5FfGnILjyL+OKXZXgW8cUt2/As4otXMocEunC3yuB2uFHKeuI19L/TE3nszvNxk6BIFBGeRXxxKSY8y1zzncqBiw8jy/oa7z5zzXcpcx5xGoOiJl7DTL5XZvL9IRhNUROvwSMQxlfkxGtwk6DxFB2eRXzjKD48i/u0hEd4C8QXVpGbi7W4SVBQTLw7uFVGOEy8O9zdCuY1j70KgIm3Bsep/CO8DYjPL8Lbgmeu+cM13hY8c80fJt4eOE41PCbeHjhONTwmXgscpxoOE68FnjY5HMJriadNDoOltiOOU/VDeD0QX3eE1xPxdUN4AyC+9ghvIMTXDuENiPj2R3gDI779EJ4Hmvh2IjxPiG87wvNIf5qeiVLnggcIzzMOFqxHeAFwb76HOCQQQPV0cuVOMvPttSUmXkB8gegrwguM+G6x1AbmvkD0uJ6I1u+kYEy8EZX8Xh/hjazU+AgvAia+H8xVz3lJ132EF4nSNh1sLiLxddNRv5UCMPEiVMJ1H+FFyn3M9kj9mevSy1IbKfcxW20/Zsvz/T4mXgJyXHoJLxG57XpZahNhd73V4Yvnudw+g4mXoBymHxMvQTlMPyZe4m6nn9jNR1JPJSK8TLjvdiiz801k+SW8zKQSIOFlaLH8vor5vT/Cy1jM13+EV4DlBBQTYCRLMOEVJpZrQMIrlHtozO114CjLMOEVzi3DIqdyUJkAq1MJhPCwFDJCwsNa7mnlMxOhiP0i0ndDXxMSHvay2BmfmGJOTTYvzI8T6XETIsJDZ+54/oGJ70CZEOvnt0HaGKtj2REl4cELt1T/Z5ZnG6YyPyr1THT9rSnuSHT1TIAxfAH5ywxAYaDsvwAAAABJRU5ErkJggg==" alt="Shape Top"></img>
      {!showQuestions && 
        <>
        <div className='main'>
        <h1>Quizzical</h1>
        <p>Answer the questions and test your knowledge</p>
        <button className='quizbtn' onClick={()=>setShowQuestions(true)}><Link to="/Quiz" className='link'>Start Quiz</Link></button>
        </div>
        </>
      }
      <img className="shape-bottom" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB2CAYAAAAusLpdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARmSURBVHgB7dxdbhNXFMDxc+44qEgtmUhtXxk/9LnZQdMVtDsoO4AdwA7KDlJWQLsCzApIX1tR+42KIMU8xY49c5lxPkmMPZ45tufj/5MgyeCIKPrn3pszTlQqpP/uNJIgCKcah+olyq5lL71qGIjuyvmF2XUvGqZ/h1fvrBKmF8OF/4HKMH3M8OKNoYo/f93rIBb/Ub0fepVB9qfjg6Hs7Ay6ezoU5KayZpeRxD4NQZPws0DSOLyk4eSJYVvSCNOP+ShJA3TO96aJ/7vT+eqI0OYrFVQWy7QjURZJEOhuHEs3CyX9Ct+/WD0iaarL0BL/OnHS++G7+z3B/KD6J2kMk0l0c1Vx6h4m6Uqis0gaHktB6eemJ07+lNi97n5/70haSPvvx4eEshYDVe1NffKiTauX/nc88oJ1GyRe/gp2/PPu3v2BNBhBbdhsW1T3R/fbey+kgQhqe9It0T1rWlgEtX2NCougqqMRYRFU9Qy043+u6+HdCaom8lPt949Hv7858dW8e7AAQVVUum082Z2O3/x7fHogNUJQ1Ralt7Je9Y/HT6UmOEPVRy3OVqxQ9ZGdrV5VfQskqHqp/BZIUDXkxT+ralQEVVNZVG8/jA+lYgiqxtT7R1WLiqBqrmpREVQDVCkqgmqIqkRFUA2SRZXdA5QtIqiGye4BbnOkQFANtM05FUE11CyqD2e/yYYRVIN5nzz/5/3ZvmwQQTVb2NHkZf/kNJINIajmi2SqGxsnEFQLpN/5HWxqnEBQLTEbJ2zgkE5QLZId0td9niKodgn91L2UNSKo1vH76zxPEVQLZeepdT03naBaKhA9XMcPkhJUe0Xh1P5+H0G12Dq2PoJqOeutj6AQPTgbPREjBAVRp4+tBp4EhUxodQOZoDCT3UC2OKATFK5kB3QpiaBwU/T2/3IHdILCZzSQp2XGCASF28IyYwSCwh3ZGKHoKkVQmKfwKkVQmKvoKkVQ+JJCqxRB4YuKrFIEhUXCB+Pxo1XegaCwUDqXerzK4wkKy0Sr3OMjKCzVEc39VGGCwlKzH2XP+VtcCAq5JD7+Nc/jCAq55B0hEBTyCr+ejpZuewSF3PIczgkKuWWH82XbHkFhJcsm5wSFlbhAfln47wKsYNm2R1BY2aJtj6CwskXbHkFhZYu2PYJCId9MRnNvxRAUCnFeCQqGnPw0/zJQTDjviXcEhcJcIgd3rglQkHN6Z9sjKBSWjg/2b48PCApl3HmOFEGhFBcrQcHO7dswBIVSsnPUzbcJCmWF/XfXv5KaoFBaHFzPowgKBq4P5gSF0pyX6Op1Acq6caOYoGAhvJyYExRMXE7MCQom9OIcRVAwoqxQsONYoWDKyY/nLwAbfJcHU7PRAUHBTDiZRAQFO84/JCiYiZNkj6BgJhtuEhTMeFUO5bATiO4SFMx47zlDwY46YYWCHS8cymGMoGCKoGCJsQFMERRsERRMERRMERRMERRMERRMERRMERQsDQgKpggKpggKZpQtD9Y+AZFGoykwExt9AAAAAElFTkSuQmCC" alt="Shape Bottom"></img>
      <Routes>
          <Route exact path="/Quiz" element={<QuizDet />}></Route>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
