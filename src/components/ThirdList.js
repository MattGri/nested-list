import data from '../json.json';

import { motion } from 'framer-motion';

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
      <div className="wrapper">
        <input
          type="radio"
          id="thirdSubdivision"
          name="third subdivision"
          checked={thirdChapter}
          onClick={() => {
            setThirdChapter(true);
            setFirstChapter(false);
            setSecondChapter(false);
          }}
        />
        <label htmlFor="thirdSubdivision" className="subdivisionText">
          {data.thirdSubdivision}
        </label>
      </div>
      {thirdChapter ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ul className="borderLine">
              <div className="wrapper color">
                <li className="line line2">{data.team3.thirdTeamHr}</li>
              </div>
              <div className="wrapper">
                <li className="line line3">{data.team3.thirdTeamMarketing}</li>
              </div>
              <div>
                <div className="wrapper analyticsProgrammers">
                  <input
                    type="checkbox"
                    id="thirdAnalytics"
                    name="third analytics"
                    checked={thirdAnalytics}
                    onClick={() => {
                      setThirdAnalytics(!thirdAnalytics);
                    }}
                  />
                  <label htmlFor="thirdAnalytics" className="text line">
                    {data.team3.thirdTeamAnalytics}
                  </label>
                </div>
                {thirdAnalytics ? (
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
                              {data.team3.analytics3.calendar}
                            </li>
                          </div>
                          <div className="wrappers ">
                            <li className="text list">
                              {data.team3.analytics3.cockpit}
                            </li>
                          </div>
                          <div className="wrappers ">
                            <li className="text list">
                              {data.team3.analytics3.dashboard}
                            </li>
                          </div>
                          <div className="wrappers ">
                            <li className="text list">
                              {data.team3.analytics3.reports}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team3.analytics3.tickets}
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
                    id="thirdProgrammers"
                    value="third programmers"
                    checked={thirdProgrammers}
                    onClick={() => {
                      setThirdProgrammers(!thirdProgrammers);
                    }}
                  />
                  <label htmlFor="thirdProgrammers" className="text line line4">
                    {data.team3.thirdTeamProgrammers}
                  </label>
                </div>
                {thirdProgrammers ? (
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
                              {data.team3.programmers3.frontend}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team3.programmers3.backend}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team3.programmers3.design}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team3.programmers3.devops}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="text list">
                              {data.team3.programmers3.qa}
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

export default ThirdList;
