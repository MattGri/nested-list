import data from '../json.json';

import { motion } from 'framer-motion';

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
            id="secondChapter"
            name="chapter"
            value="secondChapter"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ul className="border">
                <div className="wrapper">
                  <li className="team team2">{data.team2.secondTeamHr}</li>
                </div>
                <div className="wrapper">
                  <li className="team team3">
                    {data.team2.secondTeamMarketing}
                  </li>
                </div>
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
                    <label className="treeText team">
                      {data.team2.secondTeamAnalytics}
                    </label>
                  </div>
                  {secondAnalytics ? (
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
                                {data.team2.analytics.calendar}
                              </li>
                            </div>
                            <div className="wrappers ">
                              <li className="treeText list">
                                {data.team2.analytics.cockpit}
                              </li>
                            </div>
                            <div className="wrappers ">
                              <li className="treeText list">
                                {data.team2.analytics.dashboard}
                              </li>
                            </div>
                            <div className="wrappers ">
                              <li className="treeText list">
                                {data.team2.analytics.reports}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team2.analytics.tickets}
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
                      id="secondChapter"
                      name="chapter"
                      value="secondChapter"
                      checked={secondProgrammers}
                      onClick={() => {
                        setSecondProgrammers(!secondProgrammers);
                      }}
                    />
                    <label className="treeText team team4">
                      {data.team2.secondProgrammersTeam}
                    </label>
                  </div>
                  {secondProgrammers ? (
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
                                {data.team2.programmers.frontend}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team2.programmers.backend}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team2.programmers.design}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team2.programmers.devops}
                              </li>
                            </div>
                            <div className="wrappers">
                              <li className="treeText list">
                                {data.team2.programmers.qa}
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

export default SecondList;
