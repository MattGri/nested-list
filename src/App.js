import './App.css';
import data from './json.json';
import { useState } from 'react';
import NestedList from './components/NestedList';

function App() {
  const [treeMultiline, setTreeMultiline] = useState(false);
  const [firstChapter, setFirstChapter] = useState(false);
  const [secondChapter, setSecondChapter] = useState(false);
  const [thirdChapter, setThirdChapter] = useState(false);
  const [firstAnalytics, setFirstAnalytics] = useState(false);
  const [secondAnalytics, setSecondAnalytics] = useState(false);
  const [thirdAnalytics, setThirdAnalytics] = useState(false);
  const [firstProgrammers, setFirstProgammers] = useState(false);
  const [secondProgrammers, setSecondProgrammers] = useState(false);
  const [thirdProgrammers, setThirdProgrammers] = useState(false);

  return (
    <div className="App">
      <h1>zadanie rekrutacyjne</h1>
      <NestedList />
      <div>
        <input
          type="checkbox"
          onClick={() => {
            setTreeMultiline(!treeMultiline);
          }}
        />
        <label>{data.treeMultiline}</label>
        {treeMultiline ? (
          <>
            <div>
              <input
                type="radio"
                id="firstChapter"
                name="chapter"
                value="firstChapter"
                checked={firstChapter}
                onClick={() => {
                  setFirstChapter(true);
                  setSecondChapter(false);
                  setThirdChapter(false);
                }}
              />
              <label htmlFor="firstChapter">{data.firstChapter}</label>
              {firstChapter ? (
                <>
                  <p>{data.team.firstTeamHr}</p>
                  <p>{data.team.firstTeamMarketing}</p>
                  <div>
                    <input
                      type="checkbox"
                      id="firstChapter"
                      name="chapter"
                      value="firstChapter"
                      checked={firstAnalytics}
                      onClick={() => {
                        setFirstAnalytics(!firstAnalytics);
                      }}
                    />
                    <label>{data.team.firstTeamAnalytics}</label>
                    {firstAnalytics ? (
                      <>
                        <p>{data.team.analytics.calendar}</p>
                        <p>{data.team.analytics.cockpit}</p>
                        <p>{data.team.analytics.dashboard}</p>
                        <p>{data.team.analytics.reports}</p>
                        <p>{data.team.analytics.tickets}</p>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="firstChapter"
                      name="chapter"
                      value="firs"
                      checked={firstProgrammers}
                      onClick={() => {
                        setFirstProgammers(!firstProgrammers);
                      }}
                    />
                    <label>{data.team.programmersTeam}</label>
                    {firstProgrammers ? (
                      <>
                        <div>
                          <p>{data.team.programmers.frontend}</p>
                          <p>{data.team.programmers.backend}</p>
                          <p>{data.team.programmers.design}</p>
                          <p>{data.team.programmers.devops}</p>
                          <p>{data.team.programmers.qa}</p>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </>
              ) : (
                ' '
              )}
            </div>
            <div>
              <input
                type="radio"
                id="secondChapter"
                name="chapter"
                value="secondChapter"
                checked={secondChapter}
                onClick={() => {
                  setSecondChapter(true);
                  setFirstChapter(false);
                  setThirdChapter(false);
                }}
              />
              <label htmlFor="secondChapter">{data.secondChapter}</label>
              {secondChapter ? (
                <>
                  <p>{data.team2.secondTeamHr}</p>
                  <p>{data.team2.secondTeamMarketing}</p>
                  <div>
                    <input
                      type="checkbox"
                      id="secondChapter"
                      name="chapter"
                      value="secondChapter"
                      checked={secondAnalytics}
                      onClick={() => {
                        setSecondAnalytics(!secondAnalytics);
                      }}
                    />
                    <label>{data.team2.secondTeamAnalytics}</label>
                    {secondAnalytics ? (
                      <>
                        <p>{data.team2.analytics.calendar}</p>
                        <p>{data.team2.analytics.cockpit}</p>
                        <p>{data.team2.analytics.dashboard}</p>
                        <p>{data.team2.analytics.reports}</p>
                        <p>{data.team2.analytics.tickets}</p>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="secondChapter"
                      name="chapter"
                      value="second"
                      checked={secondProgrammers}
                      onClick={() => {
                        setSecondProgrammers(!secondProgrammers);
                      }}
                    />
                    <label>{data.team2.secondProgrammersTeam}</label>
                    {secondProgrammers ? (
                      <>
                        <div>
                          <p>{data.team2.programmers.frontend}</p>
                          <p>{data.team2.programmers.backend}</p>
                          <p>{data.team2.programmers.design}</p>
                          <p>{data.team2.programmers.devops}</p>
                          <p>{data.team2.programmers.qa}</p>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </>
              ) : (
                ' '
              )}
            </div>
            <div>
              <input
                type="radio"
                id="thirdChapter"
                name="chapter"
                value="thirdChapter"
                checked={thirdChapter}
                onClick={() => {
                  setThirdChapter(true);
                  setFirstChapter(false);
                  setSecondChapter(false);
                }}
              />
              <label htmlFor="thirdChapter">{data.thirdChapter}</label>
              {thirdChapter ? (
                <>
                  <p>{data.team2.secondTeamHr}</p>
                  <p>{data.team2.secondTeamMarketing}</p>
                  <div>
                    <input
                      type="checkbox"
                      id="thirdChapter"
                      name="chapter"
                      value="thirdChapter"
                      checked={thirdAnalytics}
                      onClick={() => {
                        setThirdAnalytics(!thirdAnalytics);
                      }}
                    />
                    <label>{data.team3.thirdTeamAnalytics}</label>
                    {thirdAnalytics ? (
                      <>
                        <p>{data.team3.analytics.calendar}</p>
                        <p>{data.team3.analytics.cockpit}</p>
                        <p>{data.team3.analytics.dashboard}</p>
                        <p>{data.team3.analytics.reports}</p>
                        <p>{data.team3.analytics.tickets}</p>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="thirdChapter"
                      name="chapter"
                      value="thirdChapter"
                      checked={thirdProgrammers}
                      onClick={() => {
                        setThirdProgrammers(!thirdProgrammers);
                      }}
                    />
                    <label>{data.team3.thirdTeamProgrammers}</label>
                    {thirdProgrammers ? (
                      <>
                        <div>
                          <p>{data.team3.programmers.frontend}</p>
                          <p>{data.team3.programmers.backend}</p>
                          <p>{data.team3.programmers.design}</p>
                          <p>{data.team3.programmers.devops}</p>
                          <p>{data.team3.programmers.qa}</p>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </>
              ) : (
                ' '
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
