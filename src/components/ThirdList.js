import data from '../json.json';

const ThirdList = ({
  thirdChapter,
  setThirdChapter,
  setFirstChapter,
  setSecondChapter,
  thirdAnalytics,
  setThirdAnalytics,
  thirdProgrammers,
  setThirdProgrammers,
}) => {
  return (
    <>
      <div>
        <div className="wrapper">
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
          <label htmlFor="thirdChapter" className="text">
            {data.thirdChapter}
          </label>
        </div>
        {thirdChapter ? (
          <>
            <ul>
              <div className="wrapper margin">
                <li className="team">{data.team3.thirdTeamHr}</li>
              </div>
              <div className="wrapper margin">
                <li className="team">{data.team3.thirdTeamMarketing}</li>
              </div>
            </ul>
            <div>
              <div className="wrapper analyticsProgrammers">
                <input
                  type="checkbox"
                  id="secondChapter"
                  name="chapter"
                  value="secondChapter"
                  checked={thirdAnalytics}
                  onClick={() => {
                    setThirdAnalytics(!thirdAnalytics);
                  }}
                />
                <label className="treeText">
                  {data.team3.thirdTeamAnalytics}
                </label>
              </div>
              {thirdAnalytics ? (
                <>
                  <ul>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.analytics.calendar}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.analytics.cockpit}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.analytics.dashboard}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.analytics.reports}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.analytics.tickets}
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
                  id="secondChapter"
                  name="chapter"
                  value="secondChapter"
                  checked={thirdProgrammers}
                  onClick={() => {
                    setThirdProgrammers(!thirdProgrammers);
                  }}
                />
                <label className="treeText">
                  {data.team3.thirdTeamProgrammers}
                </label>
              </div>
              {thirdProgrammers ? (
                <>
                  <ul>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.programmers.frontend}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.programmers.backend}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.programmers.design}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.programmers.devops}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team3.programmers.qa}
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
export default ThirdList;
