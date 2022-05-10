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
            <ul>
              <li>{data.team3.thirdTeamHr}</li>
              <li>{data.team3.thirdTeamMarketing}</li>
            </ul>
            <div>
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
              <label>{data.team3.thirdTeamAnalytics}</label>
              {thirdAnalytics ? (
                <>
                  <ul>
                    <li>{data.team3.analytics.calendar}</li>
                    <li>{data.team3.analytics.cockpit}</li>
                    <li>{data.team3.analytics.dashboard}</li>
                    <li>{data.team3.analytics.reports}</li>
                    <li>{data.team3.analytics.tickets}</li>
                  </ul>
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
                value="secondChapter"
                checked={thirdProgrammers}
                onClick={() => {
                  setThirdProgrammers(!thirdProgrammers);
                }}
              />
              <label>{data.team3.thirdTeamProgrammers}</label>
              {thirdProgrammers ? (
                <>
                  <ul>
                    <li>{data.team3.programmers.frontend}</li>
                    <li>{data.team3.programmers.backend}</li>
                    <li>{data.team3.programmers.design}</li>
                    <li>{data.team3.programmers.devops}</li>
                    <li>{data.team3.programmers.qa}</li>
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
