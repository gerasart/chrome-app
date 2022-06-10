import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import main from '../../components/Main.module.scss';
import { setPhrase } from '../../store/slices/user';
import secret_phrase from './SeedPhrase.module.css';
import Header from "../../components/Header/Header";

let Mnemonic = require('bitcore-mnemonic');
let code = new Mnemonic();
let phrase = code.toString();

export default function SeedPhrase() {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPhrase(phrase));
  }, [dispatch]);
  const handleClick = () => setIsShow(true);

  return (
    <div className={secret_phrase.SecretPhrase}>
        <Header />
      <div className={main.h1}>
        Secret recovery phrase
        {isShow}
      </div>
      <div className={main.text}>
        Your recovery passphrase makes it easy to back up and restore your
        account. <br />
        <br />
        WARNING: Never share your recovery passphrase. Anyone who has it can
        take your Ether forever.
      </div>
      <div>
        {!isShow ? (
          <div className={secret_phrase.phrase_block} onClick={handleClick}>
            <div className={secret_phrase.hidden_phrase}>
              Click to show secret phrase
            </div>
            <div className={secret_phrase.phrase}>{phrase}</div>
          </div>
        ) : (
          <div className={secret_phrase.phrase_active}>{phrase}</div>
        )}
      </div>
      <div className={secret_phrase.btns}>
        <div className={main.btn_neg}>Remind me later</div>
        <Link to='/seed-phrase/confirm' className={main.btn}>
          Next
        </Link>
      </div>
    </div>
  );
}
