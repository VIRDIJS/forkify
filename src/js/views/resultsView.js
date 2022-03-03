import View from './View';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel version 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'Your query returned 0 results. Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
