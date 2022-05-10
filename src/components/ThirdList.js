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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ul className="border">
                <div className="wrapper">
                  <li className="team team2">{data.team3.thirdTeamHr}</li>
                </div>
                <div className="wrapper">
                  <li className="team team3">
                    {data.team3.thirdTeamMarketing}
                  </li>
                </div>
                <div>
                  <div className="wrapper analyticsProgrammers">
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
                    <label className="treeText team">
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
                              <li className="treeText list">
                                {data.team3.analytics.calendar}
                              </li>
                            </div>
                            <div className="wrappers ">
                              <li className="treeText list">
                                {data.team3.analytics.cockpit}
                              </li>
                            </div>
                            <div className="wrappers ">
                              <li className="treeText list">
                                {data.team3.analytics.dashboard}
                              </li>
                            </div>
                            <div className="wrappers ">
                              <li className="treeText list">
                                {data.team3.analytics.reports}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team3.analytics.tickets}
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
                  <div className="wrapper analyticsProgrammers">
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
                    <label className="treeText team team4">
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
                              <li className="treeText list">
                                {data.team3.programmers.frontend}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team3.programmers.backend}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team3.programmers.design}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team3.programmers.devops}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team3.programmers.qa}
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
      </div>
    </>
  );
};

export default ThirdList;
