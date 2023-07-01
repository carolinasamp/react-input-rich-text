import { ChangeEvent, KeyboardEvent } from 'react';
import { SendOutlined } from '@mui/icons-material';
import './style.scss';
import {
  renderActionButtonsMainContent,
  renderActionsButtons,
} from './definitions';

const InputRichText = () => {
  // const [text, setText] = useState('');

  const handleKeyCode = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.shiftKey && e.key === 'Enter') {
    }
    console.log('keycode', e);
  };

  const handleOnChange = (e: ChangeEvent<HTMLDivElement>) => {
    console.log('change', e);
  };

  return (
    <footer className="irt-wrapper">
      <div className="irt-main-content">
        <div className="irt-main-content--action-buttons">
          {renderActionButtonsMainContent.map((action, i) => {
            return (
              <button key={i} className={`irt-button`} onClick={action.onClick}>
                {<action.icon style={{ fill: '#54656f' }} />}
              </button>
            );
          })}
        </div>

        <div
          contentEditable
          role="textbox"
          spellCheck
          placeholder="Mensagem"
          title="Message box"
          className="irt-textarea"
          onKeyUp={handleKeyCode}
          onChange={handleOnChange}
        />

        <div className="irt-button --send">
          <SendOutlined style={{ fill: '#54656f' }} />
        </div>
      </div>
      <div className="irt-secondary-content">
        {renderActionsButtons.map((action, i) => {
          return (
            <button key={i} className={`irt-button`} onClick={action.onClick}>
              {<action.icon style={{ fill: '#54656f' }} />}
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default InputRichText;
