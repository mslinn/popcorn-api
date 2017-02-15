// Import the neccesary modules.
import KatAPI from 'kat-api-pt';

import ShowExtractor from '../extractors/ShowExtractor';
import { onError } from '../../utils';

/** Class for scraping shows from https://kat.cr/. */
export default class KAT {

  /**
   * Create a kat object for show content.
   * @param {String} name - The name of the torrent provider.
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
    this._extractor = new ShowExtractor(this.name, new KatAPI());
  }

  /**
   * Returns a list of all the inserted torrents.
   * @param {Object} provider - The provider to query https://kat.cr/.
   * @returns {Show[]} - A list of scraped shows.
   */
  async search(provider) {
    try {
      logger.info(`${this.name}: Starting scraping...`);
      provider.query.page = 1;
      provider.query.verified = 1;
      provider.query.adult_filter = 1;
      provider.query.category = 'tv';
      provider.query.language = 'en';

      return await this._extractor.search(provider);
    } catch (err) {
      return onError(err);
    }
  }

}
