import { useState } from 'react';
import data from '../json.json';
import FirstList from './FirstList';
import SecondList from './SecondList';
import ThirdList from './ThirdList';
import NonAttached from './NonAttached';

const NestedList = () => {
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
    <>
      <h1>zadanie rekrutacyjne</h1>
      <input
        type="checkbox"
        onClick={() => {
          setTreeMultiline(!treeMultiline);
        }}
      />
      <label>{data.treeMultiline}</label>
      {treeMultiline ? (
        <>
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
    </>
  );
};

export default NestedList;
