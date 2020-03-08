import { ChildWindow } from './components/App';
import { Cleanup } from './utilities/Cleaner';

(function() {
  const button = document.createElement('button');
  button.innerHTML = 'Click to Open ChildWindow';
  document.body.appendChild(button);
  const listner = () => {
    ChildWindow(Cleanup);
    button.removeEventListener('click', listner);
  };
  button.addEventListener('click', listner);
})();
