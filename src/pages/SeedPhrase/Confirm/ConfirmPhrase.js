import { useState } from 'react';
import { useSelector } from 'react-redux';
import main from '../../../components/Main.module.scss';
import confirm_phrase from './ConfirmPhrase.module.css';

export default function ConfirmPhrase() {
  const phrase = useSelector((state) => state.user.phrase);
  const [randomPhrase] = useState(
    phrase
      .split(' ')
      .sort(() => Math.random() - 0.5)
      .map((item, index) => {
        return {
          value: item,
          disabled: false,
        };
      })
  );
  const [confirmPhrase, setConfirmPhrase] = useState(
    phrase.split(' ').map(() => '')
  );
  const selectWord = (e, i) => {
    const arr = confirmPhrase;
    arr[arr.indexOf('')] = e.target.innerHTML;
    randomPhrase[i].disabled = true;
    setConfirmPhrase([...arr]);
  };

  const removeWord = (e) => {
    if (e.target.innerHTML) {
      const arr = confirmPhrase;
      const index = arr.indexOf(e.target.innerHTML);
      randomPhrase.forEach((item) => {
        if (item.value === e.target.innerHTML) {
          item.disabled = false;
        }
      });
      e.target.innerHTML = '';
      arr[index] = '';
      setConfirmPhrase([...arr]);
    }
  };

  return (
    <div className={confirm_phrase.ConfirmPhrase}>
      <div className={main.h1}>Confirm your recovery passphrase</div>

      <div className={main.text}>
        Select each phrase to make sure it is correct.
      </div>

      <div className={confirm_phrase.phrase_container}>
        {confirmPhrase.map((item, index) => {
          return (
            <div
              onClick={removeWord}
              className={confirm_phrase.phrase_word}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className={confirm_phrase.phrase_input}>
        {randomPhrase.map((item, index) => {
          return (
            <div
              onClick={(e) => selectWord(e, index)}
              className={
                item.disabled
                  ? confirm_phrase.phrase_word +
                    ' ' +
                    confirm_phrase.is_disabled
                  : confirm_phrase.phrase_word
              }
              key={index}
            >
              {item.value}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => console.log('TRUE')}
        disabled={!(phrase === confirmPhrase.join(' '))}
        className={confirm_phrase.btn}
      >
        Continue
      </button> 
    </div>
  );
}
