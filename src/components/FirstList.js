import data from '../json.json';

import '../Styles/FirstList.scss';

const FirstList = ({
  firstChapter,
  setFirstChapter,
  setSecondChapter,
  setThirdChapter,
  firstAnalytics,
  setFirstAnalytics,
  firstProgrammers,
  setFirstProgrammers,
}) => {
  return (
    <>
      <div>
        <div className="wrapper">
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
          <label htmlFor="firstChapter" className="text">
            {data.firstChapter}
          </label>
        </div>
        {firstChapter ? (
          <>
            <ul>
              <div className="wrapper margin">
                <li className="team">{data.team.firstTeamHr}</li>
              </div>
              <div className="wrapper margin">
                <li className="team">{data.team.firstTeamMarketing}</li>
              </div>
            </ul>
            <div>
              <div className="wrapper analyticsProgrammers">
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
                <label className="treeText">
                  {data.team.firstTeamAnalytics}
                </label>
              </div>
              {firstAnalytics ? (
                <>
                  <ul>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.analytics.calendar}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.analytics.cockpit}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.analytics.dashboard}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.analytics.reports}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.analytics.tickets}
                      </li>
                    </div>
                  </ul>
                </>
              ) : (
                ''
              )}
            </div>
            <div>
              <div className="wrapper analyticsProgrammers">
                <input
                  type="checkbox"
                  id="firstChapter"
                  name="chapter"
                  value="firstChapter"
                  checked={firstProgrammers}
                  onClick={() => {
                    setFirstProgrammers(!firstProgrammers);
                  }}
                />
                <label className="treeText">{data.team.programmersTeam}</label>
              </div>
              {firstProgrammers ? (
                <>
                  <ul>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.programmers.frontend}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.programmers.backend}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.programmers.design}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.programmers.devops}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team.programmers.qa}
                      </li>
                    </div>
                  </ul>
                </>
              ) : (
                ''
              )}
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default FirstList;
