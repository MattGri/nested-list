import { useState, useEffect } from 'react';
import data from '../json.json';
import FirstList from './FirstList';
import SecondList from './SecondList';
import ThirdList from './ThirdList';
import NonAttached from './NonAttached';
// import { motion } from "framer-motion"

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
        {/* <div className="verticalLine">&#124;</div>  */}
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
          <NonAttached />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default NestedList;
