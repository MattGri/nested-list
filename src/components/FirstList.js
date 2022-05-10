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
            <ul className="border">
              <div className="wrapper">
                <li className="team team2">{data.team.firstTeamHr}</li>
              </div>
              <div className="wrapper">
                <li className="team team3">{data.team.firstTeamMarketing}</li>
              </div>
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
                  <label className="treeText team">
                    {data.team.firstTeamAnalytics}
                  </label>
                </div>
                {firstAnalytics ? (
                  <>
                    <div className="items">
                      <ul className="listlineAnalytics">
                        <div className="wrappers">
                          <li className="treeText list">
                            {data.team.analytics.calendar}
                          </li>
                        </div>
                        <div className="wrappers ">
                          <li className="treeText list">
                            {data.team.analytics.cockpit}
                          </li>
                        </div>
                        <div className="wrappers ">
                          <li className="treeText list">
                            {data.team.analytics.dashboard}
                          </li>
                        </div>
                        <div className="wrappers ">
                          <li className="treeText list">
                            {data.team.analytics.reports}
                          </li>
                        </div>
                        <div className="wrappers">
                          <li className="treeText list">
                            {data.team.analytics.tickets}
                          </li>
                        </div>
                      </ul>
                    </div>
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
                  <label className="treeText team team4">
                    {data.team.programmersTeam}
                  </label>
                </div>
                {firstProgrammers ? (
                  <>
                    <div className="items">
                      <ul className="listlineAnalytics">
                        <div className="wrappers">
                          <li className="treeText list">
                            {data.team.programmers.frontend}
                          </li>
                        </div>
                        <div className="wrappers">
                          <li className="treeText list">
                            {data.team.programmers.backend}
                          </li>
                        </div>
                        <div className="wrappers">
                          <li className="treeText list">
                            {data.team.programmers.design}
                          </li>
                        </div>
                        <div className="wrappers">
                          <li className="treeText list">
                            {data.team.programmers.devops}
                          </li>
                        </div>
                        <div className="wrappers">
                          <li className="treeText list">
                            {data.team.programmers.qa}
                          </li>
                        </div>
                      </ul>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </ul>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default FirstList;
