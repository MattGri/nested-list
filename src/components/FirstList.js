import data from '../json.json';
import { motion } from 'framer-motion';

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
      <div className="wrapper">
        <input
          type="radio"
          id="firstSubdivision"
          name="first subdivision"
          checked={firstChapter}
          onClick={() => {
            setFirstChapter(true);
            setSecondChapter(false);
            setThirdChapter(false);
          }}
        />
        <label htmlFor="firstSubdivision" className="subdivisionText">
          {data.firstSubdivision}
        </label>
      </div>
      {firstChapter ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ul className="borderLine">
              <div className="wrapper color">
                <li className="line line2">{data.team1.firstTeamHr}</li>
              </div>
              <div className="wrapper color">
                <li className="line line3">{data.team1.firstTeamMarketing}</li>
              </div>
              <div>
                <div className="wrapper analyticsProgrammers">
                  <input
                    type="checkbox"
                    id="firstAnalytics"
                    name="first analytics"
                    checked={firstAnalytics}
                    onClick={() => {
                      setFirstAnalytics(!firstAnalytics);
                    }}
                  />
                  <label htmlFor="firstAnalytics" className="text line">
                    {data.team1.firstTeamAnalytics}
                  </label>
                </div>
                {firstAnalytics ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="items">
                        <ul className="listlineAnalytics">
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.analytics1.calendar}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.analytics1.cockpit}
                            </li>
                          </div>
                          <div className="wrappers ">
                            <li className="text list">
                              {data.team1.analytics1.dashboard}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.analytics1.reports}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.analytics1.tickets}
                            </li>
                          </div>
                        </ul>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  ''
                )}
              </div>
              <div>
                <div className="wrapper analyticsProgrammers even">
                  <input
                    type="checkbox"
                    id="firstProgrammers"
                    name="first programmers"
                    checked={firstProgrammers}
                    onClick={() => {
                      setFirstProgrammers(!firstProgrammers);
                    }}
                  />
                  <label htmlFor="firstProgrammers" className="text line line4">
                    {data.team1.programmersTeam}
                  </label>
                </div>
                {firstProgrammers ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="items">
                        <ul className="listlineAnalytics">
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.programmers1.frontend}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.programmers1.backend}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.programmers1.design}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.programmers1.devops}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team1.programmers1.qa}
                            </li>
                          </div>
                        </ul>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </ul>
          </motion.div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default FirstList;
