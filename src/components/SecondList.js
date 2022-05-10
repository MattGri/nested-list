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
        <label htmlFor="secondChapter">{data.secondChapter}</label>
        {secondChapter ? (
          <>
            <ul>
              <li>{data.team2.secondTeamHr}</li>
              <li>{data.team2.secondTeamMarketing}</li>
            </ul>
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
                  <ul>
                    <li>{data.team2.analytics.calendar}</li>
                    <li>{data.team2.analytics.cockpit}</li>
                    <li>{data.team2.analytics.dashboard}</li>

                    <li>{data.team2.analytics.reports}</li>
                    <li>{data.team2.analytics.tickets}</li>
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
                checked={secondProgrammers}
                onClick={() => {
                  setSecondProgrammers(!secondProgrammers);
                }}
              />
              <label>{data.team2.secondProgrammersTeam}</label>
              {secondProgrammers ? (
                <>
                  <ul>
                    <li>{data.team2.programmers.frontend}</li>
                    <li>{data.team2.programmers.backend}</li>
                    <li>{data.team2.programmers.design}</li>
                    <li>{data.team2.programmers.devops}</li>
                    <li>{data.team2.programmers.qa}</li>
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
