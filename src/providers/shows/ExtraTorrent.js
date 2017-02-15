// Import the neccesary modules.
import ExtraTorrentAPI from 'extratorrent-api';

import ShowExtractor from '../extractors/ShowExtractor';
import { onError } from '../../utils';

/** Class for scraping shows from https://extratorrent.cc/. */
export default class ExtraTorrent {

   /**
    * Create an extratorrent object for show content.
    * @param {String} name - The name of the content provider.
    */
  constructor(name) {
    /**
     * The name of the torrent provider.
     * @type {String}
     */
    this.name = name;

    /**
     * The extractor object for getting show data on torrents.
     * @type {ShowExtractor}
     */
    this._extractor = new ShowExtractor(this.name, new ExtraTorrentAPI());
  }

  /**
   * Returns a list of all the inserted torrents.
   * @param {Object} provider - The provider to query https://extratorrent.cc/.
   * @returns {Show[]} - A list of scraped shows.
   */
  async search(provider) {
    try {
      logger.info(`${this.name}: Starting scraping...`);
      provider.query.category = 'tv';
      provider.query.page = 1;

      return await this._extractor.search(provider);
    } catch (err) {
      return onError(err);
    }
  }

}
