import data from '../json.json';

const SecondList = ({
  secondChapter,
  setSecondChapter,
  setFirstChapter,
  setThirdChapter,
  secondAnalytics,
  setSecondAnalytics,
  secondProgrammers,
  setSecondProgrammers,
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
            checked={secondChapter}
            onClick={() => {
              setSecondChapter(true);
              setFirstChapter(false);
              setThirdChapter(false);
            }}
          />
          <label htmlFor="secondChapter" className="text">
            {data.secondChapter}
          </label>
        </div>
        {secondChapter ? (
          <>
            <ul>
              <div className="wrapper margin">
                <li className="team">{data.team2.secondTeamHr}</li>
              </div>
              <div className="wrapper margin">
                <li className="team">{data.team2.secondTeamMarketing}</li>
              </div>
            </ul>
            <div>
              <div className="wrapper analyticsProgrammers">
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
                <label className="treeText">
                  {data.team2.secondTeamAnalytics}
                </label>
              </div>
              {secondAnalytics ? (
                <>
                  <ul>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.analytics.calendar}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.analytics.cockpit}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.analytics.dashboard}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.analytics.reports}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.analytics.tickets}
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
                  checked={secondProgrammers}
                  onClick={() => {
                    setSecondProgrammers(!secondProgrammers);
                  }}
                />
                <label className="treeText">
                  {data.team2.secondProgrammersTeam}
                </label>
              </div>
              {secondProgrammers ? (
                <>
                  <ul>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.programmers.frontend}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.programmers.backend}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.programmers.design}
                      </li>
                    </div>

                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.programmers.devops}
                      </li>
                    </div>
                    <div className="wrapper items">
                      <li className="treeText list">
                        {data.team2.programmers.qa}
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

export default SecondList;
