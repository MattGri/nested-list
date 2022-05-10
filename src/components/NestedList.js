import { useState, useEffect } from 'react';
import data from '../json.json';
import FirstList from './FirstList';
import SecondList from './SecondList';
import ThirdList from './ThirdList';
import NonAttached from './NonAttached';
import { motion } from 'framer-motion';

import '../Styles/NestedList.scss';

const NestedList = () => {
  useEffect(() => {
    document.title = 'Recruitment task';
  }, []);

  const [treeMultiline, setTreeMultiline] = useState(false);
  const [firstChapter, setFirstChapter] = useState(false);
  const [secondChapter, setSecondChapter] = useState(false);
  const [thirdChapter, setThirdChapter] = useState(false);
  const [firstAnalytics, setFirstAnalytics] = useState(false);
  const [secondAnalytics, setSecondAnalytics] = useState(false);
  const [thirdAnalytics, setThirdAnalytics] = useState(false);
  const [firstProgrammers, setFirstProgammers] = useState(false);
  const [secondProgrammers, setSecondProgrammers] = useState(false);
  const [thirdProgrammers, setThirdProgrammers] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h1 className="title">Recruitment Task</h1>
        <div className="box">
          <input
            type="checkbox"
            onClick={() => {
              setTreeMultiline(!treeMultiline);
            }}
          />
          <label className="treeText">{data.treeMultiline}</label>
        </div>

        {treeMultiline ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ul className="listlinesComponent">
                <li className="listsComponent">
                  <FirstList
                    firstChapter={firstChapter}
                    setFirstChapter={setFirstChapter}
                    setSecondChapter={setSecondChapter}
                    setThirdChapter={setThirdChapter}
                    firstAnalytics={firstAnalytics}
                    setFirstAnalytics={setFirstAnalytics}
                    firstProgrammers={firstProgrammers}
                    setFirstProgrammers={setFirstProgammers}
                  />
                </li>
                <li className="listsComponent">
                  <SecondList
                    secondChapter={secondChapter}
                    setSecondChapter={setSecondChapter}
                    setFirstChapter={setFirstChapter}
                    setThirdChapter={setThirdChapter}
                    secondAnalytics={secondAnalytics}
                    setSecondAnalytics={setSecondAnalytics}
                    secondProgrammers={secondProgrammers}
                    setSecondProgrammers={setSecondProgrammers}
                  />
                </li>
                <li className="listsComponent">
                  <ThirdList
                    thirdChapter={thirdChapter}
                    setThirdChapter={setThirdChapter}
                    setFirstChapter={setFirstChapter}
                    setSecondChapter={setSecondChapter}
                    thirdAnalytics={thirdAnalytics}
                    setThirdAnalytics={setThirdAnalytics}
                    thirdProgrammers={thirdProgrammers}
                    setThirdProgrammers={setThirdProgrammers}
                  />
                </li>
                <li className="listsComponent">
                  <NonAttached />
                </li>
              </ul>
            </motion.div>
          </>
        ) : (
          ''
        )}
      </div>
    </motion.div>
  );
};

export default NestedList;
