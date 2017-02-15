// Import the neccesary modules.
import ExtraTorrentAPI from 'extratorrent-api';

import AnimeExtractor from '../extractors/AnimeExtractor';
import { onError } from '../../utils';

/** Class for scraping anime shows from https://extratorrent.cc/. */
export default class ExtraTorrent {

   /**
    * Create an extratorrent object for anime content.
    * @param {String} name - The name of the content provider.
    * @param {?Boolean} debug - Debug mode for extra output.
    */
  constructor(name, debug) {
    /**
     * The name of the torrent provider.
     * @type {String}
     */
    this.name = name;

    /**
     * The extractor object for getting anime data on torrents.
     * @type {AnimeExtractor}
     */
    // this._extractor = 
  }

  /**
   * Returns a list of all the inserted torrents.
   * @param {Object} provider - The provider to query https://extratorrent.cc/.
   * @returns {Anime[]} - A list of scraped anime shows.
   */
  async search(provider) {
    try {
      logger.info(`${this.name}: Starting scraping...`);
      return await this._extractor.search(provider);
    } catch (err) {
      return onError(err);
    }
  }

}
