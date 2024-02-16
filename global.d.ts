export {};
declare global {
  // eslint-disable-next-line vars-on-top, no-var, no-underscore-dangle
  var _mongo: Promise<MongoClient> | undefined;
}
