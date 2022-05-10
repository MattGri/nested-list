import data from '../json.json';

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
            <ul>
              <li>{data.team.firstTeamHr}</li>
              <li>{data.team.firstTeamMarketing}</li>
            </ul>
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
                  <ul>
                    <li>{data.team.analytics.calendar}</li>
                    <li>{data.team.analytics.cockpit}</li>
                    <li>{data.team.analytics.dashboard}</li>

                    <li>{data.team.analytics.reports}</li>
                    <li>{data.team.analytics.tickets}</li>
                  </ul>
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
                value="firstChapter"
                checked={firstProgrammers}
                onClick={() => {
                  setFirstProgrammers(!firstProgrammers);
                }}
              />
              <label>{data.team.programmersTeam}</label>
              {firstProgrammers ? (
                <>
                  <ul>
                    <li>{data.team.programmers.frontend}</li>
                    <li>{data.team.programmers.backend}</li>
                    <li>{data.team.programmers.design}</li>
                    <li>{data.team.programmers.devops}</li>
                    <li>{data.team.programmers.qa}</li>
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
