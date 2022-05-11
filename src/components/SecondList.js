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
      <div className="wrapper evenSub">
        <input
          type="radio"
          id="secondSubdivision"
          name="second subdivision"
          checked={secondChapter}
          onClick={() => {
            setSecondChapter(true);
            setFirstChapter(false);
            setThirdChapter(false);
          }}
        />
        <label htmlFor="secondChapter" className="subdivisionText">
          {data.secondSubdivision}
        </label>
      </div>
      {secondChapter ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ul className="borderLine">
              <div className="wrapper color">
                <li className="line line2">{data.team2.secondTeamHr}</li>
              </div>
              <div className="wrapper color">
                <li className="line line3">{data.team2.secondTeamMarketing}</li>
              </div>
              <div>
                <div className="wrapper analyticsProgrammers">
                  <input
                    type="checkbox"
                    id="secondAnalytics"
                    name="second analytics"
                    checked={secondAnalytics}
                    onClick={() => {
                      setSecondAnalytics(!secondAnalytics);
                    }}
                  />
                  <label className="treeText line">
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
                              {data.team2.analytics2.calendar}
                            </li>
                          </div>
                          <div className="wrappers ">
                            <li className="treeText list">
                              {data.team2.analytics2.cockpit}
                            </li>
                          </div>
                          <div className="wrappers ">
                            <li className="treeText list">
                              {data.team2.analytics2.dashboard}
                            </li>
                          </div>
                          <div className="wrappers ">
                            <li className="treeText list">
                              {data.team2.analytics2.reports}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="treeText list">
                              {data.team2.analytics2.tickets}
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
                    id="secondProgrammers"
                    name="second programmers"
                    checked={secondProgrammers}
                    onClick={() => {
                      setSecondProgrammers(!secondProgrammers);
                    }}
                  />
                  <label className="treeText line line4">
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
                              {data.team2.programmers2.frontend}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="treeText list">
                              {data.team2.programmers2.backend}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="treeText list">
                              {data.team2.programmers2.design}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="treeText list">
                              {data.team2.programmers2.devops}
                            </li>
                          </div>
                          <div className="wrappers">
                            <li className="treeText list">
                              {data.team2.programmers2.qa}
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

export default SecondList;
